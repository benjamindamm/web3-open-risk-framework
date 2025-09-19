import { FileErrors, ValidationStats } from '../types/types.js';
/**
 * Print validation summary
 */
export declare function printValidationSummary(stats: ValidationStats): void;
/**
 * Print reference validation summary
 */
export declare function printReferenceValidationSummary(filesChecked: number, filesWithErrors: number, totalErrors: number): void;
/**
 * Print available files list
 */
export declare function printAvailableFiles(type: string, files: string[], icon?: string): void;
/**
 * Print file validation results
 */
export declare function printFileResults(filePath: string, isValid: boolean, error?: string): void;
/**
 * Print reference errors
 */
export declare function printReferenceErrors(filePath: string, errors: any[]): void;
/**
 * Print error summary and suggestions
 */
export declare function printErrorSummary(allErrors: FileErrors[]): void;
/**
 * Print success message
 */
export declare function printSuccessMessage(message?: string): void;
/**
 * Print header for validation process
 */
export declare function printValidationHeader(title: string, subtitle?: string): void;
//# sourceMappingURL=consoleUtils.d.ts.map