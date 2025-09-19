# 📈 Indicator Template Guide

This document defines the standard structure and purpose of each section used when creating a new risk indicator in the Web3 Open Risk Framework. Indicators serve as measurable signals that can be used to monitor, evaluate, and trigger risk-related assessments.

---

## 🧾 Header Metadata

Basic identifier and classification details.

- **ID**: A unique identifier for the indicator. Recommended format: `I:NAME` (e.g., `I:VOLATILITY`).
- **Type**: Always `Indicator`.
- **Title**: Clear and concise name of the indicator.
- **Last Update**: Date of the last revision (ISO format).
- **Version**: Incremental version number, starting from `0.1`.

Example:

```yaml
id: I:VOLATILITY
type: Indicator
title: Volatility
version: 0.1
lastUpdate: 2025-06-04

# Default threshold levels for scoring (optional but useful for UI and alerts)
thresholds:
  - level: 5
    label: VERY_HIGH
    operator: ">"
    value: 60
  - level: 4
    label: HIGH
    range: [40, 60]
  - level: 3
    label: MEDIUM
    range: [20, 40]
  - level: 2
    label: LOW
    range: [10, 20]
  - level: 1
    label: VERY_LOW
    operator: "<"
    value: 10

# Optional: standard config for different investor risk profiles
profiles:
  conservative:
    alertAbove: 40
  moderate:
    alertAbove: 50
  aggressive:
    alertAbove: 60
```

---

## Description

Explain what the indicator measures and why it is relevant. Clarify the risk dimension it addresses (e.g., market fluctuations, protocol instability, behavioral signals) and how it contributes to identifying or tracking a specific risk condition.

**Example:**
Measures the degree of price fluctuations over time. High volatility is often correlated with uncertainty, low liquidity, or manipulation. Useful for identifying unstable asset behavior or risk exposure in trading.

---

## 📋 Preconditions

Specify the conditions that must be met for this indicator to be meaningful or applicable.

Example:

- Minimum of 30 days of price data required
- Asset must be liquid and traded on at least two reputable exchanges
- Suitable benchmark (e.g., ETH or a sector index) should be defined for relative comparisons

---

## ⚙️ Methodology

Describe the step-by-step process for calculating the indicator. This section ensures reproducibility and transparency.

Example structure:

- Data Source: Pull historical price data from on-chain oracles or off-chain APIs (e.g., CoinGecko, Chainlink).
- Cleaning: Handle missing values, outliers, and ensure consistent time intervals.
- Return Calculation: Compute daily log returns from closing prices.
- Volatility Calculation: Calculate the standard deviation of returns.
- Annualization: Multiply by √252 to annualize daily volatility.
- Rolling Window: Apply a 30-day rolling average to smooth the signal.
- Benchmarking: Compare the asset's volatility to ETH or BTC as baseline.

Optional additions:

- Clustering: Identify volatility regimes (low vs. high) with thresholds.
- Charting: Include historical volatility chart for visual representation.

---

## ⚠️ Limitations

Describe key limitations and potential weaknesses of the indicator.

Structure:

- Data Quality: Susceptible to bad price feeds or oracle manipulation.
- Time Sensitivity: Lagging indicator; reacts to past events.
- Assumptions: Normal distribution of returns may not hold.
- Interpretation Risk: High volatility may indicate opportunity, not just risk.

---

## 📊 Assessment

Define how the indicator translates into a risk level using thresholds. Include suggested actions (strategies) and responsibilities.

| **Risk Level** | **Threshold**       | **Description**                                      | **Strategy**         | **Risk Owner**         |
|----------------|---------------------|------------------------------------------------------|----------------------|-------------------------|
| 5 – Very High  | Volatility > 60%    | Extreme fluctuations, significant uncertainty        | Avoid or Reduce      | Protocol Team / Investor |
| 4 – High       | 40% – 60%           | High volatility, increased exposure risk             | Reduce               | Investor                 |
| 3 – Medium     | 20% – 40%           | Moderate volatility, manageable but notable          | Monitor              | Investor / Platform      |
| 2 – Low        | 10% – 20%           | Low but noticeable fluctuations                      | Accept               | Investor                 |
| 1 – Very Low   | < 10%               | Very stable, minimal fluctuation                     | Accept               | Investor                 |

💡 **Note**: When this indicator is assigned to a risk, it carries 100% influence by default. You can link multiple indicators to a single risk, in which case weighting must be determined manually.

---

## ⚙️ Standard Configurations (optional)

These values define what each investor profile considers "acceptable" or "concerning" based on their risk appetite.

| **Profile**   | **Very High** | **High**  | **Medium** | **Low**   | **Very Low** |
|---------------|---------------|-----------|------------|-----------|--------------|
| Conservative  | > 40%         | 30 – 40%  | 20 – 30%   | 10 – 20%  | < 10%        |
| Moderate      | > 50%         | 40 – 50%  | 25 – 40%   | 15 – 25%  | < 15%        |
| Aggressive    | > 60%         | 50 – 60%  | 30 – 50%   | 20 – 30%  | < 20%        |

📝 *These profiles are examples only. Investors must define their own acceptable ranges based on objectives and constraints.*

---

## 🧭 Usage Guidance

- Indicators are reusable across risks, but relevance depends on context.
- Risks may link to one or more indicators, and each can be weighted differently.
- You may visualize this indicator in dashboards or alerts.
- Thresholds can be configured globally or per-investor using `Standard Configurations`.
- An indicator can trigger automated responses, but must always be paired with qualitative context for interpretation.

