# 🧮 Risk Types

This file defines the structural **type** of a risk.  
The risk type determines how the risk can be assessed, monitored, or mitigated – and whether it can be connected to hard data or only understood through reasoning.

Each risk in the catalog must declare exactly one type:

## `QUANTITATIVE` — Data-Driven & Measurable

Risks that can be evaluated using numeric indicators, thresholds, or on-chain metrics.  
They are observable, trackable, and often automatable.  
Quantitative risks can directly define numeric thresholds and trigger actions automatically without requiring additional manual interpretation.

**Examples:**
- Stablecoin depeg measured by price deviation  
- Protocol TVL drop below safety threshold  
- Excessive borrow usage ratio  

**Usage:**  
- Suitable for alert systems and dashboards  
- Can be linked to live data feeds  
- Thresholds can trigger escalation or mitigation logic  
- Numeric thresholds clearly defined (e.g., TVL below X triggers alert)

## `QUALITATIVE` — Structural & Behavioral

Risks that cannot be reliably measured using hard data.  
They often involve design flaws, human behavior, governance dynamics, or legal uncertainty.  
Qualitative risks must always be assessed in relation to other risks or situational context; they cannot be meaningfully represented by numeric thresholds alone. They require manual judgment, contextual understanding, and comparative assessment (A > B).

**Examples:**
- Unclear upgrade process  
- Overreliance on a single dev team  
- Absence of legal clarity for protocol operations  

**Usage:**  
- Requires human judgment or expert interpretation  
- Often static or slowly evolving  
- Must be evaluated manually in comparative or relational contexts  
- Suitable for onboarding, documentation, and due diligence  

## `HYBRID` — Mixed Evaluation

Risks that have both measurable and structural components.  
They involve numeric indicators but cannot be fully reduced to quantitative metrics alone. Hybrid risks can partially be represented through numeric thresholds but still require contextual or expert judgment for a complete assessment.

**Examples:**
- Validator centralization (measurable via node data, but implications are structural)  
- Governance failure (measurable activity drop, but real impact is behavioral)  
- Oracle delay (response time is measurable, trust implications are not)  

**Usage:**  
- Useful for scoring or tiered classification  
- Numeric thresholds provide initial assessment, but full evaluation requires manual review  
- Can evolve from qualitative to quantitative as better data becomes available  
- Often relevant for escalation thresholds with a fallback to manual review

## 📌 **Choosing the Correct Risk Type**

Use this simple decision framework:

- **Quantitative**:  
  Clearly measurable numeric indicators and thresholds exist. Risks can trigger automated actions.

- **Hybrid**:  
  Numeric indicators exist but full evaluation requires additional manual or contextual assessment.

- **Qualitative**:  
  No meaningful numeric thresholds; assessment relies entirely on expert judgment and comparative evaluation.

Each risk catalog entry must declare one of the three values above in the `RiskType` field.  
This allows downstream systems (UIs, dashboards, governance platforms) to handle risks accordingly.
