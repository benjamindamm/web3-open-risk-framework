# FIDLEG Extension Usage Examples

This document provides practical examples of how to use the FIDLEG extension with the Web3 Risk Framework.

## Basic Usage

### Risk with FIDLEG Extension

```yaml
---
id: R:CREDIT_DEFAULT
title: Credit Default Risk
category: FINANCIAL
type: QUANTITATIVE
scopes: [TRADE, CUSTODY]
owners: [INVESTOR, TEAM]
objectives:
  - type: "Capital Preservation"
    direction: "DECREASE"
    goal: "DECREASE"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    regulatoryClassification: "RISK_MANAGEMENT"
    complianceRequirement: "MANDATORY"
    riskLevel: "HIGH"
---
```

### Indicator with FIDLEG Extension

```yaml
---
id: I:COLLATERAL_RATIO
title: Collateral Ratio Monitoring
type: Indicator
version: 1.0
lastUpdate: "2024-01-15"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    measurementFrequency: "REAL_TIME"
    regulatoryThreshold: "> 150%"
    auditRequirement: "EXTERNAL_AUDIT"
---
```

### Measure with FIDLEG Extension

```yaml
---
id: M:INCREASE_COLLATERAL
title: Increase Collateral Requirements
type: Measure
version: 1.0
lastUpdate: "2024-01-15"
impactPotential: "HIGH"
riskReductionScope:
  severity: true
  likelihood: true
  persistence: false
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    implementationDeadline: "2024-06-30"
    auditFrequency: "QUARTERLY"
    regulatoryRequirement: "MANDATORY"
---
```

## Multiple Extensions

### Risk with Multiple Regulatory Extensions

```yaml
---
id: R:MARKET_MANIPULATION
title: Market Manipulation Risk
category: FINANCIAL
type: QUANTITATIVE
scopes: [TRADE, MARKET_MANIPULATION]
owners: [INVESTOR, TEAM, REGULATOR]
objectives:
  - type: "Market Integrity"
    direction: "DECREASE"
    goal: "DECREASE"
extensions: ["fidleg", "euMiFID"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"
    regulatoryClassification: "MARKET_INTEGRITY"
    complianceRequirement: "MANDATORY"
    riskLevel: "CRITICAL"
  euMiFID:
    articleReference: "MiFID_II_Art12"
    regulatoryClassification: "MARKET_ABUSE"
    complianceRequirement: "MANDATORY"
    riskLevel: "CRITICAL"
---
```

## Validation

### Core Framework Only

```yaml
---
id: R:BASIC_RISK
title: Basic Risk
category: TECHNICAL
type: QUALITATIVE
scopes: [NETWORK]
owners: [TEAM]
objectives:
  - type: "System Stability"
    direction: "DECREASE"
    goal: "DECREASE"
# No extensions field = Core Framework only
---
```

### FIDLEG Extension Required

```yaml
---
id: R:SWISS_CLIENT_PROTECTION
title: Swiss Client Protection Risk
category: COMPLIANCE
type: QUALITATIVE
scopes: [CUSTOMER_CLASSIFICATION]
owners: [COMPLIANCE, REGULATOR]
objectives:
  - type: "Client Protection"
    direction: "DECREASE"
    goal: "DECREASE"
extensions: ["fidleg"]
# regulatoryExtensions.fidleg is required when extensions includes "fidleg"
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art24"
    regulatoryClassification: "CUSTOMER_PROTECTION"
    complianceRequirement: "MANDATORY"
    riskLevel: "HIGH"
---
```

## Best Practices

### 1. Always Declare Extensions

```yaml
# ✅ Good
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg: { ... }

# ❌ Bad - Extension data without declaration
regulatoryExtensions:
  fidleg: { ... }
```

### 2. Use Appropriate Risk Levels

```yaml
# ✅ Good - Appropriate risk level
riskLevel: "HIGH"  # For significant smart contract risks

# ❌ Bad - Overstated risk level
riskLevel: "CRITICAL"  # For minor UI issues
```

### 3. Match Extensions to Content

```yaml
# ✅ Good - Swiss-specific risk with FIDLEG
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art24"  # Swiss customer classification

# ❌ Bad - Generic risk with unnecessary extension
extensions: ["fidleg"]  # For generic technical risk
```

### 4. Consistent Extension Usage

```yaml
# ✅ Good - Consistent across related files
# Risk file
extensions: ["fidleg"]

# Related indicator file  
extensions: ["fidleg"]

# Related measure file
extensions: ["fidleg"]
```

## Validation Commands

### Validate Core Framework Only

```bash
node validate-markdown.mjs
```

### Validate with FIDLEG Extension

```bash
node validate-markdown.mjs --extension fidleg
```

### Validate with Multiple Extensions

```bash
node validate-markdown.mjs --extensions fidleg,euMiFID
```

### Auto-detect Extensions

```bash
node validate-markdown.mjs --auto-detect
```
