import { findMarkdownFiles, getFilesFromDirectory, getRelativePath, readFileSafely } from './fileUtils.js';
import { printAvailableFiles, printReferenceErrors, printReferenceValidationSummary, printValidationHeader } from './consoleUtils.js';
import path from 'path';
/**
 * Extract all references from markdown content
 */
export function extractReferences(content) {
    const indicatorRefs = [];
    const measureRefs = [];
    const assessmentRefs = [];
    const riskRefs = [];
    const actionRefs = [];
    // Find I: references (including .FIDLEG extensions)
    const indicatorMatches = content.match(/I:[A-Z_]+(?:\.FIDLEG)?/g);
    if (indicatorMatches) {
        indicatorRefs.push(...new Set(indicatorMatches));
    }
    // Find M: references (including .FIDLEG extensions)
    const measureMatches = content.match(/M:[A-Z_]+(?:\.FIDLEG)?/g);
    if (measureMatches) {
        measureRefs.push(...new Set(measureMatches));
    }
    // Find A: references (assessments, including .FIDLEG extensions)
    // Match A: followed by word characters, but exclude ACTION: patterns
    const assessmentMatches = content.match(/\bA:[A-Z_]+(?:\.FIDLEG)?\b/g);
    if (assessmentMatches) {
        // Filter out ACTION: patterns
        const filteredMatches = assessmentMatches.filter(match => !match.includes('ACTION:'));
        assessmentRefs.push(...new Set(filteredMatches));
    }
    // Find R: references (risks, including .FIDLEG extensions)
    const riskMatches = content.match(/R:[A-Z_]+(?:\.FIDLEG)?/g);
    if (riskMatches) {
        riskRefs.push(...new Set(riskMatches));
    }
    // Find ACTION: references (FIDLEG actions)
    const actionMatches = content.match(/ACTION:[A-Z_]+:[A-Z_]+/g);
    if (actionMatches) {
        actionRefs.push(...new Set(actionMatches));
    }
    return { indicatorRefs, measureRefs, assessmentRefs, riskRefs, actionRefs };
}
/**
 * Validate references against available files
 */
export function validateReferences(references, availableIndicators, availableMeasures, availableAssessments, availableRisks, availableActions) {
    const errors = [];
    // Check indicator references
    for (const ref of references.indicatorRefs) {
        if (!availableIndicators.includes(ref)) {
            errors.push({
                type: 'indicator',
                reference: ref,
                message: `Indicator ${ref} does not exist`
            });
        }
    }
    // Check measure references
    for (const ref of references.measureRefs) {
        if (!availableMeasures.includes(ref)) {
            // Only report as error if measures directory exists but measure is missing
            if (availableMeasures.length > 0) {
                errors.push({
                    type: 'measure',
                    reference: ref,
                    message: `Measure ${ref} does not exist`
                });
            }
            // If no measures directory exists, skip validation (measures are expected to be referenced)
        }
    }
    // Check assessment references
    for (const ref of references.assessmentRefs) {
        if (!availableAssessments.includes(ref)) {
            errors.push({
                type: 'assessment',
                reference: ref,
                message: `Assessment ${ref} does not exist`
            });
        }
    }
    // Check risk references
    for (const ref of references.riskRefs) {
        if (!availableRisks.includes(ref)) {
            errors.push({
                type: 'risk',
                reference: ref,
                message: `Risk ${ref} does not exist`
            });
        }
    }
    // Check action references
    for (const ref of references.actionRefs) {
        if (!availableActions.includes(ref)) {
            errors.push({
                type: 'action',
                reference: ref,
                message: `Action ${ref} does not exist`
            });
        }
    }
    return errors;
}
/**
 * Validate references in a single file
 */
export function validateFileReferences(filePath, availableIndicators, availableMeasures, availableAssessments, availableRisks, availableActions) {
    const content = readFileSafely(filePath);
    if (!content) {
        return [{
                type: 'indicator',
                reference: 'FILE_READ_ERROR',
                message: `Could not read file ${filePath}`
            }];
    }
    const references = extractReferences(content);
    return validateReferences(references, availableIndicators, availableMeasures, availableAssessments, availableRisks, availableActions);
}
/**
 * Validate all references in a catalogue directory
 */
export function validateAllReferences(catalogueDir, baseDir, title = 'Validating References in Risk Framework') {
    printValidationHeader(title);
    // Get all available files
    const availableIndicators = getFilesFromDirectory(path.join(catalogueDir, 'indicators'));
    const availableMeasures = getFilesFromDirectory(path.join(catalogueDir, 'measures'));
    const availableAssessments = getFilesFromDirectory(path.join(catalogueDir, 'assessments'));
    const availableRisks = getFilesFromDirectory(path.join(catalogueDir, 'risks'));
    const availableActions = getFilesFromDirectory(path.join(catalogueDir, 'actions'));
    // Print available files
    printAvailableFiles('Indicators', availableIndicators, '📊');
    printAvailableFiles('Measures', availableMeasures, '🛠️');
    printAvailableFiles('Assessments', availableAssessments, '📋');
    printAvailableFiles('Risks', availableRisks, '⚠️');
    printAvailableFiles('Actions', availableActions, '🎯');
    console.log('\n🔍 Checking Files...\n');
    const allErrors = [];
    let filesChecked = 0;
    const catalogueFiles = findMarkdownFiles(catalogueDir);
    for (const filePath of catalogueFiles) {
        const relativePath = getRelativePath(filePath, baseDir);
        const errors = validateFileReferences(filePath, availableIndicators, availableMeasures, availableAssessments, availableRisks, availableActions);
        if (errors.length > 0) {
            printReferenceErrors(relativePath, errors);
            allErrors.push({ file: relativePath, errors });
        }
        else {
            console.log(`✅ ${relativePath}`);
        }
        filesChecked++;
    }
    const totalErrors = allErrors.reduce((sum, file) => sum + file.errors.length, 0);
    printReferenceValidationSummary(filesChecked, allErrors.length, totalErrors);
    return {
        filesChecked,
        filesWithErrors: allErrors.length,
        totalErrors,
        allErrors
    };
}
//# sourceMappingURL=referenceUtils.js.map