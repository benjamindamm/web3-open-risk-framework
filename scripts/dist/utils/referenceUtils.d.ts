import { ExtractedReferences, FileErrors, ReferenceError } from '../types/types.js';
/**
 * Extract all references from markdown content
 */
export declare function extractReferences(content: string): ExtractedReferences;
/**
 * Validate references against available files
 */
export declare function validateReferences(references: ExtractedReferences, availableIndicators: string[], availableMeasures: string[], availableAssessments: string[], availableRisks: string[], availableActions: string[]): ReferenceError[];
/**
 * Validate references in a single file
 */
export declare function validateFileReferences(filePath: string, availableIndicators: string[], availableMeasures: string[], availableAssessments: string[], availableRisks: string[], availableActions: string[]): ReferenceError[];
/**
 * Validate all references in a catalogue directory
 */
export declare function validateAllReferences(catalogueDir: string, baseDir: string, title?: string): {
    filesChecked: number;
    filesWithErrors: number;
    totalErrors: number;
    allErrors: FileErrors[];
};
//# sourceMappingURL=referenceUtils.d.ts.map