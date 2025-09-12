# FIDLEG Risk Classification Guide

This guide provides a systematic approach to classifying DeFi protocol risks according to Swiss FIDLEG requirements for bank evaluation.

## Core FIDLEG Article Mapping

| FIDLEG Article | Risk Category | Bank Impact | Documentation Frequency |
|----------------|---------------|-------------|------------------------|
| **Art. 72** | Operational Risk Management | Protocol Security | Quarterly |
| **Art. 142** | Market Abuse Prevention | Market Integrity | Monthly |

## Risk Classification Framework

### FIDLEG Art. 72 - Operational Risk Management

**Focus**: Smart contract security, admin key risks, technical vulnerabilities

**Risk Examples**:
- Smart contract vulnerabilities
- Admin key compromise
- Protocol governance attacks
- Emergency response failures

**Classification Template**:
```yaml
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"
    regulatoryClassification: "OPERATIONAL_RISK"
    complianceRequirement: "MANDATORY"
    riskLevel: "HIGH"
```

### FIDLEG Art. 142 - Market Abuse Prevention

**Focus**: MEV detection, wash trading, suspicious patterns

**Risk Examples**:
- MEV exploitation
- Wash trading
- Market manipulation
- Suspicious transaction patterns

**Classification Template**:
```yaml
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"
    regulatoryClassification: "MARKET_RISK"
    complianceRequirement: "MANDATORY"
    riskLevel: "HIGH"
```

## Bank Decision Framework

### Risk Level to Bank Recommendation Mapping

| Risk Level | Compliance Status | Bank Recommendation | Customer Access |
|------------|------------------|-------------------|-----------------|
| **LOW** | COMPLIANT | APPROVE | RETAIL_FULL |
| **MEDIUM** | COMPLIANT | APPROVE_WITH_LIMITS | RETAIL_LIMITED |
| **HIGH** | REQUIRES_MONITORING | MONITOR_ONLY | PROFESSIONAL_ONLY |
| **CRITICAL** | NON_COMPLIANT | REJECT | NO_ACCESS |

### Compliance Requirement Levels

| Requirement | Description | Bank Action |
|-------------|-------------|-------------|
| **MANDATORY** | Critical for FIDLEG compliance | Must address before approval |
| **RECOMMENDED** | Best practice for risk management | Should address for full approval |
| **OPTIONAL** | Nice to have for enhanced security | May address for premium access |

## Classification Process

1. **Identify Risk Type**: Operational vs Market Risk
2. **Map to FIDLEG Article**: Art. 72 or Art. 142
3. **Assess Compliance Level**: MANDATORY, RECOMMENDED, OPTIONAL
4. **Determine Risk Level**: LOW, MEDIUM, HIGH, CRITICAL
5. **Set Bank Recommendation**: Based on risk level and compliance status

## Documentation Requirements

- **Risk Documentation**: Use `risk.fidleg.md` template
- **Indicator Documentation**: Use `indicator.fidleg.md` template
- **Assessment Documentation**: Use `assessment.fidleg.md` template
- **Naming Convention**: Follow `naming-convention.md`

---

*This guide provides Swiss banks with a systematic approach to classify DeFi protocol risks according to FIDLEG Art. 72 and Art. 142 requirements.*