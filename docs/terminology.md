#  Terminology

This glossary provides **quick reference definitions** for key terms used across the Web3 Open Risk Framework. 

**Purpose:** Serve as a shared reference for contributors, tool integrators, and analysts who need to understand terminology without diving into detailed documentation.

**Focus:** Concise definitions with Web3 context - not comprehensive explanations (those are in dedicated files like `risk.md`, `categories.md`, etc.).

##  Core Concepts (Quick Reference)

| Term | Definition | Example |
|------|------------|---------|
| **Risk** | A potential event that could negatively impact investment objectives | Smart contract exploit, oracle manipulation |
| **Indicator** | A measurable signal that helps detect risk activation | Price volatility > 20%, TVL drop > 50% |
| **Measure** | An action to mitigate or reduce a risk | Diversification, insurance, monitoring |
| **Owner** | Entity responsible for managing a risk | Investor, Protocol Team, DeFi User |
| **Scope** | Context where a risk becomes relevant | [ASSET], [TRADE], [APPLICATION] |
| **Objective** | Investment aspect that can be impacted | [VALUE], [YIELD], [TRUST], [ACCESS] |

<!-- PAGEBREAK -->

##  Risk Types & Categories

### Risk Types
| Type | Definition | Web3 Context |
|------|------------|--------------|
| **[QUALITATIVE]** | Cannot be measured with hard data | Governance quality, team reputation |
| **[QUANTITATIVE]** | Can be monitored using metrics | Price volatility, liquidity ratios |
| **[HYBRID]** | Combines both approaches | Smart contract risk assessment |

### Risk Categories
| Category | Definition | Web3 Focus |
|----------|------------|------------|
| **[FINANCIAL]** | Market and monetary risks | 24/7 markets, programmatic execution |
| **[DEPENDENCY]** | External service reliance | Non-negotiated protocol interfaces |
| **[TECHNICAL]** | Infrastructure and network risks | Transparent vs. hidden systems |
| **[APPLICATION]** | Interface and user experience | "Your keys, your crypto" principle |
| **[ORGANIZATIONAL]** | Team and governance risks | Zero-trust environment |
| **[CONTRACT]** | Smart contract logic risks | Immutable code, public scrutiny |
| **[HUMAN_ERROR]** | User and operator mistakes | No institutional safeguards |
| **[COMPLIANCE]** | Regulatory and legal risks | Evolving frameworks, borderless nature |

<!-- HIDDEN -->
See [`categories.md`](./categories.md) for detailed explanations.
<!-- /HIDDEN -->

<!-- PAGEBREAK -->

##  Scopes & Objectives

### Scopes (When/Where Risks Apply)
| Scope | Definition | Web3 Context |
|-------|------------|--------------|
| **[TRADE]** | During transaction execution | Slippage, MEV, front-running |
| **[ASSET]** | Asset-specific risks | Token volatility, liquidity lock |
| **[APPLICATION]** | Interface and user interaction | Wallet security, frontend attacks |
| **[NETWORK]** | Blockchain infrastructure | Congestion, consensus attacks |
| **[GOVERNANCE]** | Decision-making processes | Vote manipulation, proposal spam |

> **Note:** Scopes enable dynamic risk filtering based on investor actions. When an investor performs a specific action (e.g., trading, staking, voting), only relevant risks for that context are surfaced. This creates a targeted, actionable risk management system that adapts to investor behavior rather than overwhelming them with all possible risks. 

<!-- PAGEBREAK -->

### Investment Objectives (What Can Be Impacted)
| Objective | Definition | Direction | Web3 Context |
|-----------|------------|-----------|--------------|
| **[VALUE]** | Monetary worth of assets | Decrease | Token price crash |
| **[YIELD]** | Ongoing returns (staking, farming) | Decrease | APY drop from exploit |
| **[COST]** | Transaction and operational expenses | Increase | Gas fee spikes |
| **[LIQUIDITY]** | Ability to exit quickly | Decrease | Pool drained, no buyers |
| **[TRUST]** | Perceived system reliability | Decrease | Governance manipulation |
| **[ACCESS]** | Asset mobility and control | Decrease | Funds frozen/seized |
| **[LOSS]** | Partial or full capital loss | Increase | Smart contract exploit |
| **[LEGAL_STATUS]** | Regulatory compliance | Decrease | Protocol deemed security |

> **Note:** Each objective has a desired direction (INCREASE/DECREASE) that determines whether a change is positive or negative. For example, [VALUE] should INCREASE (good), while [COST] should DECREASE (good). The "Direction" column shows the undesirable change - what happens when the risk materializes. This approach reveals a more practical perspective in reaching investment and business goals.

<!-- HIDDEN -->
See [`scopes.md`](./scopes.md) and [`objectives.md`](./objectives.md) for detailed explanations.
<!-- /HIDDEN -->

<!-- PAGEBREAK -->

##  Measures, Indicators & Owners

### Measures (Risk Mitigation Strategies)
| Measure Type | Definition | Web3 Context |
|--------------|-------------|--------------|
| **Diversification** | Spread risk across multiple assets/protocols | Multi-chain portfolio, different DeFi protocols |
| **Insurance** | Transfer risk to third party | Nexus Mutual, Cover Protocol |
| **Monitoring** | Early detection systems | Price alerts, TVL tracking |
| **Governance** | Community oversight mechanisms | Multi-sig, timelock contracts |

### Indicators (Risk Detection Signals)
| Indicator Type | Definition | Web3 Context |
|----------------|-------------|--------------|
| **Price-based** | Asset value fluctuations | Token price volatility |
| **Volume-based** | Trading activity metrics | DEX volume, liquidity depth |
| **Technical** | Infrastructure health | Network hash rate, node count |
| **Social** | Community sentiment | Governance participation |

<!-- PAGEBREAK -->

### Owners (Risk Responsibility)
| Owner | Definition | Web3 Context |
|-------|------------|--------------|
| **[INVESTOR]** | Portfolio-level risk management | Individual DeFi user |
| **[OPERATOR]** | Protocol operation and maintenance | Protocol team |
| **[TEAM]** | Project development and governance | Core development team |
| **[PROVIDER]** | Infrastructure and services | Oracle providers, validators |
| **[PARTICIPANT]** | Community engagement | Token holders, validators |

> **Note:** Owner assignment clarifies who can take action to prevent, mitigate, or respond to a risk. Not all risks can be influenced by investors - some require protocol teams, infrastructure providers, or governance participants to act. Yet it is crucial to know about all involved parties.

<!-- HIDDEN -->
See [`measure.md`](./measure.md), [`indicator.md`](./indicator.md), and [`owners.md`](./owners.md) for detailed explanations.
<!-- /HIDDEN -->

<!-- PAGEBREAK -->

##  Assessment & Risk Relationships

### Risk Assessment Framework
| Assessment Type | Definition | Web3 Context |
|-----------------|-------------|--------------|
| **Manual** | Expert-driven evaluation | Governance quality assessment |
| **Quantitative** | Indicator-based measurement | Price volatility thresholds |
| **Hybrid** | Combines both approaches | Smart contract audit + exploit history |

### Risk Relationships
| Relationship Type | Definition | Web3 Context |
|-------------------|-------------|--------------|
| **Meta Risk** | Higher-order risk aggregating multiple lower-level risks | "DeFi ecosystem collapse" |
| **Compound Risk** | Risk that materializes only under specific condition combinations | "Oracle failure + low liquidity" |
| **Correlated Risk** | Risks that tend to occur together | "Market crash + governance attack" |

### Risk Template Structure
Each risk file follows a standardized format:
- **YAML frontmatter**: Metadata (ID, category, type, scopes, owners, objectives)
- **Narrative sections**: Context, indicators, assessment, mitigation strategies
- **Cross-references**: Links to related risks, measures, and indicators

<!-- HIDDEN -->
See [`risk.md`](./risk.md) and [`assessment.md`](./assessment.md) for detailed explanations.
<!-- /HIDDEN -->

<!-- PAGEBREAK -->

##  Risk States & Implementation

### Risk Persistence Levels
| Persistence Level | Definition | Web3 Context |
|-------------------|------------|--------------|
| **[TEMPORARY]** | Short-term, event-driven risk | Network congestion during high activity |
| **[RECURRING]** | Periodic risk that returns | Governance proposal cycles |
| **[PERSISTENT]** | Long-term, structural risk | Centralized oracle dependency |

<!-- PAGEBREAK -->

### Risk Implementation Status
| Status | Definition | Web3 Context |
|--------|------------|--------------|
| **Actionable Risk** | Ready for implementation | "Price volatility > 20%" with alerts |
| **Structural Risk** | Inherent to protocol design | Centralized governance model |
| **Mitigated Risk** | Meaningfully reduced impact | Smart contract audit + insurance |

### Goal Direction
Each investment objective has a desired direction:
- **[INCREASE]**: Trust, yield, liquidity, access
- **[DECREASE]**: Cost, loss, dependency

<!-- HIDDEN -->
For framework philosophy, see [Framework Philosophy](./philosophy.md). For methodological details, see [Methodological Foundations](./methodology.md).
<!-- /HIDDEN -->
