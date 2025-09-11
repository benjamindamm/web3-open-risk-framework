import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Find the module root directory (where catalogue/ and schema/ folders are located)
const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const baseDir = path.resolve(scriptDir, '../catalogue');
const schemaDir = path.resolve(scriptDir, '../schema');

const fileTypes = [
  {
    name: 'Risk',
    pattern: /risks\/[\w_\-:.]+\.md$/,
    schema: 'risk.schema.json',
  },
  {
    name: 'Indicator',
    pattern: /indicators\/[\w_\-:.]+\.md$/,
    schema: 'indicator.schema.json',
  },
  {
    name: 'Assessment',
    pattern: /assessments\/[\w_\-:.]+\.md$/,
    schema: 'assessment.schema.json',
  },
  {
    name: 'Measure',
    pattern: /measures\/[\w_\-:.]+\.md$/,
    schema: 'measure.schema.json',
  },
];

function findFiles(dir, regex) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findFiles(filePath, regex));
    } else if (regex.test(filePath.replace(process.cwd() + '/', '')) || regex.test(filePath)) {
      results.push(filePath);
    }
  });
  return results;
}

function extractYamlBlock(content) {
  // First try to extract YAML frontmatter (--- at the beginning)
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (frontmatterMatch) {
    return frontmatterMatch[1];
  }
  
  // Fallback to YAML code blocks
  const match = content.match(/```yaml\s*([\s\S]*?)\s*```/);
  return match ? match[1] : null;
}

function validateFile(filePath, schemaPath, ajv) {
  const content = fs.readFileSync(filePath, 'utf8');
  const yamlBlock = extractYamlBlock(content);
  if (!yamlBlock) {
    return { valid: false, error: 'Missing or invalid YAML frontmatter.' };
  }
  let data;
  try {
    data = yaml.load(yamlBlock);
  } catch (e) {
    return { valid: false, error: 'YAML parse error: ' + e.message };
  }
  
  // Convert Date objects back to ISO strings for validation
  if (data.lastUpdate instanceof Date) {
    data.lastUpdate = data.lastUpdate.toISOString().split('T')[0];
  }
  if (data.date instanceof Date) {
    data.date = data.date.toISOString().split('T')[0];
  }
  
  const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    return { valid: false, error: ajv.errorsText(validate.errors, { separator: '\n' }) };
  }
  return { valid: true };
}

async function main() {
  let total = 0, valid = 0, invalid = 0;
  for (const type of fileTypes) {
    const dir = path.join(baseDir, type.name.toLowerCase() + 's');
    if (!fs.existsSync(dir)) continue;
    const files = findFiles(dir, type.pattern);
    if (files.length === 0) continue;
    console.log(chalk.yellow(`\nValidating ${type.name} Files:`));
    const schemaPath = path.join(schemaDir, type.schema);
    const ajv = new Ajv2020({ allErrors: true, strict: false });
    addFormats(ajv);
    for (const file of files) {
      total++;
      const result = validateFile(file, schemaPath, ajv);
      const shortName = path.relative(baseDir, file);
      if (result.valid) {
        console.log(chalk.green(`  ✅ ${shortName}`));
        valid++;
      } else {
        console.log(chalk.red(`  ❌ ${shortName}`));
        console.log(chalk.red(`     ${result.error}`));
        invalid++;
      }
    }
  }
  console.log(chalk.yellow('\nValidation Summary:'));
  console.log('==============================');
  console.log(`Total files checked: ${total}`);
  console.log(chalk.green(`Valid files: ${valid}`));
  console.log(chalk.red(`Invalid files: ${invalid}`));
  if (invalid > 0) {
    process.exit(1);
  } else {
    console.log(chalk.green('\n✅ All files passed validation!'));
    process.exit(0);
  }
}

main(); 