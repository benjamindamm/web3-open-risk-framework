# FIDLEG Article Reference

This document explains the `articleReference` field used in FIDLEG-compliant files.

## What is articleReference?

The `articleReference` field specifies which Swiss FIDLEG (Financial Services Act) article applies to your risk, indicator, or measure. This helps ensure compliance with Swiss regulatory requirements.

## Available Articles

### Core Articles (Most Common)

#### FIDLEG_Art24 - Customer Classification and Protection
- **When to use**: Customer classification, KYC/AML requirements
- **Applies to**: All client-facing services
- **Requirements**: Customer due diligence, risk assessment

#### FIDLEG_Art72 - Operational Risk Management
- **When to use**: Technical risks, system failures, operational issues
- **Applies to**: All operational activities
- **Requirements**: Risk management systems, incident reporting

#### FIDLEG_Art142 - Market Abuse Prevention
- **When to use**: Market manipulation, insider trading, MEV detection
- **Applies to**: Trading activities, market operations
- **Requirements**: Market monitoring, abuse prevention

#### FIDLEG_Art18_20 - Conflict of Interest Management
- **When to use**: Conflicts between client and firm interests
- **Applies to**: Investment advice, trading activities
- **Requirements**: Conflict identification, mitigation measures

### Extended Articles

#### FIDLEG_Art8_10 - Client Information and Documentation
- **When to use**: Client onboarding, information requirements
- **Applies to**: Client services, documentation
- **Requirements**: Information collection, record keeping

#### FIDLEG_Art11_15 - Investment Services and Advice
- **When to use**: Investment advice, portfolio management
- **Applies to**: Investment services
- **Requirements**: Suitability assessment, advice standards

#### FIDLEG_Art16_18 - Order Execution and Best Execution
- **When to use**: Order execution, trading services
- **Applies to**: Trading operations
- **Requirements**: Best execution, order handling

#### FIDLEG_Art19_21 - Client Asset Protection
- **When to use**: Client fund protection, custody
- **Applies to**: Asset management, custody services
- **Requirements**: Asset segregation, protection measures

#### FIDLEG_Art22_24 - Client Classification and Suitability
- **When to use**: Client categorization, product suitability
- **Applies to**: Client services, product distribution
- **Requirements**: Classification procedures, suitability tests

#### FIDLEG_Art25_30 - Product Governance and Management
- **When to use**: Product development, governance
- **Applies to**: Product management, development
- **Requirements**: Product oversight, governance procedures

#### FIDLEG_Art31_35 - Reporting and Transparency
- **When to use**: Regulatory reporting, transparency
- **Applies to**: All regulated activities
- **Requirements**: Reporting procedures, transparency measures

#### FIDLEG_Art36_40 - Organizational Requirements
- **When to use**: Organizational structure, governance
- **Applies to**: Company organization, management
- **Requirements**: Organizational procedures, governance

#### FIDLEG_Art41_45 - Conduct of Business Rules
- **When to use**: Business conduct, ethical standards
- **Applies to**: All business activities
- **Requirements**: Conduct procedures, ethical standards

#### FIDLEG_Art46_50 - Supervision and Enforcement
- **When to use**: Regulatory supervision, enforcement
- **Applies to**: Regulatory compliance, enforcement
- **Requirements**: Supervision procedures, enforcement measures

## How to Choose the Right Article

### For Risks
1. **Technical Risks** → Use `FIDLEG_Art72`
2. **Customer Protection** → Use `FIDLEG_Art24`
3. **Market Manipulation** → Use `FIDLEG_Art142`
4. **Conflict of Interest** → Use `FIDLEG_Art18_20`

### For Indicators
1. **Transaction Monitoring** → Use `FIDLEG_Art72`
2. **Customer Monitoring** → Use `FIDLEG_Art24`
3. **Market Monitoring** → Use `FIDLEG_Art142`
4. **Compliance Monitoring** → Use `FIDLEG_Art31_35`

### For Measures
1. **Technical Controls** → Use `FIDLEG_Art72`
2. **Customer Protection** → Use `FIDLEG_Art24`
3. **Market Integrity** → Use `FIDLEG_Art142`
4. **Organizational Measures** → Use `FIDLEG_Art36_40`

## Examples

### Risk Example
```yaml
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art72"  # For operational risk management
```

### Indicator Example
```yaml
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art142"  # For market abuse prevention
```

### Measure Example
```yaml
regulatoryExtensions:
  fidleg:
    articleReference: "FIDLEG_Art24"  # For customer protection
```

## Need Help?

If you're unsure which article to use:
1. Check the risk type (technical, customer, market, organizational)
2. Review the examples above
3. Consult with compliance team
4. Refer to Swiss FIDLEG documentation
