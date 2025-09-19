/**
 * Extract YAML block from markdown content
 * Supports both ```yaml blocks (preferred) and --- frontmatter (legacy)
 */
export declare function extractYamlBlock(content: string): string | null;
/**
 * Parse YAML content safely
 */
export declare function parseYaml(yamlContent: string): {
    data: any;
    error?: string;
};
/**
 * Normalize date fields in parsed data for validation
 */
export declare function normalizeDateFields(data: any): any;
/**
 * Extract and parse YAML from markdown content
 */
export declare function extractAndParseYaml(content: string): {
    data: any;
    error?: string;
};
//# sourceMappingURL=yamlUtils.d.ts.map