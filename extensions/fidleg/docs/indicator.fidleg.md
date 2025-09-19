# 📊 Indicator - FIDLEG Extension

## 🌟 Purpose

The FIDLEG Indicator extension provides Swiss regulatory compliance monitoring capabilities for DeFi protocols. It detects compliance-relevant events and triggers specific regulatory actions.

## ⚙️ FIDLEG Indicator Archetypes

### Trigger Events
- **[CRITICAL_CLIENT_INFO_UPDATE_REQUIRED]** - Client information needs update
- **[SUITABILITY_RE_EVALUATION_TRIGGER]** - Suitability reassessment needed
- **[INTERNAL_AUDIT_CONDITION_MET]** - Internal audit required
- **[REGULATORY_REPORTING_THRESHOLD_EXCEEDED]** - Regulatory reporting required
- **[POTENTIAL_MARKET_ABUSE_DETECTED]** - Market abuse suspected
- **[AML_RED_FLAG_ACTIVE]** - AML red flag detected

### Suspicious Patterns
- **`mev_arbitrage`** - MEV arbitrage detection
- **`wash_trading`** - Wash trading patterns
- **`flash_loan_exploitation`** - Flash loan abuse
- **`governance_manipulation`** - Governance manipulation
- **`structuring`** - Transaction structuring
- **`unhosted_wallet`** - Unhosted wallet usage
- **`rug_pull`** - Rug pull detection
- **`exit_scam`** - Exit scam patterns


## 📋 Required Properties

- `fidlegTriggerEvent` - FIDLEG event type
- `triggeredFidlegActions` - Compliance actions triggered
- `fidlegMonitoringRationale` - Monitoring justification
- `suspiciousPatternsFidlegImpacts` - Pattern-specific impacts

## 🎯 Key FIDLEG Articles

- **Art. 72**: Protocol security requirements
- **Art. 142**: Market abuse prevention
- **Art. 8-10**: Client suitability and appropriateness
- **GwG Art. 6**: Anti-money laundering measures

## 📖 Implementation

Refer to example risk implementations for practical guidance on indicator structure and monitoring workflows.

<!-- HIDDEN -->

## 🔗 Related Documentation

- [Action Documentation](./action.fidleg.md)
- [Assessment Documentation](./assessment.fidleg.md)
- [Risk Documentation](./risk.fidleg.md)
- [Measure Documentation](./measure.fidleg.md)

<!-- /HIDDEN -->