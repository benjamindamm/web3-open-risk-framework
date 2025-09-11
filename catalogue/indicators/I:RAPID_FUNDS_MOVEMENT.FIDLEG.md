---
id: I:RAPID_FUNDS_MOVEMENT.FIDLEG
title: "Rapid Funds Movement Detection (GwG/FIDLEG Compliant)"
description: "Detection of rapid funds movement patterns with 3+ transactions > CHF 50k in 24h triggering enhanced monitoring and potential MROS reporting"
type: "Indicator"
version: "1.0"
lastUpdate: "2024-01-15"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    measurementFrequency: "REAL_TIME"
    regulatoryThreshold: "3 transactions > CHF 50k in 24h"
    auditRequirement: "INTERNAL_AUDIT"
    suspiciousPatterns: ["rapid_funds_movement", "unusual_timing"]
    gwg:
      mrosReporting: true
      transactionMonitoring: true
      customerDueDiligence: true
---

# Rapid Funds Movement Detection (GwG/FIDLEG Compliant)

## Indicator Description

This indicator detects rapid funds movement patterns where customers execute multiple large transactions (> CHF 50k) within a 24-hour period, triggering enhanced monitoring and potential MROS reporting under Swiss GwG requirements.

## GwG/FIDLEG Compliance Context

### Regulatory Classification
- **FIDLEG Article**: Art. 72 (Operational Risk Management)
- **GwG Requirement**: Enhanced monitoring for rapid movement patterns
- **Measurement**: REAL_TIME monitoring required
- **Audit**: INTERNAL_AUDIT validation
- **Reporting**: Conditional MROS notification

### Swiss Market Requirements
- Continuous movement pattern detection
- Enhanced customer monitoring
- Suspicious activity reporting
- Risk-based compliance approach

## Measurement Methodology

### Data Sources
- Blockchain transaction logs
- Wallet activity monitoring
- Cross-chain transaction tracking
- Exchange trading records
- DeFi protocol interactions

### Key Metrics
- **Transaction Count**: Number of large transactions per time period
- **Volume Concentration**: Transaction volume within time windows
- **Movement Patterns**: Funds flow analysis
- **Timing Analysis**: Transaction timing patterns
- **Cross-Chain Activity**: Multi-blockchain movement tracking

### Alert Thresholds
- **Critical**: 3+ transactions > CHF 50k in 24h (Enhanced monitoring required)
- **High**: 5+ transactions > CHF 25k in 24h
- **Medium**: Unusual timing patterns (transactions outside business hours)
- **Low**: Concentration of activity in short time periods

## GwG Compliance Features

### MROS Reporting
- **Conditional Trigger**: Based on risk assessment
- **Reporting Format**: Suspicious activity notification
- **Timeline**: Within 48 hours of pattern detection
- **Documentation**: Complete movement audit trail

### Transaction Monitoring
- **Real-time Analysis**: Continuous pattern detection
- **Risk Scoring**: Customer risk profile assessment
- **Pattern Recognition**: Suspicious movement identification
- **Alert Management**: Escalation procedures

### Customer Due Diligence
- **Enhanced Verification**: Additional identity checks
- **Source of Funds**: Movement origin verification
- **Purpose Documentation**: Business justification requirements
- **Ongoing Monitoring**: Continuous risk assessment

## Implementation Requirements

### Technical Infrastructure
- Real-time movement monitoring systems
- Automated risk assessment mechanisms
- Pattern recognition algorithms
- Audit trail management
- Integration with Swiss regulatory systems

### Reporting Requirements
- **Real-time**: Immediate alerts for pattern detection
- **Daily**: Summary reports for compliance team
- **Weekly**: Movement pattern statistics
- **Monthly**: Regulatory compliance reports

### Data Quality Standards
- 99.9% transaction capture rate
- Sub-second alert latency
- Complete audit trail maintenance
- Data integrity validation

## Swiss Crypto Valley Considerations

### Regulatory Expectations
- FINMA expects comprehensive movement monitoring
- Risk-based MROS reporting approach
- Internal audit validation sufficient
- Client notification procedures

### Business Requirements
- High availability monitoring systems
- Scalable pattern analysis
- Integration with existing systems
- Cost-effective compliance implementation

## Implementation Example

```yaml
---
id: I:RAPID_FUNDS_MOVEMENT.FIDLEG
title: "Rapid Funds Movement Detection (GwG/FIDLEG Compliant)"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    measurementFrequency: "REAL_TIME"
    regulatoryThreshold: "3 transactions > CHF 50k in 24h"
    auditRequirement: "INTERNAL_AUDIT"
    suspiciousPatterns: ["rapid_funds_movement", "unusual_timing"]
    gwg:
      mrosReporting: true
      transactionMonitoring: true
      customerDueDiligence: true
---
```

## Related Risks

- Money Laundering Risk
- Rapid Movement Risk
- Customer Due Diligence Failures
- Regulatory Compliance Risk

## Related Measures

- Enhanced Customer Monitoring
- Movement Pattern Analysis
- Risk Assessment Automation
- Customer Due Diligence Procedures

## Validation Criteria

### Technical Validation
- [ ] Real-time monitoring operational
- [ ] Pattern detection mechanisms tested
- [ ] Data retention compliant
- [ ] Audit trail complete

### Regulatory Validation
- [ ] Risk assessment procedures established
- [ ] Internal audit scheduled
- [ ] MROS notification protocols tested
- [ ] Customer notification procedures ready

### Business Validation
- [ ] Cost-benefit analysis completed
- [ ] Integration testing successful
- [ ] Staff training completed
- [ ] Documentation updated
