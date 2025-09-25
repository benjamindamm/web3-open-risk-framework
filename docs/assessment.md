#  Risk Assessment Guide

This document defines how to perform consistent, transparent, and meaningful **risk assessments** within the Web3 Open Risk Framework.

The goal is to provide a structured methodology that supports both **qualitative interpretation** and **quantitative evaluation**, depending on the risk type.

##  Purpose

The assessment process helps answer:

- How severe is the risk if it materializes?
- How likely is it to occur?
- How persistent or dynamic is the risk over time?
- Are there any early warning indicators?

Assessments are critical for:

- Prioritization in dashboards or reports  
- Triggering mitigations or alerts  
- Communicating urgency and confidence  

##  Assessment Parameters

Each risk is evaluated across three key dimensions:

| Dimension       | Description                                                                                                                             |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **Severity**    | How serious are the consequences if the risk materializes? Consider the impact on value, access, trust, regulation, or solvency.        |
| **Likelihood**  | How probable is it that the risk occurs under current or foreseeable conditions?                                                        |
| **Persistence** | Is the risk temporary, recurring, or continuously present? Also captures if the risk is embedded structurally.                          |

Use either a 3- or 5-point scale depending on the complexity of your scoring model.

Example (3-point scale):

| Level | Severity   | Likelihood | Persistence |
|-------|------------|------------|-------------|
| 1     | Negligible | Rare       | Temporary   |
| 2     | Moderate   | Possible   | Recurring   |
| 3     | Critical   | Likely     | Persistent  |

##  Accepted Values

Each field in a risk assessment uses a predefined set of values (enums) to ensure consistency across dashboards, reports, and automated systems. These values are **not defined globally**, but directly in the documents that introduce and explain them in context.

For reference:

- **Severity**, **Likelihood**, **Persistence**, and **Risk Status** are defined in this file under *Assessment Parameters* and the corresponding explanation tables.

- **Impact Potential**, **Risk Reduction Scope**, and **Difficulty** are defined in [`measures.md`](./measures.md), where they describe the effectiveness and feasibility of a mitigation strategy.

Each of these enums should be treated as normative and stable. When updating or interpreting a risk or a measure, always refer to the original definition in the respective file.

##  Indicator Integration

If the risk is **quantitative** or **hybrid**, link relevant indicators:

- Assign **weights** to each linked indicator
- Use threshold logic (e.g., 7-day moving average crosses critical value)
- Highlight **deviation from baseline or target**, not just absolute values

##  Qualitative Judgement

For qualitative risks:

- Use a **structured checklist** or comparative case review
- Reference similar risks with known impact
- Involve subject matter experts in protocol governance, security, legal, etc.

##  Example Output

Each assessment must reference the corresponding risk ID to maintain traceability and version control.

```yaml
id: A:DECREASING_YIELD
title: Assessment for Decreasing Yield Risk
type: Assessment
version: 1.0
date: 2025-05-29
riskId: R:DECREASING_YIELD
assessedBy: Community Analyst Team
severity: MEDIUM
likelihood: LIKELY
persistence: PERSISTENT
indicatorWeights:
  - id: I:LENDING_APY_TREND
    weight: 1.0
    threshold: "-5%"
    affects:
      LIKELIHOOD: INCREASE
      SEVERITY: INCREASE
    timeframe: "30d"
    description: "Declining APY trends indicate reduced protocol attractiveness"
  - id: I:UTILIZATION_RATIO
    weight: 0.6
    threshold: "85%"
    affects:
      LIKELIHOOD: INCREASE
      PERSISTENCE: INCREASE
    timeframe: "24h"
    description: "High utilization can lead to liquidity constraints and yield pressure"
notes: >
  Yield erosion is already observable in Compound USDT position with 94% utilization.
  However, user migration is still low, indicating early-stage manifestation. 
  Risk is structural and recurring, requiring active rebalancing.
```

##  Usage Tips

- Document **why** a score was chosen, not just the score
- Review assessments **periodically** or when indicators change
- Always cross-link to **measures** that aim to reduce severity or likelihood
