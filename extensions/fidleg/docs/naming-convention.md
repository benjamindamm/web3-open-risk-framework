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
- **TYPE**: File type prefix (R:, I:, M:)
- **ID**: Unique identifier
- **FIDLEG**: Regulatory extension identifier
- **.md**: Markdown file extension

### Examples

#### Risks
- `R:ADMIN_KEY_COMPROMISE.FIDLEG.md`
- `R:CUSTOMER_CLASSIFICATION.FIDLEG.md`
- `R:MARKET_ABUSE_PREVENTION.FIDLEG.md`

#### Indicators
- `I:LARGE_TRANSACTION.FIDLEG.md`
- `I:MEV_DETECTION.FIDLEG.md`
- `I:RAPID_FUNDS_MOVEMENT.FIDLEG.md`

#### Measures
- `M:IMPLEMENT_MULTI_SIG.FIDLEG.md`
- `M:CUSTOMER_EDUCATION.FIDLEG.md`
- `M:INSURANCE_COVERAGE.FIDLEG.md`

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
│   ├── R:ADMIN_KEY_COMPROMISE.FIDLEG.md
│   ├── R:CUSTOMER_CLASSIFICATION.FIDLEG.md
│   └── ...
├── indicators/
│   ├── I:LARGE_TRANSACTION.FIDLEG.md
│   ├── I:MEV_DETECTION.FIDLEG.md
│   └── ...
└── measures/
    ├── M:IMPLEMENT_MULTI_SIG.FIDLEG.md
    ├── M:CUSTOMER_EDUCATION.FIDLEG.md
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

# Find FIDLEG measures
find module/catalogue/measures/ -name "M:*.FIDLEG.md"
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

## Migration

### Existing Files
When migrating existing files to FIDLEG compliance:
1. Add FIDLEG extension fields
2. Rename file with `.FIDLEG.md` suffix
3. Update references in documentation
4. Validate against FIDLEG schema

### Documentation Updates
- Update file references in documentation
- Modify example code snippets
- Update validation scripts
- Revise report generation logic

## Best Practices

### Consistency
- Always use `.FIDLEG.md` suffix for FIDLEG-compliant files
- Maintain consistent ID naming within each type
- Use descriptive IDs that reflect the content

### Validation
- Validate naming convention in CI/CD pipelines
- Check for proper extension declarations
- Ensure schema compliance

### Documentation
- Document naming convention in project README
- Include examples in usage guides
- Maintain naming convention reference

## Examples

### Risk File
```yaml
---
id: R:ADMIN_KEY_COMPROMISE
title: "Administrative Key Compromise Risk (FIDLEG Compliant)"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "quarterly"
    riskLevel: "CRITICAL"
    applicability:
      customerType: "both"
---
```

### Indicator File
```yaml
---
id: I:MEV_DETECTION
title: "MEV Arbitrage Detection (FIDLEG Compliant)"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"
    measurementFrequency: "REAL_TIME"
    auditRequirement: "EXTERNAL_AUDIT"
    suspiciousPatterns: ["mev_arbitrage"]
    gwg:
      mrosReporting: true
      transactionMonitoring: true
---
```

### Measure File
```yaml
---
id: M:IMPLEMENT_MULTI_SIG
title: "Multi-Signature Implementation (FIDLEG Compliant)"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    implementationDeadline: "2024-06-30"
    auditFrequency: "QUARTERLY"
    regulatoryRequirement: "MANDATORY"
    mitigationType: "TECHNICAL"
    verification:
      method: "audit"
      frequency: "quarterly"
      documentation: "audit_trail"
    assetProtection:
      segregation: "MULTI_SIG"
      custody: "SELF_CUSTODY"
---
```

## Conclusion

The `.FIDLEG.md` naming convention provides clear identification of FIDLEG-compliant files, improves organization, and enables automated processing while maintaining compatibility with the modular extension system.
