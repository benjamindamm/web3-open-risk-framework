# Regulatory Extensions Framework

The Web3 Open Risk Framework supports modular regulatory extensions that add jurisdiction-specific compliance capabilities without affecting the core framework.

## 🏗️ Extension Architecture

Extensions are designed to be:

- **Non-intrusive**: Core framework remains unchanged
- **Action-oriented**: Trigger specific compliance actions based on defined conditions
- **Modular**: Multiple jurisdictions can coexist independently
- **Backward compatible**: Existing risk definitions continue to work

<!-- PAGEBREAK -->

## 🌍 Available Extensions

### Swiss FIDLEG Extension (Work in progress)

The **Swiss FIDLEG Extension** is a prescriptive DeFi compliance engine for Swiss financial institutions. It enables systematic evaluation, management, and response to FIDLEG and GwG regulatory requirements when integrating DeFi protocols.

#### **Purpose and Application**
- **Target Audience**: Swiss financial institutions
- **Regulatory Basis**: Financial Services Act (FIDLEG) and Anti-Money Laundering Act (GwG)
- **Application Scope**: Integration of DeFi protocols (Aave, Compound, Uniswap) into service offerings

#### **Core Features**
- **Dynamic Action Triggering**: Automatic initiation of FIDLEG actions based on predefined conditions
- **FINMA-Compliant Reporting**: Generation of auditable commands with MROS reporting specifications
- **Suspicious Pattern Detection**: Integration of detection for MEV arbitrage, structuring, geographic risks
- **Automated Regulatory Triage**: Linking assessment results with compliance mandates
- **GwG Workflows**: Comprehensive AML compliance through transaction monitoring
- **Auditable Traceability**: Immutable record of triggered actions and regulatory basis

## 🔧 Extension Pattern

Extensions add regulatory extension objects to core schemas, containing jurisdiction-specific compliance information. Each extension includes relevant regulatory articles, compliance status indicators, and required actions with context parameters for automated compliance enforcement.

<!-- PAGEBREAK -->

## ➕ Adding New Extensions

To create a new regulatory extension:

1. **Create directory**: `extensions/{jurisdiction}/`
2. **Define schemas**: Extend core JSON schemas with jurisdiction-specific fields
3. **Create action schema**: Define `*-action.schema.json` for compliance actions
4. **Document**: Provide comprehensive documentation and examples
5. **Update README**: Add your extension to the list

## 🎯 Extension Benefits

- **Proactive Compliance**: Automatic enforcement of regulatory mandates
- **Operational Efficiency**: Automation of routine compliance tasks
- **Enhanced Auditability**: Machine-readable audit trails
- **Granular Control**: Precise action definitions and conditional triggering
- **Structured Decision-Making**: Clear framework for DeFi exposure evaluation
- **Future-Proof**: Adapts to evolving regulatory landscapes
