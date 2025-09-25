# Risk Catalogue Validator

TypeScript-based validation tools for the Web3 Open Risk Framework catalogue.

##  Quick Start

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Usage

#### Validate All Files
```bash
npm run validate-all
```

#### Individual Validations
```bash
# Validate Markdown files against JSON schemas
npm run validate

# Validate cross-references between files
npm run validate-references
```

#### Development Mode
```bash
# Run TypeScript directly (no compilation needed)
npm run dev              # validate-markdown
npm run dev-references   # validate-references
```

##  What Gets Validated

### Markdown Validation (`validate-markdown`)
- **YAML Frontmatter**: Validates against JSON schemas
- **File Types**: Risks, Indicators, Assessments, Measures
- **FIDLEG Extensions**: Special validation for `.FIDLEG.md` files
- **Format Support**: Both ````yaml` blocks and `---` frontmatter

### Reference Validation (`validate-references`)
- **Cross-References**: Validates `I:`, `M:`, `A:`, `R:`, `ACTION:` references
- **File Existence**: Ensures all referenced files exist
- **FIDLEG Support**: Handles `.FIDLEG` extensions
- **Recursive Search**: Scans all subdirectories

##  TypeScript Features

### Type Safety
- **Interface Definitions**: Strong typing for all data structures
- **Error Handling**: Typed error objects and validation results
- **Schema Validation**: Type-safe JSON schema validation

### Development Experience
- **Source Maps**: Debug compiled JavaScript
- **Hot Reload**: Development mode with `ts-node`
- **ESM Support**: Modern ES modules with TypeScript

### Modular Architecture
- **Pure Functions**: All utilities are pure functions for reusability
- **Separation of Concerns**: Each utility module has a specific purpose
- **Easy Testing**: Pure functions are easy to unit test
- **Extensibility**: Simple to add new validation rules or file types

##  Project Structure

```
scripts/
├── src/                    # TypeScript source files
│   ├── validate-markdown.ts
│   ├── validate-references.ts
│   └── utils/              # Reusable utility functions
│       ├── index.ts        # Export all utilities
│       ├── types.ts        # Common type definitions
│       ├── fileUtils.ts    # File system operations
│       ├── yamlUtils.ts    # YAML parsing and extraction
│       ├── referenceUtils.ts # Reference validation logic
│       ├── schemaUtils.ts  # JSON schema validation
│       └── consoleUtils.ts # Console output formatting
├── dist/                   # Compiled JavaScript (generated)
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

##  Available Scripts

| Script | Description |
|--------|-------------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run validate` | Validate Markdown files |
| `npm run validate-references` | Validate cross-references |
| `npm run validate-all` | Run both validations |
| `npm run dev` | Development mode (markdown) |
| `npm run dev-references` | Development mode (references) |

##  Validation Output

### Success Example
```
 All files passed validation!
Files checked: 9
Valid files: 9
Invalid files: 0
```

### Error Example
```
 risks/R:EXAMPLE.md:
  - Indicator I:NONEXISTENT does not exist
  - Measure M:MISSING does not exist
```

##  Troubleshooting

### Common Issues

1. **TypeScript Compilation Errors**
   ```bash
   npm run build
   ```

2. **Missing Dependencies**
   ```bash
   npm install
   ```

3. **Schema Validation Failures**
   - Check YAML syntax in frontmatter
   - Verify required fields are present
   - Ensure data types match schema

4. **Reference Validation Failures**
   - Create missing referenced files
   - Remove invalid references
   - Check file naming conventions

##  Integration

The validator integrates with:
- **CI/CD Pipelines**: Exit codes for automation
- **IDE Extensions**: Real-time validation feedback
- **Documentation**: Automated quality assurance

##  Notes

- **Legacy Support**: Both ````yaml` and `---` frontmatter formats supported
- **FIDLEG Extensions**: Special handling for Swiss compliance extensions
- **Performance**: Optimized for large catalogues with recursive file scanning
- **Extensibility**: Easy to add new validation rules and file types
