#!/usr/bin/env node

import {
  printErrorSummary,
  printSuccessMessage,
  validateAllReferences
} from './utils/index.js';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the module root directory
const moduleRoot = path.resolve(__dirname, '..', '..');

// Main validation function
function main(): void {
  const catalogueDir = path.join(moduleRoot, 'catalogue');

  const result = validateAllReferences(
    catalogueDir,
    moduleRoot,
    'Validating References in Module Risk Framework'
  );

  if (result.filesWithErrors > 0) {
    printErrorSummary(result.allErrors);
    process.exit(1);
  } else {
    printSuccessMessage('All references are valid!');
    process.exit(0);
  }
}

// Run validation
main();
