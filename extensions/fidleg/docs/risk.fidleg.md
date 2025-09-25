#  Risk - FIDLEG Extension

##  Purpose

The FIDLEG Risk extension provides Swiss regulatory compliance risk categorization for DeFi protocols. It maps risks to FIDLEG impact categories and triggers specific compliance actions.

##  FIDLEG Risk Categories

### Impact Categories

| Category | Description |
|----------|-------------|
| **[CLIENT_INFORMATION_DEFICIENCY]** | Client lacks critical information |
| **[SUITABILITY_RISK_INCREASE]** | Client suitability compromised |
| **[OPERATIONAL_COMPLIANCE_BREACH_POTENTIAL]** | Operational compliance at risk |
| **[MARKET_INTEGRITY_CONCERN]** | Market integrity threatened |
| **[AML_CFT_RISK_ELEVATION]** | AML/CFT risks increased |
| **[PRODUCT_GOVERNANCE_ISSUE]** | Product governance compromised |


##  Required Properties

- **fidlegImpactCategory** - FIDLEG impact categorization
- **triggeredFidlegActions** - Compliance actions triggered by this risk

<!-- PAGEBREAK -->

##  Implementation

Refer to example risk implementations for practical guidance on risk structure and compliance actions.

<!-- HIDDEN -->

##  Related Documentation

- [Action Documentation](./action.fidleg.md)
- [Assessment Documentation](./assessment.fidleg.md)
- [Indicator Documentation](./indicator.fidleg.md)
- [Measure Documentation](./measure.fidleg.md)

<!-- /HIDDEN -->