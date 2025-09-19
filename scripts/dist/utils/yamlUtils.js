import yaml from 'js-yaml';
/**
 * Extract YAML block from markdown content
 * Supports both ```yaml blocks (preferred) and --- frontmatter (legacy)
 */
export function extractYamlBlock(content) {
    // Extract YAML from ```yaml code blocks (preferred format)
    const yamlMatch = content.match(/```yaml\s*([\s\S]*?)\s*```/);
    if (yamlMatch) {
        return yamlMatch[1];
    }
    // Fallback to YAML frontmatter (legacy support)
    const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
    if (frontmatterMatch) {
        console.warn('⚠️  Using legacy frontmatter format (---). Please convert to ```yaml blocks.');
        return frontmatterMatch[1];
    }
    return null;
}
/**
 * Parse YAML content safely
 */
export function parseYaml(yamlContent) {
    try {
        const data = yaml.load(yamlContent);
        return { data };
    }
    catch (error) {
        return {
            data: null,
            error: 'YAML parse error: ' + error.message
        };
    }
}
/**
 * Normalize date fields in parsed data for validation
 */
export function normalizeDateFields(data) {
    const normalized = { ...data };
    // Convert Date objects back to ISO strings for validation
    if (normalized.lastUpdate instanceof Date) {
        normalized.lastUpdate = normalized.lastUpdate.toISOString().split('T')[0];
    }
    if (normalized.date instanceof Date) {
        normalized.date = normalized.date.toISOString().split('T')[0];
    }
    return normalized;
}
/**
 * Extract and parse YAML from markdown content
 */
export function extractAndParseYaml(content) {
    const yamlBlock = extractYamlBlock(content);
    if (!yamlBlock) {
        return {
            data: null,
            error: 'Missing or invalid YAML block. Expected ```yaml ... ``` format.'
        };
    }
    const parseResult = parseYaml(yamlBlock);
    if (parseResult.error) {
        return parseResult;
    }
    const normalizedData = normalizeDateFields(parseResult.data);
    return { data: normalizedData };
}
//# sourceMappingURL=yamlUtils.js.map