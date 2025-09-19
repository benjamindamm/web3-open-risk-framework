# 🎯 Affected Investment Objectives

This section defines the different **investment objectives** that a risk can negatively influence. Each objective reflects a specific priority for investors – from value preservation to operational safety or regulatory clarity.

A risk entry in the catalogue should specify:

- **Which objective(s)** are at risk
- The **direction of effect**:
- [INCREASE] the metric rises in an undesirable way (e.g. [COST] increases = bad)
- [DECREASE] the metric drops below the ideal (e.g. [TRUST] decreases = bad)
- The **target direction**: whether the objective should ideally increase or decrease

> **Note:** The model only tracks *undesirable deviations* from the expected or desired state.

## 📊 Purpose and Use

The objectives model serves several key functions:

- It links risks to investor priorities (e.g. value, access, reputation)
- It simplifies risk scoring through **thematic groupings** of objectives
- It helps design targeted **measures** that address specific threats
- It supports intuitive UI elements like filters, badges, or dashboards

<!-- PAGEBREAK -->

## 🧩 Objective Domains and Definitions

### 💰 Financial Objectives  
Risks that directly affect the economic quality or efficiency of an investment.

| Objective   | Description | Goal      | Example |
|-------------|-------------|-----------|---------|
| [VALUE]     | Monetary worth of an asset in base currency. | Increase | Loss of value due to exploit |
| [YIELD]     | Ongoing returns such as interest or staking. | Increase | Yield erosion from overuse |
| [COST]      | Operational or transactional expenses. | Decrease | Gas fee spikes on Ethereum |
| [LIQUIDITY] | Ability to exit or reallocate quickly. | Increase | Liquidity lock during volatility |

<!-- PAGEBREAK -->

### 🛡 Security Objectives  
Risks that affect safety, accessibility, or resilience.

| Objective    | Description | Goal      | Example |
|--------------|-------------|-----------|---------|
| [LOSS]       | Partial or full capital loss. | Decrease | Exploit drains protocol treasury |
| [ACCESS]     | Asset mobility and control. | Increase | Seizure of funds by authority |
| [DEPENDENCY] | Exposure to external service reliability. | Decrease | Oracle provider downtime |
| [TRUST]      | Perceived system reliability. | Increase | Confusing or manipulated vote |
| [POTENTIAL]  | Long-term upside and optionality. | Increase | No roadmap or stagnation |

### ⚖️ Regulatory Objectives  
Risks that influence legal certainty or reputational standing.

| Objective      | Description | Goal      | Example |
|----------------|-------------|-----------|---------|
| [LEGAL_STATUS] | Alignment with regulatory frameworks. | Increase | Protocol accidentally offers a security |
| [TRANSPARENCY] | Clarity around governance or ownership. | Increase | Hidden roles in multisig |

<!-- PAGEBREAK -->

## 🔁 Connection to Measures

Every risk should be linked to one or more **measures** that specifically address the **affected objectives**:

- Which **objective(s)** does the measure aim to protect?
- What is the **direction** of correction or improvement?
- Does the measure help restore the desired target state?

This supports:

- Actionable decision-making  
- Scoring logic in automated tools  
- Communication of mitigation effectiveness

## 📌 Implementation Tip

For dashboards: Highlight the **top 1–3 affected objectives** using tags or icons. Use color coding to signal direction of deviation (e.g. red for trust decreases).

For analysts: Group risks by **objective domain** (financial, security, regulatory) to improve alignment with strategy or audience.

<!-- HIDDEN -->
For complete terminology, see [Terminology](./terminology.md). For risk categories, see [Risk Categories](./categories.md).
<!-- /HIDDEN -->

