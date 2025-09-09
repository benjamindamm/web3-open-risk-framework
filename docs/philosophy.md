# 🧠 Risk Framework Philosophy & Methodological Roots

This document outlines the conceptual and methodological foundations of the **Web3 Open Risk Framework**, including influences from established risk standards and the rationale behind key design decisions.

## 📘 Methodological Inspirations

While Web3 presents new challenges, this framework draws on well-established risk management standards to ensure analytical rigor and compatibility with institutional thinking.

### ▶ ISO 31000 (Risk Management – Guidelines)
- Emphasis on **contextualization** of risks
- Clear distinction between **risk identification**, **assessment**, and **treatment**
- Iterative cycle of **monitoring**, **review**, and **improvement**

### ▶ COSO ERM (Enterprise Risk Management)
- Structured categorization of risk by **impact on business objectives**
- Focus on **internal control** and **role assignment**
- Inclusion of **external and internal factors** in risk context

### ▶ Solvency II (Insurance Regulatory Framework, EU)
- Influence on **quantitative assessment principles** (severity, likelihood, scenario-based evaluation)
- Separation of **technical risk modeling** from **operational/strategic risk**

## 🔬 Key Design Principles

The Web3 Open Risk Framework was developed with a set of explicit design priorities:

| Principle | Description |
|----------|-------------|
| **Transparency over Scoring** | Risk should not be reduced to arbitrary scores or black-box indexes. The framework favors **qualitative clarity** and traceable **indicator logic**. |
| **Human-readable First** | All risks are defined in **Markdown** with embedded metadata in **YAML**, making them accessible for both technical and non-technical stakeholders. |
| **Situational Awareness** | Risks are tagged by **Scope of Action**, helping to surface only what is relevant in the current user or system context. |
| **Actionability by Design** | Every risk entry must identify **who can act** and **how** (via measures). This prevents dead-end analyses and enables response modeling. |
| **Composable Architecture** | The framework is modular: each file (e.g., categories, scopes, owners) is designed for reuse and extension. |
| **Neutrality** | The framework is **non-opinionated** about the use of crypto. It does not promote or discourage participation – it enables **informed risk decisions**. |

## 🆚 Comparison with Existing Web3 Tools

| Framework / Tool | Difference |
|------------------|------------|
| **Traditional scoring services (e.g., DeFi Safety)** | Often rely on **checklists or scoring formulas** with opaque logic. Our model avoids fixed scores and focuses on contextual mapping. |
| **Gauntlet / Chaos Labs** | Focus heavily on **quantitative simulation and optimization**. Our framework supports **hybrid analysis**, including qualitative governance or UI risks. |
| **Crypto Due Diligence Tools** | Many treat risk as **static information**. We emphasize **situational relevance** and change over time via indicators and scopes. |
| **GRC tools (e.g., ServiceNow, AuditBoard)** | Enterprise-focused and rarely Web3-native. Our format fits **decentralized teams, open systems**, and Git-based workflows. |
