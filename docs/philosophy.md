#  Framework Philosophy

This document explains the **why** behind the Web3 Open Risk Framework – our core beliefs, design philosophy, and the problems we're solving in the decentralized ecosystem.

##  Why This Framework Exists

Web3 presents unique challenges that traditional risk management tools cannot address:

- **Decentralized ownership** makes accountability unclear
- **Composability** creates complex interdependencies  
- **Permissionless innovation** means risks evolve rapidly
- **Transparent ledgers** require new approaches to privacy and security
- **Global reach** creates regulatory complexity

Traditional frameworks assume centralized control and static systems. Web3 needs **decentralized, dynamic, and transparent** risk management.

##  Core Philosophy

Our framework is built on three fundamental beliefs:

### 1. **Transparency Over Opacity**
Risk should not be hidden behind proprietary algorithms or black-box scoring. Every risk assessment should be **traceable, verifiable, and explainable**.

### 2. **Context Over Universality** 
A risk that matters during trading may be irrelevant during governance. Our **Scope of Action** model ensures risks surface only when contextually relevant.

<!-- HIDDEN -->
See [Scope of Action](./scopes.md) for detailed implementation.
<!-- /HIDDEN -->

### 3. **Actionability Over Analysis**
Risk identification without clear ownership and mitigation is academic exercise. Every risk must answer: **Who can act?** and **How?**

<!-- HIDDEN -->
See [Risk Owner Model](./owners.md) and [Measures](./measure.md) for implementation details.
<!-- /HIDDEN -->

<!-- PAGEBREAK -->

##  Design Principles

These principles guide every design decision in the framework:

| Principle                     | Why It Matters                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Human-readable First**      | Markdown + YAML ensures both technical and non-technical stakeholders can understand and contribute to risk documentation.                              |
| **Modular Architecture**      | Each component (categories, scopes, owners) can be extended independently, supporting diverse use cases from DeFi protocols to institutional compliance. |
| **Version Control Native**    | Git-based workflows enable collaborative risk management, audit trails, and incremental improvements over time.                                        |
| **Neutrality**                | The framework doesn't promote or discourage crypto participation – it enables **informed decision-making** regardless of risk tolerance.                  |
| **Open Source**               | Transparency in methodology builds trust and enables community validation of risk assessments.                                                          |

<!-- PAGEBREAK -->

## 🆚 What Makes Us Different

Our approach differs fundamentally from existing tools:

| Existing Approach                | Our Approach                                                                                                                                             |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Black-box scoring**            | **Transparent mapping** – every risk assessment is traceable and explainable                                                                              |
| **Static risk catalogs**         | **Dynamic context** – risks surface only when relevant to current user actions                                                                           |
| **Centralized assessment**       | **Distributed ownership** – clear accountability across decentralized systems                                                                           |
| **Proprietary methodologies**    | **Open source** – methodology is public, auditable, and improvable by the community                                                                    |
| **Enterprise-focused**           | **Web3-native** – designed for decentralized teams, Git workflows, and permissionless innovation                                                         |

##  The Bottom Line

We believe risk management in Web3 should be:
- **Transparent** – no hidden algorithms or proprietary scoring
- **Contextual** – relevant risks surface when and where they matter  
- **Actionable** – every risk has clear ownership and mitigation paths
- **Collaborative** – built for decentralized teams and open communities

This framework enables **informed decision-making** in an ecosystem where traditional risk management tools fall short.

<!-- HIDDEN -->
For detailed methodology, see [Methodological Foundations](./methodology.md). For complete terminology, see [Terminology](./terminology.md).
<!-- /HIDDEN -->
