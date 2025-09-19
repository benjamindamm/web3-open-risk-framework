# 🔍 Validation Tools

This document describes the validation tools available in the `module/scripts/` directory for ensuring data integrity and consistency in the Risk Framework.

## 📋 Available Scripts

### 1. Schema Validation (`validate-markdown.mjs`)

Validates all Markdown files against their respective JSON schemas:

- **Risk files** (`R:*.md`) against `schema/risk.schema.json`
- **Indicator files** (`I:*.md`) against `schema/indicator.schema.json`
- **Assessment files** (`A:*.md`) against `schema/assessment.schema.json`
- **Measure files** (`M:*.md`) against `schema/measure.schema.json`

**Usage:**
```bash
cd scripts
npm run validate
# or
node validate-markdown.mjs
```

### 2. Reference Validation (`validate-references.mjs`)

Validates all cross-references between files to ensure they point to existing entities:

- **Indicator references** (`I:*`) - checks if referenced indicators exist
- **Measure references** (`M:*`) - checks if referenced measures exist
- **Assessment references** (`A:*`) - checks if referenced assessments exist
- **Risk references** (`R:*`) - checks if referenced risks exist

**Usage:**
```bash
cd scripts
npm run validate-references
# or
node validate-references.mjs
```

### 3. Combined Validation (`validate-all`)

Runs both schema and reference validation in sequence:

```bash
cd scripts
npm run validate-all
```

## 🎯 Validation Features

### Schema Validation
- ✅ YAML frontmatter structure validation
- ✅ Required field validation
- ✅ Data type validation
- ✅ Pattern matching (e.g., ID formats)
- ✅ Enum value validation

### Reference Validation
- ✅ Cross-reference integrity
- ✅ Automatic discovery of available entities
- ✅ Detailed error reporting with suggestions
- ✅ Support for missing directories (e.g., measures)
- ✅ Comprehensive file scanning

## 📊 Output Examples

### Successful Validation
```
✅ All files passed validation!
✅ All references are valid!
```

### Error Reporting
```
❌ catalogue/risks/R:EXAMPLE.md:
  - Indicator I:NONEXISTENT does not exist
  - Measure M:MISSING does not exist

💡 Suggested fixes:
1. Remove references to non-existent indicators/measures/assessments/risks
2. Create missing indicators/measures/assessments/risks if needed
3. Use only existing references from the catalogue
```

## 🔧 Integration

### CI/CD Pipeline
```bash
# Add to your build pipeline
cd module/scripts
npm run validate-all
```

### Pre-commit Hook
```bash
#!/bin/sh
cd module/scripts
npm run validate-all
if [ $? -ne 0 ]; then
    echo "Validation failed. Please fix errors before committing."
    exit 1
fi
```

### Package.json Scripts
```json
{
  "scripts": {
    "validate": "node validate-markdown.mjs",
    "validate-references": "node validate-references.mjs",
    "validate-all": "npm run validate && npm run validate-references"
  }
}
```

## 🚨 Error Handling

- **Exit Code 0**: All validations passed
- **Exit Code 1**: Validation errors found
- **Detailed Reports**: Shows exactly which files and references have issues
- **Actionable Suggestions**: Provides specific guidance for fixing errors

## 📁 Directory Structure

```
module/
├── docs/                          # Framework documentation
│   ├── categories.md
│   ├── types.md
│   ├── scopes.md
│   ├── objectives.md
│   ├── owners.md
│   ├── risk.md
│   ├── indicator.md
│   ├── measure.md
│   ├── assessment.md
│   ├── philosophy.md
│   ├── terminology.md
│   └── methodology.md
├── scripts/
│   ├── validate-markdown.mjs      # Schema validation
│   ├── validate-references.mjs     # Reference validation
│   ├── package.json               # Script configuration
│   └── node_modules/              # Dependencies
├── schema/                        # JSON schemas
│   ├── risk.schema.json
│   ├── indicator.schema.json
│   ├── assessment.schema.json
│   └── measure.schema.json
└── catalogue/                     # Content files
    ├── risks/
    ├── indicators/
    ├── assessments/
    └── measures/
```

## 🔄 Workflow

1. **Develop**: Create or modify risk/indicator/assessment/measure files
2. **Validate**: Run validation scripts to check for errors
3. **Fix**: Address any validation errors found
4. **Commit**: Only commit after all validations pass

This ensures consistent, high-quality data throughout the Risk Framework.
