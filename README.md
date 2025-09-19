# 🗻 Web3 Open Risk Framework

A comprehensive, open-source framework for Web3 risk assessment and management. 
For risk teams, protocol researchers, and banks that need auditable, regulator‑compatible risk models for DeFi.

> **🚧 Work in Progress**: This framework is currently under active development. Our goal is to reach a stable version 1.0 release with comprehensive documentation, validated schemas, and production-ready regulatory extensions.

## 🔍 Why We Built This

Web3 has unlocked a new world of financial autonomy and innovation, but it also introduces complex, layered, and often opaque risks.

We've seen:
- Cross-chain bridges exploited
- Stablecoins losing their peg and triggering systemic effects
- Governance processes subject to manipulation
- Users signing opaque transactions without proper validation

Despite this, most tools still reduce risk to a simplistic score, a badge, or a compliance checkbox.

This framework was developed to address a critical gap: the absence of structured, transparent methodologies for understanding risk in decentralized systems. It aims to move beyond vague slogans like "do your own research" towards a framework that systematically answers:

- What are the risks?
- What can go wrong?
- How can it occur?
- Where does it occur?
- Who is responsible?
- What are the potential consequences?
- What are the potential measures? *(Note: Not all mitigation details are published for security reasons.)*

We originally built this to support our own risk analysis. Now we're sharing it — for those who want to approach risk with clarity, consistency, and accountability.

## 🧱 What's Included

This framework includes:

- 📂 **[Risk Categories](./docs/categories.md)**  
  A classification system to group risks by scope and origin.

- 🧮 **[Risk Types](./docs/types.md)**  
  Distinguishes between measurable risks, structural risks, and mixed types.

- 🔁 **[Scope of Action](./docs/scopes.md)**  
  Tags to describe in which part of the system a risk occurs or becomes relevant.

- 🎯 **[Investment Objectives Model](./docs/objectives.md)**  
  A tagging system to express how a risk affects value, yield, liquidity, or trust.

- 🛡 **[Risk Owner Model](./docs/owners.md)**  
  A layered model to determine who is responsible and can act or intervene for a certain risk.

- 🧾 **[Risk Template](./docs/risk.md)**  
  A Markdown format for consistently documenting individual risks.

- 📊 **[Indicator Template](./docs/indicator.md)**  
  Defines how to link more concrete and more measurable metrics or behavioral signals to each risk.

- 🛠 **[Measure Template](./docs/measure.md)**  
  Standardizes how mitigation strategies are described, evaluated, and linked to risks.

- 🫆 **[Risk Assessment Guide](./docs/assessment.md)**  
  Provides a model for rating likelihood and financial impact (the two key axes for risk assessment and risk matrices), with optional support for persistence and integration with risk indicators.

- 📖 **[Framework Philosophy](./docs/philosophy.md)**  
  Describes the methodology, principles, and external influences behind this framework.

- 📚 **[Terminology](./docs/terminology.md)**  
  Defines key terms and concepts used throughout the framework for consistent understanding and usage.

- 📖 **[References](./docs/references.md)**  
  Curated list of academic papers, industry reports, and professional resources that inform the Web3 Open Risk Framework.

- 🏛️ **[Swiss FIDLEG Extension](./extensions/fidleg/)**  
  A prescriptive DeFi compliance engine for Swiss banks, transforming risk data into actionable compliance directives with automated FIDLEG and GwG responses.

## 📚 Documentation Structure

This repository is organized by function. The core framework documentation is located in the [`docs/`](./docs/) directory, with each file defining a reusable part of the framework:

### 📖 Quick Start
- **New to the framework?** Start with [Philosophy](./docs/philosophy.md) and [Terminology](./docs/terminology.md)
- **Looking for templates?** See [Risk](./docs/risk.md), [Indicator](./docs/indicator.md), and [Measure](./docs/measure.md)
- **Need assessment guidance?** Check [Assessment](./docs/assessment.md)
- **Swiss banks evaluating DeFi protocols?** Use FIDLEG-specific guides: [Risk Guide](./extensions/fidleg/docs/risk.fidleg.md), [Indicator Guide](./extensions/fidleg/docs/indicator.fidleg.md), [Assessment Guide](./extensions/fidleg/docs/assessment.fidleg.md)
- **Regulatory extensions?** Start with [FIDLEG Extension](./extensions/fidleg/) for Swiss FIDLEG compliance

Each component is designed to be forked, extended, or integrated into your own catalog or application.

## 🧰 Use Cases

- **DeFi Protocol Due Diligence** for Swiss banks evaluating protocols like Aave, Compound, Uniswap
- **Protocol Risk Assessment** with smart contract security and liquidity risk analysis
- **Customer Access Control** with automated risk scoring and regulatory compliance validation
- **Swiss Regulatory Compliance** with FIDLEG/GwG integration for FINMA reporting
- **Research and Education** with comprehensive risk framework documentation
- **Bank Risk Dashboards** with automated validation and protocol monitoring
- **Strategy Development** for allocators and asset managers with structured risk assessment

## 🏛️ Regulatory Extensions

The framework supports modular regulatory extensions that can be added without modifying the core framework:

- **Modular Architecture**  
  Extensions are self-contained modules that extend the core framework through schema inheritance and additional documentation, allowing other jurisdictions to add their own regulatory extensions.

- **Swiss FIDLEG Extension**  
  **DeFi Protocol Assessment Toolkit** for Swiss banks to evaluate and approve DeFi protocols (like Aave, Compound, Uniswap) for their customers. Features include:
  - **Core FIDLEG Articles**: Art. 72 (Operational Risks), Art. 142 (Market Abuse)
  - **Protocol Risk Assessment**: Smart contract security, liquidity risks, market manipulation detection
  - **Indicator Type Classification**: PROTOCOL_SECURITY, MARKET_ABUSE for protocol evaluation
  - **Key Risk Patterns**: MEV arbitrage, wash trading, flash loan exploitation, structuring, unhosted wallets
  - **Risk Level Assessment**: LOW, MEDIUM, HIGH, CRITICAL for protocol evaluation

## Contact

For questions about the framework:

- **GitHub Issues:** Use the Issues page for technical discussions
- **Email:** kontakt@benjamin-damm.ch
