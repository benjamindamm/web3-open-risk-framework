# 📘 Terminology

This glossary defines key terms used across the Web3 Open Risk Framework. Clear and consistent terminology is essential for reliable documentation, data models, risk analysis, and communication.

This file should serve as a shared reference for contributors, tool integrators, and analysts.

## 📖 Glossary (Quick Reference)

**Risk:**  
A potential event or condition that could negatively impact objectives.

**Indicator:**  
A measurable metric or signal that helps detect or quantify a risk.

**Measure:**  
An action or strategy to mitigate or reduce a risk.

**Owner:**  
The person or entity responsible for managing a risk.

**Scope:**  
The area or context in which a risk is relevant (e.g., ASSET, APPLICATION).

**Likelihood:**  
The probability that a risk will occur.

**Financial Impact:**  
The potential financial loss or effect if a risk materializes.

**Persistence:**  
How long a risk remains relevant or active.

## 🔁 Risk

A potential event or condition that could lead to a negative impact on investment objectives. In this framework, a risk is always:

* Defined in its own Markdown file (`risk.md` template)
* Assigned a category, type, and one or more scopes
* Linked to relevant indicators, measures, and owners

## 🧮 Risk Type

Indicates how a risk can be understood or measured:

* **QUALITATIVE**: Cannot be measured with hard data; based on expert judgment or structural conditions (e.g. governance flaws)
* **QUANTITATIVE**: Can be monitored using metrics, thresholds, or time series (e.g. liquidity ratio, APY drop)
* **HYBRID**: Has both quantitative indicators and qualitative aspects

See [`types.md`](./types.md).

## 🗂 Risk Category

Specifies the **origin** of a risk. Categories help cluster similar risks and maintain structural clarity across entries.

Examples:

* `FINANCIAL`
* `TECHNICAL`
* `CONTRACT`
* `DEPENDENCY`
* `GOVERNANCE`

See [`categories.md`](./categories.md).

## 🔁 Scope of Action

Contextual tags that describe **where or when** a risk becomes relevant in a user or system action. Used in dashboards to show only situationally active risks.

Examples:

* `TRADE`
* `CUSTODY`
* `APPLICATION`
* `GOVERNANCE`

See [`scope.md`](./scope.md).

## 🎯 Investment Objective

The aspect of an investment that can be impacted by a risk. Each objective includes:

* The **direction** of impact (e.g. `DECREASE` trust)
* The **goal** (e.g. trust should ideally `INCREASE`)

Examples:

* `VALUE`
* `YIELD`
* `COST`
* `TRUST`
* `ACCESS`
* `LEGAL_STATUS`

See [`impact.md`](./impact.md).

## 🛠 Measure

A mitigation strategy that addresses one or more risks. Measures:

* Are defined in their own files
* Can be reused across multiple risks
* Can affect severity, likelihood, or persistence
* Are linked by ID (e.g. `M:HEDGING`)

See [`measure.md`](./measure.md).

## 📈 Indicator

A signal, metric, or behavioral pattern that helps detect risk activation. Indicators:

* Can be live or historical
* May use thresholds, ratios, or anomaly detection
* Are referenced in `risk.md` and `assessment` blocks

See [`indicator.md`](./indicator.md).

## 🧑‍💼 Owner

An entity or role with the power to mitigate or influence a risk.

Examples:

* `TEAM`
* `DAO_OPERATIONAL_TEAMS`
* `INFRASTRUCTURE_PROVIDER`

Used in risk entries to clarify accountability. See [`owners.md`](./owners.md).

## 🧾 Risk Template

A standardized Markdown format for defining and documenting risks.

Each risk file contains:

* YAML frontmatter with metadata
* Narrative sections for context, indicators, assessment, and mitigation

See [`risk.md`](./risk.md).

## 🧮 Assessment

A structured evaluation of a risk's severity, likelihood, and persistence.

Can be:

* Manual (expert-driven)
* Quantitative (using indicators)
* Hybrid (both)

Assessment entries use a fixed format and include justification notes. See [`assessment.md`](./assessment.md).

## 🧠 Meta Risk

A higher-order risk that aggregates or compounds the impact of multiple lower-level risks. Typically used for structural, systemic, or reputational risks.

May reference other risk IDs in the `relatedRisks` section.

## 🎭 Compound Risk

A risk that only materializes under specific combinations of conditions or triggers.

Can be expressed using indicator logic or scenario modeling.

## ⚠️ Scoring vs. Mapping

This framework **avoids black-box scoring**. Instead, it provides transparent, contextual mapping:

* Mapping = what can go wrong, where, and why
* Scoring = abstract number without explanation (discouraged)

Users may derive scores from mapped data – but they are not built-in.

## 🧁 Persistence

Part of risk assessment. Indicates how long or how often a risk can remain active:

* `TEMPORARY`
* `RECURRING`
* `PERSISTENT`

Used to guide response urgency and prioritization.

## 🔁 Goal

Defines the **desired direction** for an investment objective (e.g. `TRUST` should `INCREASE`).
Used to determine whether a change is positive or negative.

## 📦 Actionable Risk

A risk that has:

* Clear owners
* Linked indicators
* One or more measures

This label is used to prioritize implementation in dashboards or alerting systems.

## 🧪 Structural Risk

A risk that is inherent to the design or architecture of a protocol or product. Often persistent and not solvable by patches.

Examples:

* Weak governance
* Centralized oracles
* Hard-coded permissions

## ✅ Mitigated Risk

A risk for which the likelihood, severity, or persistence has been **meaningfully reduced** via implemented measures. Does not mean eliminated.

Must include:

* Updated assessment
* Linked measure(s)
* Verification status (optional)

> This file may evolve over time. Contributions welcome.
