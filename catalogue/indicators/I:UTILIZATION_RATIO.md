# Utilization Ratio

```yaml
id: I:UTILIZATION_RATIO
title: Utilization Ratio
type: Indicator
version: "1.0"
lastUpdate: 2025-05-28
```

## 🧠 Description

This indicator measures the proportion of supplied liquidity that is currently borrowed in a lending pool. It serves as a real-time gauge for capital efficiency and protocol stress.

A high utilization ratio can indicate:

- Capital scarcity (less liquidity left to borrow)
- Higher interest rate pressure for borrowers
- Increased systemic risk in case of liquidation waves or rapid withdrawals

A low ratio may imply:

- Inefficient capital usage
- Lower returns for lenders

## 📋 Preconditions

- Access to real-time lending pool data (on-chain or via subgraph)
- Reliable separation between supplied and borrowed values
- Pool must be large enough to exhibit meaningful utilization dynamics
- Minimum pool size threshold to avoid noise from small pools

## ⚙️ Methodology

1. **Data Retrieval**
Collect the following values for a given lending pool:

- Total supplied assets
- Total borrowed assets

2. **Formula**  
Utilization Ratio = (Total Borrowed / Total Supplied) × 100

3. **Aggregation**  
Use time-based aggregation (e.g., hourly snapshots over 7 days) for trend analysis

4. **Optional Filtering**  
Exclude idle pools or test markets. Focus on high-volume or systemically relevant assets (e.g., ETH, USDC)

5. **Trend Analysis**
Calculate moving averages and identify utilization patterns over time

## ⚠️ Limitations

- **Pool Size:** Small pools may show misleading utilization patterns
- **Asset Specificity:** Different assets have different natural utilization levels
- **Market Conditions:** Utilization can change rapidly during market stress
- **Protocol Differences:** Utilization thresholds vary between protocols
- **Data Quality:** Relies on accurate on-chain data feeds

## 📊 Assessment

The assessment classifies the current utilization level into risk bands.  
The higher the utilization, the more exposed the system is to liquidity stress and sudden borrower activity.

| Risk Level     | Threshold                | Description                                                       |
|----------------|--------------------------|-------------------------------------------------------------------|
| Very High (5)  | ≥ 95%                    | Critical state: very little supply left, emergency risk level     |
| High (4)       | 85–94%                   | High pressure, potential for interest rate spikes or instability  |
| Medium (3)     | 60–84%                   | Normal but elevated utilization                                   |
| Low (2)        | 30–59%                   | Healthy capital availability and usage                            |
| Very Low (1)   | < 30%                    | Under-utilized, low yield potential                               |

## ⚙️ Standard Configurations

| Profile       | 5 – Very High | 4 – High | 3 – Medium | 2 – Low | 1 – Very Low |
|---------------|---------------|----------|------------|---------|--------------|
| Conservative  | > 85%         | 70–85%   | 50–70%     | 30–50%  | < 30%        |
| Moderate      | > 90%         | 75–90%   | 55–75%     | 35–55%  | < 35%        |
| Aggressive    | > 95%         | 85–95%   | 60–85%     | 40–60%  | < 40%        |

## 🧭 Usage Guidance

This indicator is useful for:

- Identifying liquidity risk during market stress events
- Adjusting interest rate models based on utilization pressure
- Triggering warnings or preventive measures for high-risk pools
- Calibrating investment strategies based on capital efficiency
- Monitoring protocol health and market dynamics

Typical consumers of this indicator include:

- Lending protocol developers
- DeFi portfolio managers
- Risk dashboards
- Automated monitoring systems

## 🧱 Related Risks

...