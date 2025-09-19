import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import fs from 'fs';
import path from 'path';
/**
 * Create AJV validator instance with common configuration
 */
export function createAjvValidator() {
    const ajv = new Ajv2020({ allErrors: true, strict: false });
    addFormats(ajv);
    return ajv;
}
/**
 * Load JSON schema from file
 */
export function loadSchema(schemaPath) {
    return JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
}
/**
 * Get appropriate schema path for FIDLEG files
 */
export function getSchemaPath(baseSchemaPath, filePath, scriptDir) {
    if (!filePath.includes('.FIDLEG.md')) {
        return baseSchemaPath;
    }
    const fidlegSchemaPath = path.resolve(scriptDir, '..', '..', 'extensions', 'fidleg', 'schema', path.basename(baseSchemaPath).replace('.schema.json', '-fidleg.schema.json'));
    if (fs.existsSync(fidlegSchemaPath)) {
        return fidlegSchemaPath;
    }
    return baseSchemaPath;
}
/**
 * Create combined schema for FIDLEG files
 */
export function createCombinedSchema(baseSchema, fidlegSchema) {
    const combinedSchema = {
        ...baseSchema,
        ...fidlegSchema,
        allOf: [
            baseSchema,
            fidlegSchema
        ]
    };
    delete combinedSchema.allOf; // Remove the allOf to avoid circular reference
    return combinedSchema;
}
/**
 * Compile schema for validation
 */
export function compileSchema(schemaPath, filePath, scriptDir, ajv) {
    const actualSchemaPath = getSchemaPath(schemaPath, filePath, scriptDir);
    const schema = loadSchema(actualSchemaPath);
    // For FIDLEG schemas, we need to resolve the $ref paths manually
    if (actualSchemaPath.includes('fidleg')) {
        const baseSchemaPath = path.resolve(scriptDir, '..', '..', 'schema', path.basename(actualSchemaPath).replace('-fidleg.schema.json', '.schema.json'));
        const baseSchema = loadSchema(baseSchemaPath);
        const combinedSchema = createCombinedSchema(baseSchema, schema);
        return ajv.compile(combinedSchema);
    }
    return ajv.compile(schema);
}
/**
 * Validate data against schema
 */
export function validateAgainstSchema(data, schemaPath, filePath, scriptDir) {
    const ajv = createAjvValidator();
    const validate = compileSchema(schemaPath, filePath, scriptDir, ajv);
    const valid = validate(data);
    if (!valid) {
        return {
            valid: false,
            error: ajv.errorsText(validate.errors, { separator: '\n' })
        };
    }
    return { valid: true };
}
//# sourceMappingURL=schemaUtils.js.map