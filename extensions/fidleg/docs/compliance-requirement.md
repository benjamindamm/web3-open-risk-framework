# Compliance Requirement

This document explains the `complianceRequirement` field used in FIDLEG-compliant files.

## What is complianceRequirement?

The `complianceRequirement` field specifies how important a risk, indicator, or measure is for Swiss regulatory compliance. It has two parts: `level` and `documentation`.

## Compliance Levels

### MANDATORY
- **What it means**: Required by Swiss law
- **When to use**: For legally required measures
- **Examples**: Customer protection, operational risk management
- **Consequences**: Must be implemented for Swiss market access

### RECOMMENDED
- **What it means**: Best practice from FINMA
- **When to use**: For competitive advantage
- **Examples**: Advanced monitoring, enhanced protection
- **Consequences**: Recommended for better compliance

### OPTIONAL
- **What it means**: Voluntary enhancement
- **When to use**: For differentiation
- **Examples**: Additional reporting, extra features
- **Consequences**: Optional for market differentiation

## Documentation Frequencies

### quarterly
- **What it means**: Report every 3 months
- **When to use**: For critical risks
- **Examples**: Operational risks, market abuse
- **Requirements**: Quarterly reports to FINMA

### annual
- **What it means**: Report once per year
- **When to use**: For standard risks
- **Examples**: Customer classification, organizational risks
- **Requirements**: Annual compliance documentation

### monthly
- **What it means**: Report every month
- **When to use**: For high-risk activities
- **Examples**: Market manipulation, suspicious activities
- **Requirements**: Monthly risk monitoring

### on_demand
- **What it means**: Report when requested
- **When to use**: For incident-based risks
- **Examples**: Security incidents, regulatory inquiries
- **Requirements**: Documentation as required by regulator

## How to Choose the Right Level

### For Critical Risks
```yaml
complianceRequirement:
  level: "MANDATORY"
  documentation:
    frequency: "quarterly"
```

### For Standard Risks
```yaml
complianceRequirement:
  level: "MANDATORY"
  documentation:
    frequency: "annual"
```

### For Best Practices
```yaml
complianceRequirement:
  level: "RECOMMENDED"
  documentation:
    frequency: "annual"
```

### For Optional Enhancements
```yaml
complianceRequirement:
  level: "OPTIONAL"
  documentation:
    frequency: "on_demand"
```

## Examples

### Risk Example
```yaml
regulatoryExtensions:
  fidleg:
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "quarterly"
```

### Indicator Example
```yaml
regulatoryExtensions:
  fidleg:
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "monthly"
```

### Measure Example
```yaml
regulatoryExtensions:
  fidleg:
    complianceRequirement:
      level: "RECOMMENDED"
      documentation:
        frequency: "annual"
```

## Important Notes

- **MANDATORY** risks must be implemented
- **RECOMMENDED** measures improve compliance
- **OPTIONAL** features provide differentiation
- Documentation frequency affects reporting burden
- Choose based on risk criticality and regulatory requirements
