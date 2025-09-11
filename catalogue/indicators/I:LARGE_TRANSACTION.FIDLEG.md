---
id: I:LARGE_TRANSACTION
title: "Large Transaction Monitoring (GwG/FIDLEG Compliant)"
description: "Monitoring of large transactions exceeding CHF 100k threshold with automatic MROS reporting for Swiss Anti-Money Laundering Act compliance"
type: "Indicator"
version: "1.0"
lastUpdate: "2024-01-15"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    measurementFrequency: "REAL_TIME"
    regulatoryThreshold: "CHF_100k"
    auditRequirement: "EXTERNAL_AUDIT"
    reportingThreshold: "CHF_100k"
    suspiciousPatterns: ["rapid_funds_movement"]
    gwg:
      mrosReporting: true
      transactionMonitoring: true
      customerDueDiligence: true
---

# Large Transaction Monitoring (GwG/FIDLEG Compliant)

## Indicator Description

This indicator monitors transactions exceeding CHF 100,000 threshold and automatically triggers MROS (Money Laundering Reporting Office Switzerland) reporting requirements under Swiss GwG (Anti-Money Laundering Act) and FIDLEG operational risk management.

## GwG/FIDLEG Compliance Context

### Regulatory Classification
- **FIDLEG Article**: Art. 72 (Operational Risk Management)
- **GwG Requirement**: MROS reporting for transactions > CHF 100k
- **Measurement**: REAL_TIME monitoring required
- **Audit**: EXTERNAL_AUDIT validation
- **Reporting**: Automatic MROS notification

### Swiss Market Requirements
- Continuous transaction monitoring
- Automatic suspicious activity reporting
- Enhanced customer due diligence
- Regulatory audit trail maintenance

## Measurement Methodology

### Data Sources
- Blockchain transaction logs
- Exchange trading records
- Wallet activity monitoring
- Cross-chain transaction tracking
- DeFi protocol interactions

### Key Metrics
- **Transaction Volume**: Individual transaction amounts
- **Daily Volume**: Cumulative daily transaction volume per customer
- **Transaction Frequency**: Number of large transactions per time period
- **Cross-Chain Activity**: Multi-blockchain transaction patterns
- **DeFi Interactions**: Decentralized finance protocol usage

### Alert Thresholds
- **Critical**: Single transaction > CHF 100k (MROS reporting required)
- **High**: Daily volume > CHF 500k per customer
- **Medium**: 3+ transactions > CHF 50k in 24 hours
- **Low**: Unusual transaction timing patterns

## GwG Compliance Features

### MROS Reporting
- **Automatic Trigger**: Transactions exceeding CHF 100k
- **Reporting Format**: Standardized MROS notification
- **Timeline**: Within 24 hours of detection
- **Documentation**: Complete transaction audit trail

### Transaction Monitoring
- **Real-time Analysis**: Continuous pattern detection
- **Risk Scoring**: Customer risk profile assessment
- **Pattern Recognition**: Suspicious activity identification
- **Alert Management**: Escalation procedures

### Customer Due Diligence
- **Enhanced Verification**: Additional identity checks
- **Source of Funds**: Transaction origin verification
- **Purpose Documentation**: Business justification requirements
- **Ongoing Monitoring**: Continuous risk assessment

## Implementation Requirements

### Technical Infrastructure
- Real-time transaction monitoring systems
- Automated MROS reporting mechanisms
- Risk scoring algorithms
- Audit trail management
- Integration with Swiss regulatory systems

### Reporting Requirements
- **Real-time**: Immediate alerts for threshold breaches
- **Daily**: Summary reports for compliance team
- **Weekly**: MROS reporting statistics
- **Monthly**: Regulatory compliance reports

### Data Quality Standards
- 99.9% transaction capture rate
- Sub-second alert latency
- Complete audit trail maintenance
- Data integrity validation

## Swiss Crypto Valley Considerations

### Regulatory Expectations
- FINMA expects comprehensive transaction monitoring
- MROS reporting compliance mandatory
- External audit validation required
- Client notification procedures

### Business Requirements
- High availability monitoring systems
- Scalable transaction processing
- Integration with existing systems
- Cost-effective compliance implementation

## Implementation Example

```yaml
---
id: I:LARGE_TRANSACTION
title: "Large Transaction Monitoring (GwG/FIDLEG Compliant)"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    measurementFrequency: "REAL_TIME"
    regulatoryThreshold: "CHF_100k"
    auditRequirement: "EXTERNAL_AUDIT"
    reportingThreshold: "CHF_100k"
    suspiciousPatterns: ["rapid_funds_movement"]
    gwg:
      mrosReporting: true
      transactionMonitoring: true
      customerDueDiligence: true
---
```

## Related Risks

- Money Laundering Risk
- Market Manipulation Risk
- Regulatory Compliance Risk
- Customer Due Diligence Failures

## Related Measures

- Enhanced KYC Procedures
- Transaction Monitoring Systems
- MROS Reporting Automation
- Customer Risk Assessment

## Validation Criteria

### Technical Validation
- [ ] Real-time monitoring operational
- [ ] MROS reporting mechanisms tested
- [ ] Data retention compliant
- [ ] Audit trail complete

### Regulatory Validation
- [ ] MROS reporting procedures established
- [ ] External audit scheduled
- [ ] FINMA notification protocols tested
- [ ] Customer notification procedures ready

### Business Validation
- [ ] Cost-benefit analysis completed
- [ ] Integration testing successful
- [ ] Staff training completed
- [ ] Documentation updated
