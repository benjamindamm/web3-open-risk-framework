#!/usr/bin/env node

import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the module root directory
const moduleRoot = path.resolve(__dirname, '..');

// Read all indicator files
function getAvailableIndicators() {
    const indicatorsDir = path.join(moduleRoot, 'catalogue', 'indicators');
    if (!fs.existsSync(indicatorsDir)) {
        return [];
    }
    const files = fs.readdirSync(indicatorsDir);
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''))
        .sort();
}

// Read all measure files (if they exist)
function getAvailableMeasures() {
    const measuresDir = path.join(moduleRoot, 'catalogue', 'measures');
    if (!fs.existsSync(measuresDir)) {
        return [];
    }
    const files = fs.readdirSync(measuresDir);
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''))
        .sort();
}

// Read all assessment files (if they exist)
function getAvailableAssessments() {
    const assessmentsDir = path.join(moduleRoot, 'catalogue', 'assessments');
    if (!fs.existsSync(assessmentsDir)) {
        return [];
    }
    const files = fs.readdirSync(assessmentsDir);
    return files
        .filter(file => file.endsWith('.md'))
        .map(file => file.replace('.md', ''))
        .sort();
}

// Extract references from markdown content
function extractReferences(content) {
    const indicatorRefs = [];
    const measureRefs = [];
    const assessmentRefs = [];
    const riskRefs = [];
    
    // Find I: references
    const indicatorMatches = content.match(/I:[A-Z_]+/g);
    if (indicatorMatches) {
        indicatorRefs.push(...new Set(indicatorMatches));
    }
    
    // Find M: references
    const measureMatches = content.match(/M:[A-Z_]+/g);
    if (measureMatches) {
        measureRefs.push(...new Set(measureMatches));
    }
    
    // Find A: references (assessments)
    const assessmentMatches = content.match(/A:[A-Z_]+/g);
    if (assessmentMatches) {
        assessmentRefs.push(...new Set(assessmentMatches));
    }
    
    // Find R: references (risks)
    const riskMatches = content.match(/R:[A-Z_]+/g);
    if (riskMatches) {
        riskRefs.push(...new Set(riskMatches));
    }
    
    return { indicatorRefs, measureRefs, assessmentRefs, riskRefs };
}

// Validate references in a file
function validateFileReferences(filePath, availableIndicators, availableMeasures, availableAssessments, availableRisks) {
    const content = fs.readFileSync(filePath, 'utf8');
    const { indicatorRefs, measureRefs, assessmentRefs, riskRefs } = extractReferences(content);
    
    const errors = [];
    
    // Check indicator references
    for (const ref of indicatorRefs) {
        if (!availableIndicators.includes(ref)) {
            errors.push({
                type: 'indicator',
                reference: ref,
                message: `Indicator ${ref} does not exist`
            });
        }
    }
    
    // Check measure references
    for (const ref of measureRefs) {
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
    for (const ref of assessmentRefs) {
        if (!availableAssessments.includes(ref)) {
            errors.push({
                type: 'assessment',
                reference: ref,
                message: `Assessment ${ref} does not exist`
            });
        }
    }
    
    // Check risk references
    for (const ref of riskRefs) {
        if (!availableRisks.includes(ref)) {
            errors.push({
                type: 'risk',
                reference: ref,
                message: `Risk ${ref} does not exist`
            });
        }
    }
    
    return errors;
}

// Main validation function
function validateAllReferences() {
    console.log('🔍 Validating References in Module Risk Framework...\n');
    
    const availableIndicators = getAvailableIndicators();
    const availableMeasures = getAvailableMeasures();
    const availableAssessments = getAvailableAssessments();
    const availableRisks = [];
    
    // Get available risks from catalogue/risks directory
    const risksDir = path.join(moduleRoot, 'catalogue', 'risks');
    if (fs.existsSync(risksDir)) {
        const files = fs.readdirSync(risksDir);
        availableRisks.push(...files
            .filter(file => file.endsWith('.md'))
            .map(file => file.replace('.md', ''))
            .sort());
    }
    
    console.log(`📊 Available Indicators (${availableIndicators.length}):`);
    availableIndicators.forEach(indicator => console.log(`  ✅ ${indicator}`));
    
    console.log(`\n🛠️ Available Measures (${availableMeasures.length}):`);
    if (availableMeasures.length > 0) {
        availableMeasures.forEach(measure => console.log(`  ✅ ${measure}`));
    } else {
        console.log('  ⚠️ No measures directory found');
    }
    
    console.log(`\n📋 Available Assessments (${availableAssessments.length}):`);
    if (availableAssessments.length > 0) {
        availableAssessments.forEach(assessment => console.log(`  ✅ ${assessment}`));
    } else {
        console.log('  ⚠️ No assessments directory found');
    }
    
    console.log(`\n⚠️ Available Risks (${availableRisks.length}):`);
    if (availableRisks.length > 0) {
        availableRisks.forEach(risk => console.log(`  ✅ ${risk}`));
    } else {
        console.log('  ⚠️ No risks directory found');
    }
    
    console.log('\n🔍 Checking Files...\n');
    
    const allErrors = [];
    let filesChecked = 0;
    
    // Recursively find all .md files in catalogue directory
    function findMarkdownFiles(dir) {
        const files = [];
        if (!fs.existsSync(dir)) {
            return files;
        }
        
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                files.push(...findMarkdownFiles(fullPath));
            } else if (item.endsWith('.md')) {
                files.push(fullPath);
            }
        }
        
        return files;
    }
    
    const catalogueDir = path.join(moduleRoot, 'catalogue');
    const catalogueFiles = findMarkdownFiles(catalogueDir);
    
    for (const filePath of catalogueFiles) {
        const relativePath = path.relative(moduleRoot, filePath);
        const errors = validateFileReferences(filePath, availableIndicators, availableMeasures, availableAssessments, availableRisks);
        
        if (errors.length > 0) {
            console.log(`❌ ${relativePath}:`);
            errors.forEach(error => {
                console.log(`  - ${error.message}`);
            });
            console.log();
            allErrors.push({ file: relativePath, errors });
        } else {
            console.log(`✅ ${relativePath}`);
        }
        
        filesChecked++;
    }
    
    console.log('\n📊 Validation Summary:');
    console.log('==============================');
    console.log(`Files checked: ${filesChecked}`);
    console.log(`Files with errors: ${allErrors.length}`);
    console.log(`Total reference errors: ${allErrors.reduce((sum, file) => sum + file.errors.length, 0)}`);
    
    if (allErrors.length > 0) {
        console.log('\n❌ Files with reference errors:');
        allErrors.forEach(({ file, errors }) => {
            console.log(`  ${file}: ${errors.length} errors`);
        });
        
        console.log('\n💡 Suggested fixes:');
        console.log('1. Remove references to non-existent indicators/measures/assessments/risks');
        console.log('2. Create missing indicators/measures/assessments/risks if needed');
        console.log('3. Use only existing references from the catalogue');
        
        process.exit(1);
    } else {
        console.log('\n✅ All references are valid!');
        process.exit(0);
    }
}

// Run validation
validateAllReferences();
