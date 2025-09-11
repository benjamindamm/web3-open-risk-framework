# Swiss FIDLEG Extension

This extension provides a **DeFi Protocol Assessment Toolkit** for Swiss banks to evaluate and approve DeFi protocols (like Aave, Compound, Uniswap) for their customers. It implements FIDLEG (Swiss Financial Services Act) and GwG (Anti-Money Laundering Act) requirements for protocol risk assessment.

## Overview

The FIDLEG Extension provides Swiss banks with a structured approach to evaluate DeFi protocols for customer access while maintaining regulatory compliance. This toolkit approach allows banks to assess protocol risks systematically and make informed decisions about offering DeFi services to their customers.

## Files

- **[docs/fidleg-extension.md](./docs/fidleg-extension.md)** - Complete documentation of the FIDLEG extension module
- **[docs/fidleg-scopes.md](./docs/fidleg-scopes.md)** - Swiss FIDLEG-specific scopes documentation
- **[docs/risk-classification-guide.md](./docs/risk-classification-guide.md)** - Risk classification guide
- **[docs/finma-reporting-template.md](./docs/finma-reporting-template.md)** - Automated FINMA compliance reporting
- **[docs/example-finma-report-q2-2024.md](./docs/example-finma-report-q2-2024.md)** - Example FINMA report
- **[docs/naming-convention.md](./docs/naming-convention.md)** - FIDLEG file naming convention
- **[docs/suspicious-patterns.md](./docs/suspicious-patterns.md)** - Suspicious trading patterns documentation
- **[docs/fidleg-fields-guide.md](./docs/fidleg-fields-guide.md)** - Guide to all FIDLEG fields
- **[docs/article-reference.md](./docs/article-reference.md)** - FIDLEG article reference guide
- **[docs/compliance-requirement.md](./docs/compliance-requirement.md)** - Compliance requirement levels
- **[docs/risk-level.md](./docs/risk-level.md)** - Risk level classifications
- **[docs/customer-type.md](./docs/customer-type.md)** - Customer type definitions
- **[docs/suspicious-patterns.md](./docs/suspicious-patterns.md)** - Suspicious pattern monitoring
- **[schema/](./schema/)** - Extended JSON schemas with FIDLEG fields
- **[README.md](./README.md)** - This file

## Quick Start

1. **Read the Extension Guide**: Start with [docs/fidleg-extension.md](./docs/fidleg-extension.md)
2. **Understand the Schema**: Review the `regulatoryExtensions.fidleg` schema structure
3. **See Examples**: Check the implementation examples in the documentation
4. **Apply to Risks**: Add FIDLEG extensions to your risk definitions

## Schema Extension

The FIDLEG extension adds a `regulatoryExtensions.fidleg` object to risk, indicator, and measure schemas with advanced compliance features:

```json
{
  "regulatoryExtensions": {
    "fidleg": {
      "articleReference": "FIDLEG_Art142",
      "indicatorType": "TRANSACTION_BASED",
      "reportingThreshold": "CHF_100k",
      "auditRequirement": {
        "level": "REGULATORY",
        "requiredFor": ["FIDLEG_Art37", "FIDLEG_Art142"],
        "frequency": "ANNUAL"
      },
      "suspiciousPatterns": ["mev_arbitrage", "structuring", "unhosted_wallet"],
      "gwg": {
        "mrosReporting": {
          "required": true,
          "format": "XML",
          "deadlineHours": 24
        },
        "customerDueDiligence": {
          "level": "ENHANCED",
          "triggerAmount": "CHF_100k"
        }
      }
    }
  }
}
```

## FIDLEG Articles

The extension covers **2 core FIDLEG articles** for DeFi protocol assessment:

### Core Articles (Essential for Protocol Assessment)
- **FIDLEG_Art72**: Operational Risk Management - Smart contract security, admin key risks
- **FIDLEG_Art142**: Market Abuse Prevention - MEV detection, wash trading, suspicious patterns

## Implementation

See the implemented examples in the catalogue:
- **Risk**: `catalogue/risks/R:MEV_EXPLOITATION.FIDLEG.md`
- **Indicator**: `catalogue/indicators/I:MEV_DETECTION.FIDLEG.md`
- **Measure**: `catalogue/measures/M:MEV_PROTECTION.FIDLEG.md`

## Advanced Features

- **Indicator Type Classification**: Automatic extension selection (TRANSACTION_BASED, PROTOCOL_METRIC, MARKET_SYSTEM)
- **FINMA-Compliant Reporting**: XML format, 24h MROS deadlines, automated thresholds
- **13 Suspicious Patterns**: MEV arbitrage, structuring, geographic risk, rapid exchange
- **Automated Risk Scoring**: Customer classification with automatic risk assessment
- **GwG Integration**: Complete anti-money laundering compliance with transaction monitoring
- **Audit Requirements**: FIDLEG article-specific audit levels and frequencies

## Benefits

- **Protocol Assessment Toolkit**: Structured evaluation framework for DeFi protocols
- **Swiss Regulatory Compliance**: FIDLEG/GwG requirements for bank protocol approval
- **Automated Risk Scoring**: Customer classification with protocol risk assessment
- **Real-world Examples**: MEV detection, market abuse prevention case studies
- **Modular Design**: Non-intrusive extension to core framework

## Support

For questions about the FIDLEG extension:

- Review the [docs/fidleg-extension.md](./docs/fidleg-extension.md) documentation
- Check the implementation examples
- Refer to the core framework documentation
- Submit issues through the project repository
