# FIDLEG Extension Module

This document describes the **FIDLEG Extension Module** - a modular regulatory extension for the Web3 Risk Framework that enables Swiss FIDLEG compliance for DeFi protocol assessment.

## Overview

The FIDLEG Extension Module provides Swiss banks with a structured approach to evaluate DeFi protocols for customer access while maintaining regulatory compliance. It focuses on the core FIDLEG articles relevant for DeFi protocol assessment.

**Regulatory Authority**: FINMA (Swiss Financial Market Supervisory Authority)

**Core FIDLEG Articles**:
- **Art. 72**: Operational Risk Management (Smart contract security, admin key risks)
- **Art. 142**: Market Abuse Prevention (MEV detection, wash trading, suspicious patterns)

## Extension Architecture

### Modular Design Principles
- **Non-intrusive**: Core framework remains unchanged
- **Optional**: FIDLEG fields are optional extensions
- **Bank-focused**: Designed for Swiss bank DeFi protocol evaluation
- **Compliance-ready**: Direct FINMA reporting integration

### Schema Extension Pattern
```json
{
  "regulatoryExtensions": {
    "fidleg": {
      "articleReference": "FIDLEG_Art142",
      "indicatorType": "MARKET_ABUSE",
      "complianceStatus": "COMPLIANT",
      "bankRecommendation": "APPROVE",
      "customerAccessLevel": "RETAIL_FULL",
      "monitoringFrequency": "WEEKLY"
    }
  }
}
```

## Documentation Structure

### Core Framework Documentation
- [`docs/risk.md`](../../docs/risk.md) - General risk documentation
- [`docs/indicator.md`](../../docs/indicator.md) - General indicator documentation  
- [`docs/assessment.md`](../../docs/assessment.md) - General assessment documentation

### FIDLEG-Specific Documentation
- [`risk.fidleg.md`](./risk.fidleg.md) - **FIDLEG risk documentation guide**
- [`indicator.fidleg.md`](./indicator.fidleg.md) - **FIDLEG indicator documentation guide**
- [`assessment.fidleg.md`](./assessment.fidleg.md) - **FIDLEG assessment documentation guide**

### FIDLEG Extension Documentation
- [`naming-convention.md`](./naming-convention.md) - File naming conventions
- [`fidleg-scopes.md`](./fidleg-scopes.md) - FIDLEG-specific scopes
- [`risk-classification-guide.md`](./risk-classification-guide.md) - Risk classification guide

## Benefits

- **Bank-Ready**: Designed specifically for Swiss bank DeFi protocol evaluation
- **Compliance-Focused**: Direct FIDLEG Art. 72 and Art. 142 integration
- **Decision-Support**: Clear bank recommendation framework
- **Modular**: Non-intrusive extension to core framework
- **Practical**: Real-world examples and templates

## Usage

1. **Start with FIDLEG-specific guides**: Use `risk.fidleg.md`, `indicator.fidleg.md`, `assessment.fidleg.md`
2. **Follow naming conventions**: See `naming-convention.md`
3. **Understand scopes**: Review `fidleg-scopes.md` for Swiss regulatory contexts
4. **Classify risks**: Use `risk-classification-guide.md` for systematic risk assessment

---

*This extension provides Swiss banks with a structured approach to evaluate DeFi protocols for customer access while maintaining regulatory compliance under FIDLEG Art. 72 and Art. 142.*