# FIDLEG-Specific Scopes

This document defines Swiss FIDLEG-specific scopes that extend the core Web3 Risk Framework scopes for Swiss regulatory compliance.

## Overview

The FIDLEG extension adds Swiss-specific scopes that follow the same conceptual pattern as the core framework scopes. These scopes describe **when** and **where** Swiss regulatory risks become relevant in the context of FIDLEG compliance.

## FIDLEG-Specific Scopes

| Scope | Description | FIDLEG Article | Web3 Context |
|-------|-------------|----------------|--------------|
| `CUSTOMER_CLASSIFICATION` | Applies when **classifying clients as retail or professional** under FIDLEG Art. 24. Includes risks from misclassification, insufficient protection, or verification failures. Use when **client onboarding or classification** is the trigger. | Art. 24 | DeFi user protection, KYC/AML |
| `TECHNICAL_OPERATIONS` | Applies when **technical systems or operations** are at risk under FIDLEG Art. 72. Includes smart contract failures, admin key compromise, or system downtime. Use when **operational risk management** is the trigger. | Art. 72 | Smart contract security, infrastructure |
| `MARKET_MANIPULATION` | Applies when **market abuse or manipulation** occurs under FIDLEG Art. 142. Includes wash trading, MEV exploitation, or price manipulation. Use when **market integrity** is at risk. | Art. 142 | MEV, wash trading, price manipulation |
| `INTEREST_CONFLICTS` | Applies when **conflicts of interest** arise under FIDLEG Art. 18-20. Includes validator conflicts, governance token conflicts, or developer conflicts. Use when **conflict management** is required. | Art. 18-20 | Validator conflicts, governance conflicts |
| `KYC_AML` | Applies when **KYC/AML compliance** is required under GwG (Anti-Money Laundering Act). Includes Swiss IP detection, transaction monitoring, or suspicious activity reporting. Use when **compliance procedures** are triggered. | GwG | Swiss IP detection, transaction monitoring |
| `SWISS_IPS` | Applies when **Swiss IP addresses** are detected or geoblocking is required. Includes Swiss market access, data protection, or regulatory compliance. Use when **Swiss market presence** is detected. | Various | Swiss market access, geoblocking |

## Scope Usage Examples

### Core Framework Scopes
```yaml
---
id: R:CREDIT_DEFAULT
title: Credit Default Risk
category: FINANCIAL
scopes: [TRADE, CUSTODY]  # Core framework scopes
---
```

### FIDLEG Extension Scopes
```yaml
---
id: R:CREDIT_DEFAULT
title: Credit Default Risk
category: FINANCIAL
scopes: [TRADE, CUSTODY, TECHNICAL_OPERATIONS]  # Core + FIDLEG scopes
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    regulatoryClassification: "RISK_MANAGEMENT"
---
```

## Scope Combinations

### Core + FIDLEG Scopes
- **`TRADE` + `MARKET_MANIPULATION`**: Trading risks with market abuse considerations
- **`CUSTODY` + `CUSTOMER_CLASSIFICATION`**: Custody risks with client protection
- **`GOVERNANCE` + `INTEREST_CONFLICTS`**: Governance risks with conflict management
- **`NETWORK` + `TECHNICAL_OPERATIONS`**: Network risks with operational management

### FIDLEG-Specific Combinations
- **`CUSTOMER_CLASSIFICATION` + `KYC_AML`**: Client classification with compliance
- **`TECHNICAL_OPERATIONS` + `SWISS_IPS`**: Technical operations with Swiss market presence
- **`MARKET_MANIPULATION` + `INTEREST_CONFLICTS`**: Market integrity with conflict management

## Implementation Guidelines

### For Risk Managers
1. **Use core scopes** for general Web3 risk contexts
2. **Add FIDLEG scopes** when Swiss regulatory context is relevant
3. **Combine scopes** to cover multiple risk contexts
4. **Document rationale** for scope selection

### For Compliance Teams
1. **Map FIDLEG articles** to appropriate scopes
2. **Use scope combinations** for comprehensive coverage
3. **Validate scope relevance** for Swiss market operations
4. **Update scopes** as regulatory requirements evolve

### For Auditors
1. **Verify scope appropriateness** for Swiss operations
2. **Check scope combinations** for comprehensive coverage
3. **Validate FIDLEG article mapping** to scopes
4. **Assess scope completeness** for regulatory compliance

## Scope Validation

### Core Framework Validation
- Scopes must be from the core framework scope list
- At least one scope must be specified
- Scopes must be relevant to the risk context

### FIDLEG Extension Validation
- FIDLEG scopes must be used with `regulatoryExtensions.fidleg`
- FIDLEG scopes must be relevant to Swiss operations
- Scope combinations must be logically consistent

## Future Extensions

The modular scope system enables similar extensions for other jurisdictions:

- **EU MiFID Scopes**: European regulatory contexts
- **US SEC Scopes**: US securities regulatory contexts
- **UK FCA Scopes**: UK financial services regulatory contexts
- **Singapore MAS Scopes**: Singapore regulatory contexts

## Integration with Core Framework

The FIDLEG scopes integrate seamlessly with the core Web3 Risk Framework:

- **Same conceptual pattern**: When and where risks become relevant
- **Same usage model**: Tag risks based on contextual relevance
- **Same validation**: Scope appropriateness and relevance
- **Same flexibility**: Multiple scopes per risk

## Conclusion

The FIDLEG-specific scopes extend the core framework's scope system for Swiss regulatory compliance while maintaining the same conceptual approach and usage patterns. This modular design allows for comprehensive risk coverage in Swiss regulatory contexts while preserving the framework's flexibility and extensibility.
