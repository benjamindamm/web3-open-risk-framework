# 🏦 FIDLEG Indicator Documentation Guide

This document defines how to document **FIDLEG-compliant indicators** for Swiss banks monitoring DeFi protocols for regulatory compliance.

The goal is to provide a structured methodology that supports **real-time monitoring** and **regulatory reporting** for DeFi protocol risk assessment.

## 🌟 Purpose

The FIDLEG indicator documentation process helps Swiss banks:

- Monitor specific metrics that indicate regulatory compliance
- Detect suspicious patterns and market abuse
- Track protocol security and operational health
- Generate automated reports for FINMA compliance

Indicator documentation is critical for:

- **Real-time Monitoring** - Continuous protocol surveillance
- **Compliance Reporting** - Automated FINMA reporting
- **Risk Detection** - Early warning systems
- **Customer Protection** - Ensuring safe DeFi access

## ⚙️ FIDLEG Indicator Types

Each DeFi protocol indicator is categorized by **monitoring purpose**:

| Indicator Type | Purpose | FIDLEG Article | Example Metrics |
|----------------|---------|----------------|-----------------|
| **PROTOCOL_SECURITY** | Monitor technical vulnerabilities | Art. 72 | Smart contract audits, admin key status |
| **MARKET_ABUSE** | Detect manipulation patterns | Art. 142 | MEV activity, suspicious transactions |

### Indicator Classification Framework

| Classification | Description | Monitoring Frequency | Bank Response |
|----------------|-------------|-------------------|--------------|
| **PROTOCOL_SECURITY** | Technical risk indicators | Real-time/Daily | Enhanced monitoring |
| **MARKET_ABUSE** | Market manipulation detection | Real-time/Daily | Transaction blocking |

### Risk Level Thresholds

| Risk Level | Description | Bank Action | Customer Impact |
|------------|-------------|-------------|-----------------|
| **LOW** | Normal operation | Standard monitoring | No restrictions |
| **MEDIUM** | Elevated risk | Enhanced monitoring | Limited restrictions |
| **HIGH** | High risk | Active intervention | Significant restrictions |
| **CRITICAL** | Critical risk | Emergency response | Access suspension |

## 🧾 FIDLEG Indicator Template

```yaml
id: I:PROTOCOL_INDICATOR.FIDLEG
title: "Protocol Indicator (FIDLEG Compliant)"
type: Indicator
version: "1.0"
lastUpdate: "2024-01-15"
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"        # Art72 or Art142
    indicatorType: "MARKET_ABUSE"           # PROTOCOL_SECURITY or MARKET_ABUSE
    measurementFrequency: "REAL_TIME"      # REAL_TIME, DAILY, WEEKLY, MONTHLY
    riskLevel: "HIGH"                      # LOW, MEDIUM, HIGH, CRITICAL
    suspiciousPatterns: ["mev_arbitrage", "wash_trading", "structuring"]
    auditRequirement:
      level: "REGULATORY"                  # INTERNAL, EXTERNAL, REGULATORY
      frequency: "ANNUAL"                  # QUARTERLY, ANNUAL
```

## 🏛️ FIDLEG Article-Specific Indicators

### FIDLEG Art. 72 - Operational Risk Indicators

**Focus**: Monitor technical vulnerabilities and operational health

**Key Indicator Categories**:
- **Smart Contract Health**: Audit status, bug reports, upgrade frequency
- **Admin Key Security**: Multi-sig status, key rotation, access controls
- **Governance Activity**: Proposal frequency, voting participation, execution success
- **Emergency Response**: Incident response time, recovery procedures

**Monitoring Requirements**:
- **Real-time**: Critical security events
- **Daily**: Operational health metrics
- **Weekly**: Governance and upgrade status
- **Monthly**: Comprehensive security review

**Bank Integration**:
- Automated alerts for critical events
- Dashboard integration for risk teams
- Compliance reporting for FINMA
- Customer communication protocols

### FIDLEG Art. 142 - Market Abuse Indicators

**Focus**: Detect market manipulation and suspicious patterns

**Key Indicator Categories**:
- **MEV Activity**: Extraction volume, frequency, impact on users
- **Suspicious Patterns**: Structuring, rapid transactions, geographic risks
- **Market Manipulation**: Wash trading, price manipulation, volume anomalies
- **User Protection**: Fair trading metrics, user impact assessment

**Monitoring Requirements**:
- **Real-time**: Suspicious transaction detection
- **Daily**: Pattern analysis and trend monitoring
- **Weekly**: Comprehensive market abuse review
- **Monthly**: Regulatory reporting preparation

**Bank Integration**:
- Transaction monitoring systems
- Automated pattern detection
- Regulatory reporting automation
- Customer protection measures

## 📊 Indicator Threshold Framework

### Risk Level Thresholds

| Risk Level | Protocol Security | Market Abuse | Bank Response |
|------------|------------------|--------------|--------------|
| **LOW** | Normal operation | No suspicious activity | Standard monitoring |
| **MEDIUM** | Minor issues | Some suspicious patterns | Enhanced monitoring |
| **HIGH** | Significant concerns | Clear abuse patterns | Active intervention |
| **CRITICAL** | Critical vulnerabilities | Severe manipulation | Emergency response |

### Suspicious Pattern Detection

| Pattern | Description | Detection Method | Bank Action |
|---------|-------------|------------------|-------------|
| **mev_arbitrage** | MEV extraction activity | Transaction analysis | Monitor impact |
| **wash_trading** | Artificial volume | Volume/price correlation | Block transactions |
| **structuring** | Large transaction splitting | Amount pattern analysis | Enhanced KYC |
| **unhosted_wallet** | Non-KYC wallet usage | Address analysis | Transaction blocking |
| **flash_loan_exploitation** | Flash loan attacks | Contract interaction analysis | Monitor protocols |
| **governance_manipulation** | Vote buying/spam | Governance analysis | Restrict voting |

## 🏗️ Indicator Documentation Structure

### 1. Indicator Definition
- **Purpose**: What does this indicator measure?
- **FIDLEG Classification**: Article and type mapping
- **Measurement Method**: How is it calculated?

### 2. Monitoring Setup
- **Data Sources**: Where does the data come from?
- **Collection Method**: How is it collected?
- **Frequency**: How often is it measured?

### 3. Threshold Configuration
- **Risk Levels**: LOW/MEDIUM/HIGH/CRITICAL thresholds
- **Alert Conditions**: When to trigger alerts
- **Escalation Procedures**: Who to notify and when

### 4. Bank Integration
- **Dashboard Integration**: How to display in bank systems
- **Alert Systems**: Automated notification setup
- **Reporting**: FINMA compliance reporting
- **Customer Impact**: How this affects customer access

## 📌 Documentation Best Practices

- **Define Clear Thresholds**: Specific values for each risk level
- **Specify Data Sources**: Reliable, real-time data feeds
- **Document Alert Logic**: When and how alerts are triggered
- **Link to Bank Systems**: Integration with existing infrastructure
- **Set Review Cycles**: Regular threshold and logic review
- **Document Escalation**: Clear response procedures

## 🔄 Indicator Review Process

1. **Initial Setup**: Define indicator and thresholds
2. **Daily Monitoring**: Real-time surveillance and alerts
3. **Weekly Review**: Threshold effectiveness analysis
4. **Monthly Assessment**: Comprehensive indicator review
5. **Quarterly Update**: Adjust thresholds based on performance
6. **Annual Deep Dive**: Complete indicator framework review

## 📋 Indicator Documentation Checklist

- [ ] Indicator purpose clearly defined
- [ ] FIDLEG article and type specified
- [ ] Measurement method documented
- [ ] Data sources identified
- [ ] Risk level thresholds set
- [ ] Alert conditions defined
- [ ] Bank integration planned
- [ ] Escalation procedures documented
- [ ] Review cycle established
- [ ] FINMA reporting requirements addressed

## 🚨 Alert Configuration Examples

### Critical Alerts (Immediate Response)
- Smart contract exploit detected
- Admin key compromise suspected
- Massive MEV extraction (>5% of volume)
- Wash trading pattern confirmed

### High Priority Alerts (Daily Review)
- Unusual governance activity
- Elevated MEV activity (>1% of volume)
- Suspicious transaction patterns
- Protocol upgrade anomalies

### Medium Priority Alerts (Weekly Review)
- Governance participation changes
- MEV activity trends
- User behavior patterns
- Protocol performance metrics

---

*This guide provides Swiss banks with a structured approach to document DeFi protocol indicators while maintaining regulatory compliance under FIDLEG Art. 72 and Art. 142.*
