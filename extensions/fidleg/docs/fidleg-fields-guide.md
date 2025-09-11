# FIDLEG Fields Guide

This guide explains all the fields you can use in FIDLEG-compliant files. Each field has its own detailed documentation.

## Quick Reference

| Field | Used In | Purpose | Documentation |
|-------|---------|---------|---------------|
| `articleReference` | All | Which Swiss law article applies | [article-reference.md](./article-reference.md) |
| `complianceRequirement` | All | How important for compliance | [compliance-requirement.md](./compliance-requirement.md) |
| `riskLevel` | Risks | How serious the risk is | [risk-level.md](./risk-level.md) |
| `customerType` | All | Which customers it applies to | [customer-type.md](./customer-type.md) |
| `suspiciousPatterns` | Indicators | What to monitor for | [suspicious-patterns.md](./suspicious-patterns.md) |

## Field Categories

### Required Fields (Must Have)
- **articleReference**: Always specify which Swiss law article applies
- **complianceRequirement**: Always specify how important it is

### Risk-Specific Fields
- **riskLevel**: How serious the risk is (LOW, MEDIUM, HIGH, CRITICAL)
- **customerType**: Which customers are affected (retail, professional, both)

### Indicator-Specific Fields
- **suspiciousPatterns**: What suspicious activities to monitor
- **measurementFrequency**: How often to check (REAL_TIME, DAILY, etc.)
- **auditRequirement**: What type of audit is needed

### Measure-Specific Fields
- **mitigationType**: What type of solution (TECHNICAL, ORGANIZATIONAL, etc.)
- **verification**: How to verify it works
- **assetProtection**: How to protect assets
- **insurance**: What insurance is needed

## How to Use This Guide

1. **Start with the field name** you want to understand
2. **Click the documentation link** to get detailed information
3. **Follow the examples** to see how to use it
4. **Choose the right values** based on your situation

## Common Combinations

### For Critical Risks
```yaml
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
```

### For Standard Monitoring
```yaml
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "monthly"
    suspiciousPatterns: ["mev_arbitrage"]
```

### For Best Practice Measures
```yaml
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art24"
    complianceRequirement:
      level: "RECOMMENDED"
      documentation:
        frequency: "annual"
    mitigationType: "ORGANIZATIONAL"
```

## Need Help?

1. **Check the field documentation** for detailed explanations
2. **Look at the examples** to see how others use it
3. **Start simple** with required fields first
4. **Ask your compliance team** for guidance
5. **Review Swiss FIDLEG documentation** for legal requirements

## Field Documentation Links

- [article-reference.md](./article-reference.md) - Which Swiss law article applies
- [compliance-requirement.md](./compliance-requirement.md) - How important for compliance
- [risk-level.md](./risk-level.md) - How serious the risk is
- [customer-type.md](./customer-type.md) - Which customers are affected
- [suspicious-patterns.md](./suspicious-patterns.md) - What to monitor for

## Additional Resources

- [FIDLEG Extension Overview](./fidleg-extension.md) - Complete FIDLEG documentation
- [Usage Examples](./usage-examples.md) - Practical examples
- [Naming Convention](./naming-convention.md) - How to name files
- [FINMA Reporting](./finma-reporting-template.md) - How to report to FINMA
