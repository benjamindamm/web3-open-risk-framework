# 🗻 Web3 Open Risk Framework

A comprehensive, open-source framework for Web3 risk assessment and management.

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

- 📂 **Risk Categories**  
  A classification system to group risks by scope and origin.

- 🧮 **Risk Types**  
  Distinguishes between measurable risks, structural risks, and mixed types.

- 🔁 **Scope of Action**  
  Tags to describe in which part of the system a risk occurs or becomes relevant.

- 🎯 **Investment Objectives Model**  
  A tagging system to express how a risk affects value, yield, liquidity, or trust.

- 🛡 **Risk Owner Model**  
  A layered model to determine who is responsible and can act or intervene for a certain risk.

- 🧾 **Risk Template**  
  A Markdown format for consistently documenting individual risks.

- 📊 **Indicator Template**  
  Defines how to link more concrete and more measurable metrics or behavioral signals to each risk.

- 🛠 **Measure Template**  
  Standardizes how mitigation strategies are described, evaluated, and linked to risks.

- 🫆 **Risk Assessment Guide**  
  Provides a model for rating likelihood and financial impact (the two key axes for risk assessment and risk matrices), with optional support for persistence and integration with risk indicators.

## 🏛️ Regulatory Extensions

The framework supports modular regulatory extensions that can be added without modifying the core framework:

- **Swiss FIDLEG Extension**  
  Complete Swiss regulatory compliance module with FIDLEG (Swiss Financial Services Act) and GwG (Anti-Money Laundering Act) support, including article references, regulatory classifications, and compliance requirements.

- **Modular Architecture**  
  Extensions are self-contained modules that extend the core framework through schema inheritance and additional documentation, allowing other jurisdictions to add their own regulatory extensions.

## 📚 Documentation Structure

This repository is organized by function. The core framework documentation is located in the [`docs/`](./docs/) directory, with each file defining a reusable part of the framework:

### 📖 Quick Start
- **New to the framework?** Start with [`docs/philosophy.md`](./docs/philosophy.md) and [`docs/terminology.md`](./docs/terminology.md)
- **Looking for templates?** See [`docs/risk.md`](./docs/risk.md), [`docs/indicator.md`](./docs/indicator.md), and [`docs/measure.md`](./docs/measure.md)
- **Need assessment guidance?** Check [`docs/assessment.md`](./docs/assessment.md)
- **Regulatory extensions?** Start with [`extensions/fidleg/`](./extensions/fidleg/) for Swiss FIDLEG compliance

### 📋 Complete File Overview

| File                                      | Purpose                                                                 |
|-------------------------------------------|-------------------------------------------------------------------------|
| [`docs/categories.md`](./docs/categories.md)        | Defines the eight core **Risk Categories**, each with a clear scope     |
| [`docs/types.md`](./docs/types.md)                  | Differentiates **quantitative**, **qualitative**, and **hybrid** risks  |
| [`docs/scopes.md`](./docs/scopes.md)                | Specifies where a risk is triggered – e.g., **TRADE**, **GOVERNANCE**, etc. |
| [`docs/objectives.md`](./docs/objectives.md)        | Maps risks to **investment objectives** like value, yield, or trust     |
| [`docs/owners.md`](./docs/owners.md)                | Defines a layered model of **Risk Owners** and their capabilities       |
| [`docs/risk.md`](./docs/risk.md)                    | A complete Markdown **template** to document an individual risk         |
| [`docs/indicator.md`](./docs/indicator.md)          | Describes how to define more concrete and more **measurable metrics** or **behavioral signals** for each risk |
| [`docs/measure.md`](./docs/measure.md)              | Describes how to define a **measure** to mitigate a risk                |
| [`docs/assessment.md`](./docs/assessment.md)        | Outlines how to assess risks using methods (either qualitatively or supported by quantitative indicators) and using Likelihood and Financial Impact |
| [`docs/philosophy.md`](./docs/philosophy.md)        | Describes the **methodology**, **principles**, and external **influences** behind this framework |
| [`docs/terminology.md`](./docs/terminology.md)      | Defines key terms and concepts used throughout the framework for consistent understanding and usage |

### 🏛️ Modular Regulatory Extensions

| File                                      | Purpose                                                                 |
|-------------------------------------------|-------------------------------------------------------------------------|
| [`extensions/README.md`](./extensions/README.md) | Overview of regulatory extensions and how to add new ones |
| [`extensions/fidleg/`](./extensions/fidleg/) | Swiss FIDLEG extension module - demonstrates modular regulatory compliance |

Each component is designed to be forked, extended, or integrated into your own catalog or application.

## 📁 Repository Structure

```
module/
├── docs/                          # Framework documentation
│   ├── categories.md              # Risk categories definition
│   ├── types.md                   # Risk types classification
│   ├── scopes.md                  # Scope of action definitions
│   ├── objectives.md              # Investment objectives model
│   ├── owners.md                  # Risk ownership model
│   ├── risk.md                    # Risk documentation template
│   ├── indicator.md               # Indicator template
│   ├── measure.md                 # Measure template
│   ├── assessment.md              # Assessment guide
│   ├── philosophy.md              # Framework philosophy
│   ├── terminology.md             # Key terminology
│   └── methodology.md             # Detailed methodology
├── extensions/                    # Modular regulatory extensions
│   ├── README.md                  # Extensions overview
│   └── fidleg/                    # Swiss FIDLEG extension
│       ├── docs/                  # FIDLEG documentation
│       │   └── fidleg-extension.md # Complete FIDLEG documentation
│       ├── schema/                # Extended JSON schemas
│       │   ├── risk-fidleg.schema.json
│       │   ├── indicator-fidleg.schema.json
│       │   └── measure-fidleg.schema.json
│       └── README.md              # FIDLEG extension guide
├── schema/                        # JSON schemas for validation
│   ├── risk.schema.json
│   ├── indicator.schema.json
│   ├── assessment.schema.json
│   └── measure.schema.json
├── scripts/                       # Validation tools
│   ├── validate-markdown.mjs      # Schema validation
│   ├── validate-references.mjs    # Reference validation
│   └── package.json
├── catalogue/                     # Example content
│   ├── risks/                     # Sample risk definitions
│   ├── indicators/                # Sample indicator definitions
│   └── assessments/               # Sample assessment examples
└── README.md                      # This file
```

## 🧰 Use Cases

- Crypto asset due diligence  
- DeFi protocol risk monitoring  
- Governance transparency  
- Research and education  
- Internal risk dashboards and tooling  
- Strategy development for allocators and asset managers

## Contact

For questions about the framework:

- **GitHub Issues:** Use the Issues page for technical discussions
- **Email:** kontakt@benjamin-damm.ch
