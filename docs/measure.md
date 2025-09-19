# 📈 Measure Template Guide

This document defines the standard structure and purpose of each section used when creating a new risk mitigation measure in the Web3 Open Risk Framework. Measures represent actionable strategies to reduce the severity, likelihood, or persistence of a risk.

## 🧾 Header Metadata

Basic identifier and classification details.

- **ID**: A unique identifier for the measure. Recommended format: `M:NAME` (e.g., `M:SUBSTITUTION`).
- **Type**: Always `Measure`.
- **Title**: Clear and concise name of the measure.
- **Last Update**: Date of the last revision (ISO format).
- **Version**: Incremental version number, starting from `1.0`.

Example:

```yaml
ID: M:SUBSTITUTION
Type: Measure
Title: Asset Substitution
Last Update: 2025-06-04
Version: 1.1
ImpactPotential: High
RiskReductionScope:
  Severity: true
  Likelihood: true
  Persistence: false
```

## 🧠 Description

Describe what the measure is and how it helps reduce risk. Clarify the mechanism of action, intended outcome, and what type of risk it targets.

**Example:**
Replaces highly volatile or correlated assets with safer alternatives to reduce portfolio-level exposure. Used when market instability threatens yield or value preservation.

## 📋 Preconditions

Define the conditions under which this measure is applicable. This ensures the measure is only used where meaningful and technically feasible.

Example:

- Asset must be liquid and traded on at least two reputable exchanges
- Suitable benchmark (e.g., ETH or a sector index) should be defined for relative comparisons

## ⚙️ Implementation

Outline the steps or actions typically required to apply this measure. Helps with operational clarity, automation logic, or dashboard instructions.

Example:

- Monitor yield and risk metrics of all current positions
- Compare with thresholds defined in strategy
- Trigger capital rotation into safer or higher-quality alternatives
- Confirm execution and update exposure logs

## 🎯 Risk Reduction Scope

Define which dimensions of risk this measure addresses:

- **Severity**: Can this reduce the impact if the risk materializes?
- **Likelihood**: Can this make the risk less likely to occur?
- **Persistence**: Can this shorten the duration of exposure?

| Dimension   | Addressed? | Comment                             |
| ----------- | ---------- | ----------------------------------- |
| Severity    | ✅          | Reduces loss potential              |
| Likelihood  | ✅          | Reduces exposure to risky positions |
| Persistence | ❌          | Does not affect duration of risk    |

## 🪜 Difficulty

Assess the level of effort, knowledge, and infrastructure required to implement this measure.

- **Easy**: Requires minimal technical or financial knowledge; mostly manual
- **Medium**: Requires moderate understanding or tooling (e.g., dashboards, yield monitors)
- **Hard**: Requires advanced modeling, automation, or multi-platform interaction

## 📈 Impact Potential

How effective is this measure in reducing the targeted risk?

- **Low**: Marginal effect; acts as signal or soft brake
- **Medium**: Helps realign exposure; meaningful risk improvement
- **High**: Strong protection; structural mitigation

## 🧭 Usage Guidance

- Measures are mandatory in risk definitions and must be linked by ID.
- Each measure file can be reused across risks and referenced from dashboards.
- Difficulty and impact levels help prioritize actions in critical situations.
- Measures may be manually applied, semi-automated, or fully automated depending on the platform's capabilities.
- Measures should align with investor profile preferences and portfolio strategy.
