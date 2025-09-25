#  Risk Categories

This file defines the eight core risk categories used throughout the Web3 Open Risk Framework.  
Each risk must be assigned exactly one category. The goal is to maintain clarity, comparability, and structural consistency across all risk entries.


## I. Market & Financial Risks

[FINANCIAL]

Risks related to price movements, volatility, liquidity shortages, stablecoin depegging, or yield erosion.

**Examples:**
- Volatile asset prices leading to collateral shortfalls  
- Liquidity crunch during market crashes  
- Decline in real yield due to inflation or dilution
- Flash loan-driven arbitrage draining protocol reserves
- Slippage during high-volatility events impacting exit strategies
- Devaluation of collateral asset in overcollateralized loans
- Unsustainable high APY due to reward farming dilution

> **Note:** Unlike traditional finance, Web3 financial risks are amplified by programmatic execution, 24/7 markets, and composable protocols where single points of failure can cascade across multiple systems simultaneously. Similar to traditional finance's "financial lego" structures, the layered nature of Web3 protocols creates cascading market risks where failures in one layer can propagate through interconnected systems.

<!-- PAGEBREAK -->

## II. Intermediary & Dependency Risks

[DEPENDENCY]

Risks caused by reliance on third-party services or infrastructures such as bridges, oracles, custodians, or RPC providers.

**Examples:**
- Oracle manipulation  
- Bridge failure  
- RPC outage affecting dApp availability
- Failure of token price feed on a DEX aggregator
- Indexer downtime affecting portfolio dApp functionality
- Custodian breach exposing institutional wallet assets
- Centralized stablecoin blacklist rendering user funds inaccessible

> **Note:** While dependency risks exist in traditional finance, Web3's architecture is built on non-negotiated interfaces between protocols. Standards evolve organically and cooperation exists, but critical infrastructure often operates in the background without formal agreements, creating systemic fragility when dependencies break. 

<!-- PAGEBREAK -->

## III. Blockchain & Network Risks

[TECHNICAL]

Risks originating from the underlying base layer or consensus mechanism, including validator behavior or network instability.

**Examples:**
- Consensus failure or chain halt  
- L2 sequencer downtime  
- Validator centralization
- Chain reorg causing double spend or invalid transaction history
- Congestion on Ethereum L1 delaying critical contract execution
- Cross-chain messaging protocol vulnerability
- Hard fork incompatibility causing client desynchronization

> **Note:** Unlike traditional finance where infrastructure remains hidden behind proprietary systems, Web3's transparency exposes all technical components to public scrutiny. While this openness enables innovation and trust through verifiability, it also creates attack surfaces where malicious actors can study and exploit vulnerabilities. The trade-off between transparency and security creates unique risk dynamics not present in traditional financial infrastructure.

<!-- PAGEBREAK -->

## IV. Application & Interface Risks

[APPLICATION]

Risks introduced by the user-facing application layer including wallets, frontends, or browser extensions.

**Examples:**
- Wallet misbehavior (e.g. blind signing)  
- UI bugs that misrepresent data  
- Frontend outage or DNS hijack
- Mismatched token icons leading to user confusion
- Auto-approval UI features that bypass user intent
- Localization bugs leading to misinterpretation in other languages
- Mobile wallet update breaking compatibility with older dApps

> **Note:** Web3's openness enables a vast ecosystem of applications and services, giving users unprecedented choice in tools and interfaces. However, this freedom comes with exponentially more attack surfaces compared to traditional finance. While users can select from numerous wallets, frontends, and browser extensions, each additional service introduces new vulnerabilities and liability questions. The decentralized nature means there's no central authority to regulate or certify these applications, creating a landscape where users must navigate complex security trade-offs independently.


<!-- PAGEBREAK -->

## V. Organizational & Governance Risks

[ORGANIZATIONAL]

Risks tied to team structure, DAO operations, unclear responsibilities, governance dysfunction, or process failures.

**Examples:**
- DAO vote manipulation  
- Unclear upgrade authority  
- Core team departure
- Voting apathy leading to governance capture by a minority
- Treasury mismanagement resulting in protocol insolvency
- Legal entity behind the DAO being dissolved without process
- Misalignment between token holders and core team incentives

> **Note:** Unfortunately, Web3 attracts not only benevolent actors but also malicious ones. While the technology enables zero-trust systems, this principle unfortunately extends to applications and organizations within Web3. Due diligence becomes more critical than ever, as there are no institutional safeguards or regulatory oversight to protect participants. However, this heightened risk environment also offers proportionally greater reward potential for those who navigate it successfully.

<!-- PAGEBREAK -->

## VI. Smart Contract Logic Risks

[CONTRACT]

Risks inherent in smart contract code or upgrade mechanisms, including logic flaws, proxy patterns, or admin controls.

**Examples:**
- Upgradable proxy logic error  
- Backdoor admin function  
- Insufficient test coverage
- Rounding error causing funds to be locked permanently
- Reentrancy attack on lending protocol
- Unchecked external call enabling DoS vector
- Misconfigured time-lock leading to upgrade without delay

> **Note:** Smart contracts represent both a blessing and a curse. Open source code and transparent contracts enable unprecedented verifiability and trust, but their complexity means only specialists can properly analyze them. This creates a critical gap: while the code is publicly available, most users lack the expertise to evaluate its security. Smart contracts are inherently insecure when built with insufficient rigor, yet their immutable nature means flaws cannot be easily patched once deployed.

<!-- PAGEBREAK -->

## VII. User Handling & Behavior Risks

[HUMAN_ERROR]

Risks resulting from user mistakes or misbehavior, including key loss, phishing, insecure environments, or operational errors.

**Examples:**
- Signing malicious transactions  
- Losing recovery phrase  
- Using dApps with compromised devices
- Copy-pasting wrong recipient address
- Using the wrong blockchain network (e.g., sending ETH on BSC)
- Approving unlimited token spend for a malicious contract
- Failing to revoke access after using DeFi protocol

> **Note:** While traditional financial portals also experience user interface errors, these can often be mitigated through customer support, transaction reversals, or institutional safeguards. In Web3, the principle of "your keys, your crypto" means users bear full responsibility for their actions. This fundamental shift from institutional protection to individual responsibility, while empowering, creates irreversible consequences that may seem trivial at first glance but can result in total loss of assets.

<!-- PAGEBREAK -->

## VIII. Compliance & Legal Risks

[COMPLIANCE]

Risks related to legal uncertainty, regulatory enforcement, KYC/AML exposure, sanctions, or DAO liability.

**Examples:**
- DAO unintentionally providing a regulated financial service  
- Jurisdictional conflict affecting token legality  
- Token blocked due to sanctions
- Frontend geoblocking bypassable via VPN, leading to legal exposure
- Tokens considered unregistered securities under local law
- AML requirements triggered by large token swaps

> **Note:** What may initially appear as an advantage—unrestricted, unregulated access—often creates more problems than benefits in practice. This category is particularly critical because regulatory frameworks are still evolving, creating a moving target for compliance. The borderless nature of Web3 conflicts with jurisdiction-specific regulations, while the pseudonymous nature of blockchain transactions clashes with traditional KYC/AML requirements. Participants often underestimate these risks until enforcement actions occur, at which point the consequences can be severe and irreversible.

<!-- HIDDEN -->
For complete terminology, see [Terminology](./terminology.md). For investment objectives, see [Investment Objectives](./objectives.md).
<!-- /HIDDEN -->
