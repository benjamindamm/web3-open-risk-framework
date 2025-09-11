# FIDLEG Risk Classification Guide

This guide provides a systematic approach to classifying existing Web3 risks according to Swiss FIDLEG requirements.

## Classification Framework

### FIDLEG Article Mapping

| FIDLEG Article | Risk Category | Compliance Level | Documentation Frequency |
|----------------|---------------|------------------|------------------------|
| **Art. 24** | Customer Classification | MANDATORY | Annual |
| **Art. 72** | Operational Risk Management | MANDATORY | Quarterly |
| **Art. 142** | Market Abuse Prevention | MANDATORY | Monthly |
| **Art. 18-20** | Conflict of Interest | MANDATORY | Quarterly |

## Risk Classifications

### 1. Administrative Key Risks → FIDLEG Art. 72

**Risk Examples:**
- Admin key compromise
- Multi-signature failures
- Protocol governance attacks
- Smart contract upgrade risks

**Classification:**
```yaml
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    regulatoryClassification: "RISK_MANAGEMENT"
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "quarterly"
    riskLevel: "CRITICAL"
    applicability:
      customerType: "both"
```

### 2. KYC/AML Risks → FIDLEG Art. 24

**Risk Examples:**
- KYC process failures
- AML compliance gaps
- Customer identification errors
- Sanctions screening failures

**Classification:**
```yaml
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art24"
    regulatoryClassification: "CUSTOMER_PROTECTION"
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "annual"
    riskLevel: "HIGH"
    applicability:
      customerType: "retail"
```

### 3. Market Manipulation Risks → FIDLEG Art. 142

**Risk Examples:**
- MEV exploitation
- Wash trading
- Price manipulation
- Front-running attacks

**Classification:**
```yaml
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"
    regulatoryClassification: "MARKET_INTEGRITY"
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "monthly"
    riskLevel: "CRITICAL"
    applicability:
      customerType: "both"
```

### 4. Conflict of Interest Risks → FIDLEG Art. 18-20

**Risk Examples:**
- Insider trading
- Self-dealing
- Information asymmetry
- Principal-agent conflicts

**Classification:**
```yaml
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art18_20"
    regulatoryClassification: "CONDUCT"
    complianceRequirement:
      level: "MANDATORY"
      documentation:
        frequency: "quarterly"
    riskLevel: "HIGH"
    applicability:
      customerType: "both"
```

## Implementation Strategy

### Phase 1: Critical Risks (Immediate)
- Administrative key risks
- Market manipulation risks
- Client asset protection risks

### Phase 2: High Priority Risks (Q1)
- KYC/AML compliance risks
- Conflict of interest risks
- Operational risk management

### Phase 3: Standard Risks (Q2-Q3)
- Technical infrastructure risks
- Governance risks
- Reporting compliance risks

## Risk Level Guidelines

### CRITICAL
- Immediate threat to client assets
- Market integrity violations
- Regulatory enforcement actions
- **Examples**: Admin key compromise, market manipulation

### HIGH
- Significant client protection impact
- Operational risk management failures
- Compliance violations
- **Examples**: KYC failures, conflict of interest

### MEDIUM
- Moderate impact on operations
- Best practice recommendations
- **Examples**: Technical monitoring gaps

### LOW
- Minimal regulatory impact
- Optional compliance measures
- **Examples**: Enhanced reporting features

## Customer Type Applicability

### Retail Clients
- Higher protection requirements
- Simplified risk communication
- Enhanced documentation
- **Examples**: KYC/AML, client protection

### Professional Clients
- Sophisticated risk management
- Advanced monitoring capabilities
- **Examples**: Market manipulation, operational risks

### Both
- Universal applicability
- Standard risk management
- **Examples**: Admin key risks, market integrity

## Documentation Requirements

### Quarterly Reporting
- Operational risk management
- Conflict of interest monitoring
- **FIDLEG Articles**: 72, 18-20

### Monthly Reporting
- Market manipulation monitoring
- Real-time risk assessment
- **FIDLEG Articles**: 142

### Annual Reporting
- Customer classification review
- Compliance program assessment
- **FIDLEG Articles**: 24

### On-Demand Reporting
- Incident response
- Regulatory inquiries
- **FIDLEG Articles**: All

## Validation Checklist

### Before Implementation
- [ ] Risk identified and categorized
- [ ] Appropriate FIDLEG article selected
- [ ] Compliance level determined
- [ ] Documentation frequency set
- [ ] Customer type applicability defined

### After Implementation
- [ ] Schema validation passed
- [ ] Documentation requirements met
- [ ] Regulatory reporting scheduled
- [ ] Monitoring systems activated
- [ ] Audit trail established
