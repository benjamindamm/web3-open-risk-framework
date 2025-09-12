# 🏦 FIDLEG Risk Assessment Guide

This document defines how to perform **FIDLEG-compliant risk assessments** for Swiss banks evaluating DeFi protocols for customer access.

The goal is to provide a structured methodology that supports **regulatory compliance** and **bank decision-making** for DeFi protocol approval.

## 🌟 Purpose

The FIDLEG assessment process helps Swiss banks answer:

- Is this DeFi protocol compliant with Swiss regulations?
- What level of customer access can we safely provide?
- How frequently must we monitor this protocol?
- What are the specific FIDLEG compliance requirements?

Assessments are critical for:

- **Customer Access Decisions** - Retail vs Professional vs No Access
- **Compliance Reporting** - FINMA regulatory requirements
- **Risk Management** - Ongoing monitoring and review cycles
- **Business Strategy** - DeFi service offerings

## ⚙️ FIDLEG Assessment Parameters

Each DeFi protocol is evaluated across **regulatory compliance dimensions**:

| Dimension | Description | Bank Impact |
|-----------|-------------|-------------|
| **Compliance Status** | Overall FIDLEG compliance level | Determines approval/rejection |
| **Bank Recommendation** | Recommended customer access level | Business decision framework |
| **Customer Access Level** | Specific access permissions | Service offering scope |
| **Monitoring Frequency** | Required oversight intensity | Operational resource allocation |

### Compliance Status Levels

| Status | Description | Bank Action |
|--------|-------------|-------------|
| **COMPLIANT** | Meets all FIDLEG requirements | Full customer access approved |
| **NON_COMPLIANT** | Fails critical FIDLEG requirements | Access denied |
| **REQUIRES_MONITORING** | Meets requirements but needs oversight | Limited access with monitoring |
| **CRITICAL_ISSUES** | Serious compliance violations | Immediate access suspension |

### Bank Recommendation Framework

| Recommendation | Customer Access | Monitoring | Business Impact |
|----------------|-----------------|-----------|-----------------|
| **APPROVE** | Full retail access | Weekly | High revenue potential |
| **APPROVE_WITH_LIMITS** | Limited retail access | Daily | Moderate revenue |
| **MONITOR_ONLY** | Professional only | Daily | Low revenue |
| **REJECT** | No access | N/A | No revenue |

## 🏛️ FIDLEG Article-Specific Criteria

### FIDLEG Art. 72 - Operational Risk Management

**Focus**: Smart contract security, admin key risks, technical vulnerabilities

**Assessment Criteria**:
- Smart contract audit history and quality
- Admin key management and multi-sig implementation
- Protocol upgrade mechanisms and governance
- Emergency response procedures

**Bank Decision Logic**:
- ✅ **COMPLIANT**: Recent audits, multi-sig, clear governance → **APPROVE**
- ⚠️ **REQUIRES_MONITORING**: Some concerns, ongoing audits → **APPROVE_WITH_LIMITS**
- ❌ **NON_COMPLIANT**: No audits, single admin key → **REJECT**

### FIDLEG Art. 142 - Market Abuse Prevention

**Focus**: MEV detection, wash trading, suspicious patterns

**Assessment Criteria**:
- MEV protection mechanisms and effectiveness
- Market manipulation detection systems
- Suspicious pattern monitoring capabilities
- User protection measures

**Bank Decision Logic**:
- ✅ **COMPLIANT**: Active MEV protection, monitoring systems → **APPROVE**
- ⚠️ **REQUIRES_MONITORING**: Basic protection, needs oversight → **APPROVE_WITH_LIMITS**
- ❌ **NON_COMPLIANT**: No protection, high MEV activity → **REJECT**

## 🧾 FIDLEG Assessment Template

```yaml
id: A:PROTOCOL_NAME.FIDLEG
title: "Protocol Risk Assessment (FIDLEG Compliant)"
type: Assessment
version: 1.0
lastUpdate: "2024-01-15"
riskId: R:PROTOCOL_RISK.FIDLEG
date: "2024-01-15"
assessedBy: "Bank Risk Team"
severity: "MEDIUM"           # Traditional risk assessment
likelihood: "POSSIBLE"       # Traditional risk assessment
persistence: "OCCASIONAL"    # Traditional risk assessment
extensions: ["fidleg"]
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"        # Art72 or Art142
    assessmentType: "MARKET_ABUSE"           # PROTOCOL_SECURITY or MARKET_ABUSE
    complianceStatus: "COMPLIANT"            # COMPLIANT, NON_COMPLIANT, REQUIRES_MONITORING, CRITICAL_ISSUES
    bankRecommendation: "APPROVE"            # APPROVE, APPROVE_WITH_LIMITS, MONITOR_ONLY, REJECT
    customerAccessLevel: "RETAIL_FULL"       # RETAIL_FULL, RETAIL_LIMITED, PROFESSIONAL_ONLY, NO_ACCESS
    monitoringFrequency: "WEEKLY"           # DAILY, WEEKLY, MONTHLY, QUARTERLY
    nextReviewDate: "2024-07-15"            # Next assessment date
indicatorWeights:
  - id: I:PROTOCOL_INDICATOR.FIDLEG
    weight: 1.0
    threshold: "MEDIUM"
    affects:
      SEVERITY: "INCREASE"
      LIKELIHOOD: "INCREASE"
    timeframe: "24h"
    description: "Primary indicator for protocol assessment"
summary: "Protocol demonstrates MEDIUM risk level with adequate protection measures, making it suitable for retail customer access with weekly monitoring."
riskClassification:
  dimension: "Market Integrity"
  rating: "MEDIUM_RISK"
  explanation: "Risk is mitigated by existing protection measures, but requires ongoing monitoring for market integrity"
```

## 📊 Bank Decision Matrix

| Compliance Status | Bank Recommendation | Customer Access | Monitoring | Revenue Impact |
|------------------|-------------------|-----------------|------------|----------------|
| **COMPLIANT** | APPROVE | RETAIL_FULL | WEEKLY | High |
| **COMPLIANT** | APPROVE_WITH_LIMITS | RETAIL_LIMITED | DAILY | Medium |
| **REQUIRES_MONITORING** | MONITOR_ONLY | PROFESSIONAL_ONLY | DAILY | Low |
| **NON_COMPLIANT** | REJECT | NO_ACCESS | N/A | None |
| **CRITICAL_ISSUES** | REJECT | NO_ACCESS | N/A | None |

## 🏗️ Assessment Structure for Banks

### 1. Executive Summary
- **Key Result**: Clear compliance status and recommendation
- **Business Impact**: Revenue potential and customer access level
- **Next Steps**: Implementation timeline and monitoring requirements

### 2. Risk Assessment
- **Risk Matrix**: Traditional severity/likelihood/persistence
- **Key Findings**: Protocol-specific compliance points
- **FIDLEG Compliance**: Article-specific requirements

### 3. Bank Decision Framework
- **Customer Access Recommendation**: Clear approval/rejection
- **Risk Management Actions**: Specific monitoring requirements
- **Implementation Timeline**: Phased rollout approach

### 4. Regulatory Compliance
- **FIDLEG Status**: Article-specific compliance level
- **Monitoring Requirements**: Frequency and scope
- **Reporting Obligations**: FINMA compliance needs

## 📌 Usage Tips for Banks

- **Document compliance rationale** - Why was this decision made?
- **Set clear review cycles** - When will you reassess?
- **Define monitoring KPIs** - What metrics matter most?
- **Establish escalation procedures** - When to restrict access?
- **Maintain audit trails** - Document all decisions for regulators

## 🔄 Review and Update Process

1. **Initial Assessment**: Full FIDLEG evaluation
2. **Quarterly Review**: Update compliance status
3. **Incident Response**: Immediate reassessment if issues arise
4. **Annual Deep Dive**: Comprehensive protocol review
5. **Regulatory Changes**: Update when FIDLEG requirements change

---

*This guide provides Swiss banks with a structured approach to evaluate DeFi protocols for customer access while maintaining regulatory compliance under FIDLEG Art. 72 and Art. 142.*
