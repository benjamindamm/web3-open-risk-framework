# 🏦 FIDLEG Risk Documentation Guide

This document defines how to document **FIDLEG-compliant risks** for Swiss banks evaluating DeFi protocols for customer access.

The goal is to provide a structured methodology that supports **regulatory compliance** and **bank risk management** for DeFi protocol assessment.

## 🌟 Purpose

The FIDLEG risk documentation process helps Swiss banks:

- Identify specific risks that affect regulatory compliance
- Categorize risks according to FIDLEG articles
- Link risks to appropriate monitoring indicators
- Define risk mitigation measures for bank operations

Risk documentation is critical for:

- **Compliance Reporting** - FINMA regulatory requirements
- **Risk Management** - Bank internal risk frameworks
- **Customer Protection** - Ensuring safe DeFi access
- **Business Strategy** - Risk-informed service decisions

## ⚙️ FIDLEG Risk Categories

Each DeFi protocol risk is evaluated against **FIDLEG regulatory requirements**:

| FIDLEG Article | Risk Category | Bank Impact | Example Risks |
|----------------|---------------|-------------|---------------|
| **Art. 72** | Operational Risk | Protocol Security | Smart contract bugs, admin key compromise |
| **Art. 142** | Market Abuse | Market Integrity | MEV exploitation, wash trading, manipulation |

### Risk Classification Framework

| Classification | Description | Bank Response |
|----------------|-------------|---------------|
| **OPERATIONAL_RISK** | Technical vulnerabilities affecting protocol security | Enhanced monitoring, limited access |
| **MARKET_RISK** | Market manipulation and abuse patterns | Transaction monitoring, pattern detection |
| **COMPLIANCE_RISK** | Regulatory violations and non-compliance | Access restrictions, compliance reporting |

### Compliance Requirement Levels

| Requirement | Description | Bank Action |
|-------------|-------------|-------------|
| **MANDATORY** | Critical for FIDLEG compliance | Must address before approval |
| **RECOMMENDED** | Best practice for risk management | Should address for full approval |
| **OPTIONAL** | Nice to have for enhanced security | May address for premium access |

## 🧾 FIDLEG Risk Template

```yaml
id: R:PROTOCOL_RISK.FIDLEG
title: "Protocol Risk (FIDLEG Compliant)"
description: "Risk description focusing on regulatory compliance and customer protection"
category: "MARKET"                    # MARKET, TECHNICAL, FINANCIAL, etc.
type: "QUALITATIVE"                   # QUALITATIVE, QUANTITATIVE, HYBRID
scope: "MARKET_INTEGRITY"            # Where risk occurs
owner: "PROTOCOL_TEAM"               # Who can address the risk
severity: "CRITICAL"                 # LOW, MEDIUM, HIGH, CRITICAL
probability: "MEDIUM"                # LOW, MEDIUM, HIGH
impact: "HIGH"                      # LOW, MEDIUM, HIGH, CRITICAL
objectives: "Maintain market integrity and prevent regulatory violations"
indicators:
  - I:PROTOCOL_INDICATOR.FIDLEG
measures:
  - M:PROTOCOL_PROTECTION.FIDLEG
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"        # Art72 or Art142
    regulatoryClassification: "MARKET_RISK"  # OPERATIONAL_RISK, MARKET_RISK, COMPLIANCE_RISK
    complianceRequirement: "MANDATORY"       # MANDATORY, RECOMMENDED, OPTIONAL
    riskLevel: "HIGH"                       # LOW, MEDIUM, HIGH, CRITICAL
```

## 🏛️ FIDLEG Article-Specific Risk Documentation

### FIDLEG Art. 72 - Operational Risk Management

**Risk Focus**: Technical vulnerabilities that could compromise protocol security

**Common Risk Types**:
- **Smart Contract Vulnerabilities**: Bugs, reentrancy, overflow attacks
- **Admin Key Risks**: Single points of failure, key compromise
- **Governance Risks**: Centralization, proposal manipulation
- **Upgrade Risks**: Malicious upgrades, implementation errors

**Documentation Requirements**:
- Technical vulnerability assessment
- Admin key management evaluation
- Governance mechanism analysis
- Emergency response procedures

**Bank Impact Assessment**:
- Customer fund safety
- Protocol reliability
- Regulatory compliance
- Reputation risk

### FIDLEG Art. 142 - Market Abuse Prevention

**Risk Focus**: Market manipulation and abuse patterns

**Common Risk Types**:
- **MEV Exploitation**: Arbitrage, front-running, sandwich attacks
- **Wash Trading**: Artificial volume, price manipulation
- **Suspicious Patterns**: Structuring, rapid transactions, geographic risks
- **Governance Manipulation**: Vote buying, proposal spam

**Documentation Requirements**:
- Market abuse pattern analysis
- MEV protection evaluation
- Suspicious activity monitoring
- User protection measures

**Bank Impact Assessment**:
- Customer protection
- Market integrity
- Regulatory compliance
- Fair trading practices

## 📊 Risk Assessment Framework

### Risk Severity Matrix

| Severity | Description | Bank Response | Customer Access |
|----------|-------------|--------------|-----------------|
| **LOW** | Minor impact, easily mitigated | Standard monitoring | Full access |
| **MEDIUM** | Moderate impact, requires attention | Enhanced monitoring | Limited access |
| **HIGH** | Significant impact, needs action | Active management | Restricted access |
| **CRITICAL** | Severe impact, immediate action | Emergency response | No access |

### Compliance Requirement Mapping

| Compliance Level | Risk Tolerance | Monitoring Required | Access Level |
|------------------|----------------|-------------------|--------------|
| **MANDATORY** | Zero tolerance | Continuous | Professional only |
| **RECOMMENDED** | Low tolerance | Daily | Limited retail |
| **OPTIONAL** | Moderate tolerance | Weekly | Full retail |

## 🏗️ Risk Documentation Structure

### 1. Risk Identification
- **Risk Description**: Clear, specific risk statement
- **FIDLEG Classification**: Article and category mapping
- **Bank Impact**: How this affects bank operations

### 2. Risk Assessment
- **Severity Analysis**: Impact on customers and bank
- **Probability Assessment**: Likelihood of occurrence
- **Compliance Impact**: Regulatory implications

### 3. Risk Management
- **Indicators**: How to monitor this risk
- **Measures**: How to mitigate this risk
- **Controls**: Bank-level risk controls

### 4. Regulatory Context
- **FIDLEG Requirements**: Specific article compliance
- **Bank Obligations**: Regulatory reporting needs
- **Customer Protection**: Safety measures required

## 📌 Documentation Best Practices

- **Be Specific**: Avoid generic risk descriptions
- **Link to FIDLEG**: Always reference specific articles
- **Assess Bank Impact**: Focus on regulatory compliance
- **Define Monitoring**: Specify how to track the risk
- **Set Thresholds**: Define when action is required
- **Document Controls**: Describe bank-level protections

## 🔄 Risk Review Process

1. **Initial Documentation**: Full FIDLEG risk assessment
2. **Quarterly Review**: Update risk levels and controls
3. **Incident Response**: Immediate reassessment if risk materializes
4. **Annual Deep Dive**: Comprehensive risk review
5. **Regulatory Updates**: Adjust when FIDLEG changes

## 📋 Risk Documentation Checklist

- [ ] Risk clearly identified and described
- [ ] FIDLEG article and classification specified
- [ ] Bank impact assessment completed
- [ ] Compliance requirement level defined
- [ ] Risk level (LOW/MEDIUM/HIGH/CRITICAL) assigned
- [ ] Monitoring indicators linked
- [ ] Mitigation measures defined
- [ ] Bank controls documented
- [ ] Review cycle established

---

*This guide provides Swiss banks with a structured approach to document DeFi protocol risks while maintaining regulatory compliance under FIDLEG Art. 72 and Art. 142.*
