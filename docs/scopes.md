# 🔁 Scope of Action

This section defines **Scopes of Action** – a tagging system that links risks to concrete user or system actions.  
Scopes help dynamically filter and surface relevant risks depending on what the user is doing or what context a system module is operating in.

Whenever a user initiates an action (e.g., opens a wallet, signs a transaction, or initiates a trade), a specific subset of risks becomes **situationally relevant**.  
This system allows for targeted monitoring, guidance, and alerting – without overwhelming the user with irrelevant noise.

---

## 🧭 Why Use Scopes?

Not every risk is always relevant. This framework allows you to:

- Attach contextual tags to risks based on **when they become visible or active**
- Trigger indicators, warnings, or guidance during **specific actions**
- Provide developers and users with **context-aware risk insights**
- Filter dashboards or logs based on **user behavior or application flows**

---

## 🎛 Scope Tags (Enum)

Each risk can be tagged with one or more of the following scopes:

| Enum         | Description |
|--------------|-------------|
| `APPLICATION` | Applies when a user interacts with **frontends, dashboards, or app interfaces**. This includes risks from UI misrepresentation, outdated contract addresses, or broken UX flows. Use this tag when the **interface or integration** is the source of the risk. |
| `ASSET`       | Applies when the **nature of the asset itself** introduces risk — regardless of how it is used. This includes rebasing tokens, locked supply, vesting schedules, inflation mechanics, or compliance-sensitive attributes. Use when **holding the asset alone** creates exposure. |
| `NETWORK`     | Use when the **underlying protocol or blockchain infrastructure** causes risk. This includes consensus issues, chain halts, sequencer failures, or reorgs. Applies when the issue is rooted in **protocol layer behavior**. |
| `TRADE`       | Applies when a user **swaps or exchanges assets**. Includes risks from slippage, failed execution, front-running, or price impact. Use this tag when **executing a trade or swap** is the main trigger. |
| `CUSTODY`     | Applies when a user **stores or manages private keys, seed phrases, or custody setups**. Includes loss of access, device compromise, delegation failures, or third-party insolvency. Use when the **secure storage or handling of assets** is the source of risk. |
| `GOVERNANCE`  | Applies when a user **participates in protocol governance or DAO voting**. Includes risks from vote delegation, quorum manipulation, or governance capture. Use when **voting or proposal interaction** is the trigger. |

---

## 🧪 Examples

| User Action | Related Scope |
|-------------|--------------------|
| Use a dApp to interact with a protocol → | `APPLICATION` |
| Hold an inflationary or vesting-based governance token → | `ASSET` |
| Swap ETH for stETH using a DEX → | `TRADE` |
| Store a seed phrase on a USB stick → | `CUSTODY` |
| Stake tokens directly with a validator node → | `NETWORK` |
| Vote on a DAO proposal via a governance portal → | `GOVERNANCE` |
| Assets become inaccessible due to Layer 2 sequencer halt → | `NETWORK`, `ASSET` |

---

## 🧰 Usage Notes

- Scopes are **not exclusive**. A risk can belong to multiple scopes.
- The goal is **situational clarity**: what becomes relevant **now**, given what the user is doing?
- Scopes are not a replacement for categories.  
  Categories describe **what** the risk is.  
  Scopes describe **when and where** it becomes actionable.

---

This model is especially useful in:

- Dynamic UIs with risk overlays or progressive disclosure  
- Decision engines filtering risks in context  
- Educational journeys for new users  
- Monitoring tools that track risk emergence by user flow
