# FIDLEG Naming Convention

This document describes the naming convention for FIDLEG-compliant files within the Web3 Risk Framework.

## Overview

To clearly identify FIDLEG-compliant files and distinguish them from core framework files, we use a specific naming convention that includes the `.FIDLEG` suffix.

## Naming Convention

### Format
```
[TYPE]:[ID].FIDLEG.md
```

### Components
- **TYPE**: File type prefix (R:, I:, M:, A:)
- **ID**: Unique identifier
- **FIDLEG**: Regulatory extension identifier
- **.md**: Markdown file extension

### Examples

#### Risks
- `R:MEV_EXPLOITATION.FIDLEG.md`
- `R:ADMIN_KEY_COMPROMISE.FIDLEG.md`

#### Indicators
- `I:MEV_DETECTION.FIDLEG.md`
- `I:LARGE_TRANSACTION.FIDLEG.md`

#### Measures
- `M:MEV_PROTECTION.FIDLEG.md`
- `M:MULTI_SIG_IMPLEMENTATION.FIDLEG.md`

#### Assessments
- `A:MEV_EXPLOITATION.FIDLEG.md`
- `A:PROTOCOL_SECURITY.FIDLEG.md`

## Benefits

### Clear Identification
- Immediately recognizable as FIDLEG-compliant files
- Easy to filter and search for regulatory extensions
- Clear separation from core framework files

### Organization
- Grouped together when sorted alphabetically
- Easy to identify regulatory compliance scope
- Simplified file management

### Automation
- Easy to identify files for automated processing
- Simple pattern matching for report generation
- Clear filtering criteria for validation

## Implementation

### File Structure
```
module/catalogue/
├── risks/
│   ├── R:MEV_EXPLOITATION.FIDLEG.md
│   └── ...
├── indicators/
│   ├── I:MEV_DETECTION.FIDLEG.md
│   └── ...
├── measures/
│   ├── M:MEV_PROTECTION.FIDLEG.md
│   └── ...
└── assessments/
    ├── A:MEV_EXPLOITATION.FIDLEG.md
    └── ...
```

### Validation
Files with `.FIDLEG.md` suffix must:
- Include `extensions: ["fidleg"]` in frontmatter
- Have `regulatoryExtensions.fidleg` section
- Comply with FIDLEG schema requirements

### Search and Filter
```bash
# Find all FIDLEG files
find module/catalogue/ -name "*.FIDLEG.md"

# Find FIDLEG risks
find module/catalogue/risks/ -name "R:*.FIDLEG.md"

# Find FIDLEG indicators
find module/catalogue/indicators/ -name "I:*.FIDLEG.md"
```

## Extension Compatibility

### Multiple Extensions
For files that comply with multiple regulatory extensions:
```
[TYPE]:[ID].FIDLEG.EUMIFID.md
```

### Future Extensions
The naming convention can be extended for other jurisdictions:
- `.EUMIFID.md` for EU MiFID II
- `.USSEC.md` for US SEC
- `.UKFCA.md` for UK FCA
- `.SGMAS.md` for Singapore MAS

## Best Practices

### Consistency
- Always use `.FIDLEG.md` suffix for FIDLEG-compliant files
- Maintain consistent ID naming within each type
- Use descriptive IDs that reflect the content

### Validation
- Validate naming convention in CI/CD pipelines
- Check for proper extension declarations
- Ensure schema compliance

---

*The `.FIDLEG.md` naming convention provides clear identification of FIDLEG-compliant files, improves organization, and enables automated processing while maintaining compatibility with the modular extension system.*