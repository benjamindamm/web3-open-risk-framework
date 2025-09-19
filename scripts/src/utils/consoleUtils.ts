import { FileErrors, ValidationStats } from '../types/types.js';

import chalk from 'chalk';

/**
 * Print validation summary
 */
export function printValidationSummary(stats: ValidationStats): void {
  console.log(chalk.yellow('\nValidation Summary:'));
  console.log('==============================');
  console.log(`Total files checked: ${stats.total}`);
  console.log(chalk.green(`Valid files: ${stats.valid}`));
  console.log(chalk.red(`Invalid files: ${stats.invalid}`));
}

/**
 * Print reference validation summary
 */
export function printReferenceValidationSummary(
  filesChecked: number,
  filesWithErrors: number,
  totalErrors: number
): void {
  console.log('\n📊 Validation Summary:');
  console.log('==============================');
  console.log(`Files checked: ${filesChecked}`);
  console.log(`Files with errors: ${filesWithErrors}`);
  console.log(`Total reference errors: ${totalErrors}`);
}

/**
 * Print available files list
 */
export function printAvailableFiles(
  type: string,
  files: string[],
  icon: string = '✅'
): void {
  console.log(`\n${icon} Available ${type} (${files.length}):`);
  if (files.length > 0) {
    files.forEach(file => console.log(`  ✅ ${file}`));
  } else {
    console.log(`  ⚠️ No ${type.toLowerCase()} directory found`);
  }
}

/**
 * Print file validation results
 */
export function printFileResults(
  filePath: string,
  isValid: boolean,
  error?: string
): void {
  if (isValid) {
    console.log(chalk.green(`  ✅ ${filePath}`));
  } else {
    console.log(chalk.red(`  ❌ ${filePath}`));
    if (error) {
      console.log(chalk.red(`     ${error}`));
    }
  }
}

/**
 * Print reference errors
 */
export function printReferenceErrors(filePath: string, errors: any[]): void {
  console.log(`❌ ${filePath}:`);
  errors.forEach(error => {
    console.log(`  - ${error.message}`);
  });
  console.log();
}

/**
 * Print error summary and suggestions
 */
export function printErrorSummary(allErrors: FileErrors[]): void {
  if (allErrors.length > 0) {
    console.log('\n❌ Files with reference errors:');
    allErrors.forEach(({ file, errors }) => {
      console.log(`  ${file}: ${errors.length} errors`);
    });

    console.log('\n💡 Suggested fixes:');
    console.log('1. Remove references to non-existent indicators/measures/assessments/risks');
    console.log('2. Create missing indicators/measures/assessments/risks if needed');
    console.log('3. Use only existing references from the catalogue');
  }
}

/**
 * Print success message
 */
export function printSuccessMessage(message: string = 'All files passed validation!'): void {
  console.log(chalk.green(`\n✅ ${message}`));
}

/**
 * Print header for validation process
 */
export function printValidationHeader(title: string, subtitle?: string): void {
  console.log(`🔍 ${title}`);
  if (subtitle) {
    console.log(`📝 ${subtitle}`);
  }
  console.log('');
}
