# 📄 Risk Template

Each risk is defined in its own Markdown file using the following structure. This format is both human-readable and machine-parsable, allowing use in dashboards, rule engines, or documentation.

The goal is to capture not only the **what**, but also the **why**, **who**, and how behind each risk.

Fields marked with **(optional)** can be skipped to create a quick, initial version of the risk entry. These can later be completed for a more detailed assessment.

## 📝 Quick Version

To quickly document a risk, you only need to complete:

- id
- title
- category
- type
- description

The other sections can then be filled in later, based on your priorities or resources.

## 🧩 Metadata (mandatory)

```yaml
id: "R:RISK-TITLE"
title: Example Risk Title
category: CONTRACT
type: HYBRID
scopes:
  - TRADE
  - APPLICATION
owners:
  - TEAM
objectives:
  - type: VALUE
    direction: DECREASE
    goal: INCREASE
  - type: TRUST
    direction: DECREASE
    goal: INCREASE
measures:
  - id: M:SUBSTITUTION
  - id: M:HEDGING
indicatorWeights:
  - id: "I:UTILIZATION_RATIO"
    weight: 0.6
    affects:
      SEVERITY: INCREASE
      PERSISTENCE: INCREASE
  - id: "I:LENDING_APY_TREND"
    weight: 1.0
    affects:
      LIKELIHOOD: INCREASE
```

## 🧠 Description

Clearly define the risk. What exactly can go wrong? What is the core issue that makes this a threat or vulnerability?

## 🧭 Context (optional)

Give background.
Why does this risk exist in the first place? What makes it relevant in Web3 or in this particular setup?

Examples:

- Technical decisions
- Governance structure
- Economic design
- User behavior

## 📈 Indicators (optional)

Indicators are defined in a separate file and linked to this risk by ID. Use this section to show the link explicitly here.

Indicators are defined in a separate file and linked to this risk by ID.
Each indicator can influence different risk dimensions such as severity, likelihood, or persistence.

Use the indicatorWeights field to:

- assign weights to multiple indicators
- declare which dimensions they affect
- specify the direction of influence (INCREASE / DECREASE)

## 🛠 Measures (optional)

Measures are defined in a separate file and linked to this risk by ID. Use this section to show the link explicitly here.

## 🧮 Assessment (optional)

Provide a concise evaluation of the risk in terms of severity, likelihood, and persistence.  
This section is meant to help prioritize risks and guide decision-making.

Indicators may be linked to this risk to support a more data-driven assessment.  
Each linked indicator represents a possible signal or measurement for this risk becoming active.

If a risk has **one indicator**, it is assumed to carry **100% relevance** for triggering this risk.

If multiple indicators are used, use the indicatorWeights block to:

- assign specific weights to each
- map each to one or more affected risk dimensions (severity, likelihood, persistence)
- define whether the indicator tends to increase or decrease the risk

You may also include qualitative remarks on:

- Persistence over time
- Accumulation with other risks
- External dependencies or dynamic thresholds

## 🔗 Related Risks (optional)

List other risks that are similar, derived from this one, or that may compound its effect.
