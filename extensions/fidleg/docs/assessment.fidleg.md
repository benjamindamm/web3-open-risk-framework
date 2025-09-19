# 📊 Assessment - FIDLEG Extension

## 🌟 Purpose

The FIDLEG Assessment extension provides Swiss regulatory compliance evaluation capabilities for DeFi protocol risk assessments. It integrates FIDLEG (Financial Services Act) and GwG (Anti-Money Laundering Act) requirements into the risk catalogue framework.

## ⚙️ FIDLEG Assessment Parameters

### Assessment Types
- **`PROTOCOL_SECURITY`** - Art. 72 compliance evaluation
- **`MARKET_ABUSE`** - Art. 142 market abuse assessment
- **`APPROPRIATENESS_FITNESS`** - Art. 8/9/10 client suitability
- **`DUE_DILIGENCE`** - GwG AML/CFT assessment

### Compliance Status
- **`FULLY_COMPLIANT`** - No compliance issues
- **`CONDITIONAL_COMPLIANCE`** - Requires monitoring
- **`NON_COMPLIANT`** - Needs immediate action
- **`CRITICAL_FAILURE`** - Emergency response required

### Bank Recommendations
- **`APPROVE_FULL`** - Full access for all clients
- **`APPROVE_LIMITED`** - Limited access with restrictions
- **`PROFESSIONAL_ONLY`** - Professional clients only
- **`REJECT_PROTOCOL`** - Do not offer to clients


## 📋 Required Properties

- `relevantArticles` - FIDLEG/GwG articles
- `assessmentType` - Assessment focus area
- `complianceStatus` - Overall compliance status
- `bankRecommendation` - Bank's recommendation
- `customerAccessLevel` - Client access level
- `requiredFidlegActions` - Triggered compliance actions

## 🎯 Key FIDLEG Articles

- **Art. 72**: Protocol security requirements
- **Art. 142**: Market abuse prevention
- **Art. 8-10**: Client suitability and appropriateness
- **GwG Art. 6**: Anti-money laundering measures

## 📖 Implementation

Refer to example risk implementations for practical guidance on assessment structure and compliance workflows.

<!-- HIDDEN -->

## 🔗 Related Documentation

- [Action Documentation](./action.fidleg.md)
- [Risk Documentation](./risk.fidleg.md)
- [Indicator Documentation](./indicator.fidleg.md)
- [Measure Documentation](./measure.fidleg.md)

<!-- /HIDDEN -->