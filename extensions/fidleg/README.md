# Swiss FIDLEG Extension

This extension module provides Swiss FIDLEG (Financial Services Act) compliance capabilities for the Web3 Risk Framework.

## Overview

The FIDLEG Extension demonstrates how the Web3 Risk Framework can be extended for specific regulatory jurisdictions while maintaining its modular, extensible design. This approach allows other jurisdictions to add their own regulatory extensions without affecting the core framework.

## Files

- **[docs/fidleg-extension.md](./docs/fidleg-extension.md)** - Complete documentation of the FIDLEG extension module
- **[docs/fidleg-scopes.md](./docs/fidleg-scopes.md)** - Swiss FIDLEG-specific scopes documentation
- **[docs/usage-examples.md](./docs/usage-examples.md)** - Practical usage examples and best practices
- **[schema/](./schema/)** - Extended JSON schemas with FIDLEG fields
- **[README.md](./README.md)** - This file

## Quick Start

1. **Read the Extension Guide**: Start with [docs/fidleg-extension.md](./docs/fidleg-extension.md)
2. **Understand the Schema**: Review the `regulatoryExtensions.fidleg` schema structure
3. **See Examples**: Check the implementation examples in the documentation
4. **Apply to Risks**: Add FIDLEG extensions to your risk definitions

## Schema Extension

The FIDLEG extension adds a `regulatoryExtensions.fidleg` object to risk, indicator, and measure schemas:

```json
{
  "regulatoryExtensions": {
    "fidleg": {
      "articleReference": "FIDLEG_Art24",
      "regulatoryClassification": "CUSTOMER_PROTECTION",
      "complianceRequirement": "MANDATORY",
      "riskLevel": "HIGH"
    }
  }
}
```

## FIDLEG Articles

The extension supports 14 FIDLEG articles, prioritized by Web3 relevance:

### Priority Articles (High Impact)
- **FIDLEG_Art24**: Customer Classification
- **FIDLEG_Art72**: Operational Risk Management
- **FIDLEG_Art142**: Market Abuse
- **FIDLEG_Art18_20**: Interest Conflicts

### Extended Articles (Medium Impact)
- **FIDLEG_Art8_10**: Client Protection
- **FIDLEG_Art11_15**: Organizational Requirements
- **FIDLEG_Art16_18**: Conduct Rules
- **FIDLEG_Art19_21**: Risk Management
- **FIDLEG_Art22_24**: Client Services
- **FIDLEG_Art25_30**: Investment Services
- **FIDLEG_Art31_35**: Order Execution
- **FIDLEG_Art36_40**: Asset Protection
- **FIDLEG_Art41_45**: Reporting
- **FIDLEG_Art46_50**: Supervision

## Implementation

### Risk Example
```yaml
---
id: R:CREDIT_DEFAULT
title: Credit Default Risk
category: FINANCIAL
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    regulatoryClassification: "RISK_MANAGEMENT"
    complianceRequirement: "MANDATORY"
    riskLevel: "HIGH"
---
```

### Indicator Example
```yaml
---
id: I:COLLATERAL_RATIO
title: Collateral Ratio Monitoring
type: Indicator
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    measurementFrequency: "REAL_TIME"
    regulatoryThreshold: "> 150%"
    auditRequirement: "EXTERNAL_AUDIT"
---
```

### Measure Example
```yaml
---
id: M:INCREASE_COLLATERAL
title: Increase Collateral Requirements
type: Measure
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    implementationDeadline: "2024-06-30"
    auditFrequency: "QUARTERLY"
    regulatoryRequirement: "MANDATORY"
---
```

## Benefits

- **Systematic Compliance**: Structured approach to Swiss regulatory requirements
- **Risk Prioritization**: Clear risk levels and compliance requirements
- **Audit Trail**: Comprehensive documentation for regulatory audits
- **Modular Design**: Non-intrusive extension to core framework

## Future Extensions

The modular design enables similar extensions for other jurisdictions:

- **EU MiFID Extension**: European regulatory requirements
- **US SEC Extension**: US securities regulations
- **UK FCA Extension**: UK financial services regulations
- **Singapore MAS Extension**: Singapore regulatory requirements

## Support

For questions about the FIDLEG extension:

- Review the [docs/fidleg-extension.md](./docs/fidleg-extension.md) documentation
- Check the implementation examples
- Refer to the core framework documentation
- Submit issues through the project repository
