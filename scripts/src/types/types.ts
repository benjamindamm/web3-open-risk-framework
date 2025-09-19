// Common types used across validation utilities

export interface ReferenceError {
    type: 'indicator' | 'measure' | 'assessment' | 'risk' | 'action';
    reference: string;
    message: string;
}

export interface FileErrors {
    file: string;
    errors: ReferenceError[];
}

export interface ExtractedReferences {
    indicatorRefs: string[];
    measureRefs: string[];
    assessmentRefs: string[];
    riskRefs: string[];
    actionRefs: string[];
}

export interface FileType {
    name: string;
    pattern: RegExp;
    schema: string;
}

export interface ValidationResult {
    valid: boolean;
    error?: string;
}

export interface ValidationStats {
    total: number;
    valid: number;
    invalid: number;
}
