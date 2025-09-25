#  Methodological Foundations

This document explains **how** the Web3 Open Risk Framework implements risk management principles, drawing on established standards while adapting them for decentralized systems.

##  Framework Structure

Our methodology balances two essential needs:

- **Structure** – enables comparability, ownership, and actionability across diverse protocols
- **Flexibility** – reflects the dynamic, modular, and permissionless nature of Web3

This dual approach ensures the framework works for both institutional compliance and decentralized innovation.


##  ISO 31000 – Risk Management Principles

| ISO 31000 Principle                        | Applied How?                                               |
|-------------------------------------------|-------------------------------------------------------------|
| Establishing the context                  | `Context` section in each risk definition                  |
| Risk identification                       | Catalog of risks structured by `category`, `scope`, `type` |
| Risk analysis and evaluation              | `Assessment`, supported by `Indicators` and `Investment Objectives` |
| Risk treatment (mitigation)               | Linked `Measures` per risk                                 |
| Communication and consultation            | Markdown format allows shared, versioned documentation     |
| Monitoring and review                     | Indicator weighting enables continuous assessment updates  |

<!-- PAGEBREAK -->

##  COSO ERM – Enterprise Risk Management Framework

| COSO Element                    | Applied How?                                                  |
|--------------------------------|---------------------------------------------------------------|
| Governance & culture           | `Risk Owner Model` assigns layered accountability             |
| Strategy and objective-setting | `Investment Objective Model` ties risks to investor priorities   |
| Performance and response       | Measures linked to each risk, supporting proactive mitigation |
| Information & communication    | Human-readable and machine-readable templates (Markdown/YAML) |
| Review and revision            | Risks are version-controlled and adaptable                    |


##  Solvency II – Risk Quantification & Capital Relevance

| Solvency II Element                 | Applied How?                                                   |
|------------------------------------|----------------------------------------------------------------|
| Use of quantitative thresholds     | `Indicators` (e.g., Utilization Ratio, APY Trend)               |
| Scenario-based risk evaluation     | Severity/Likelihood/Persistence model in `Assessment`          |
| Risk aggregation and diversification | Can be modeled via Excel correlation overlays                  |
| Capital exposure & risk profiles | `Objectives` include value, yield, cost, and liquidity, as defined in the objective model |

<!-- PAGEBREAK -->

##  Notes on Adaptation

While these standards are rooted in corporate or regulatory environments, we adapt them for:

- **Transparency over bureaucracy**
- **Decentralized ownership over hierarchical accountability**
- **Observability and composability over static compliance reports**

Our framework is designed to be:

- Actionable for developers and investors
- Verifiable for analysts and dashboards
- Extendable for DAOs, funds, and protocol teams


##  Summary

This framework is not a formal translation of ISO, COSO, or Solvency II – but a pragmatic distillation of the parts that matter for operational and strategic decisions in Web3.

By grounding our approach in familiar structures, we create a shared language between risk professionals and crypto-native builders.

<!-- HIDDEN -->
For framework philosophy, see [Framework Philosophy](./philosophy.md). For complete terminology, see [Terminology](./terminology.md).
<!-- /HIDDEN -->

