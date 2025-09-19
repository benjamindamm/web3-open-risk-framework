import { ValidationResult } from '../types/types.js';
/**
 * Create AJV validator instance with common configuration
 */
export declare function createAjvValidator(): any;
/**
 * Load JSON schema from file
 */
export declare function loadSchema(schemaPath: string): any;
/**
 * Get appropriate schema path for FIDLEG files
 */
export declare function getSchemaPath(baseSchemaPath: string, filePath: string, scriptDir: string): string;
/**
 * Create combined schema for FIDLEG files
 */
export declare function createCombinedSchema(baseSchema: any, fidlegSchema: any): any;
/**
 * Compile schema for validation
 */
export declare function compileSchema(schemaPath: string, filePath: string, scriptDir: string, ajv: any): any;
/**
 * Validate data against schema
 */
export declare function validateAgainstSchema(data: any, schemaPath: string, filePath: string, scriptDir: string): ValidationResult;
//# sourceMappingURL=schemaUtils.d.ts.map