# 🗂 Risk Categories

This file defines the eight core risk categories used throughout the Web3 Open Risk Framework.  
Each risk must be assigned exactly one category. The goal is to maintain clarity, comparability, and structural consistency across all risk entries.


## I. Market & Financial

```FINANCIAL```
Risks related to price movements, volatility, liquidity shortages, stablecoin depegging, or yield erosion.

**Examples:**
- Volatile asset prices leading to collateral shortfalls  
- Liquidity crunch during market crashes  
- Decline in real yield due to inflation or dilution
- Flash loan-driven arbitrage draining protocol reserves
- Slippage during high-volatility events impacting exit strategies
- Devaluation of collateral asset in overcollateralized loans
- Unsustainable high APY due to reward farming dilution


## II. Intermediary & Dependency

```DEPENDENCY```
Risks caused by reliance on third-party services or infrastructures such as bridges, oracles, custodians, or RPC providers.

**Examples:**
- Oracle manipulation  
- Bridge failure  
- RPC outage affecting dApp availability
- Failure of token price feed on a DEX aggregator
- Indexer downtime affecting portfolio dApp functionality
- Custodian breach exposing institutional wallet assets
- Centralized stablecoin blacklist rendering user funds inaccessible


## III. Blockchain & Network

```TECHNICAL```
Risks originating from the underlying base layer or consensus mechanism, including validator behavior or network instability.

**Examples:**
- Consensus failure or chain halt  
- L2 sequencer downtime  
- Validator centralization
- Chain reorg causing double spend or invalid transaction history
- Congestion on Ethereum L1 delaying critical contract execution
- Cross-chain messaging protocol vulnerability
- Hard fork incompatibility causing client desynchronization


## IV. Application & Interface

```APPLICATION```
Risks introduced by the user-facing application layer including wallets, frontends, or browser extensions.

**Examples:**
- Wallet misbehavior (e.g. blind signing)  
- UI bugs that misrepresent data  
- Frontend outage or DNS hijack
- Mismatched token icons leading to user confusion
- Auto-approval UI features that bypass user intent
- Localization bugs leading to misinterpretation in other languages
- Mobile wallet update breaking compatibility with older dApps


## V. Organizational & Governance

```ORGANIZATIONAL```
Risks tied to team structure, DAO operations, unclear responsibilities, governance dysfunction, or process failures.

**Examples:**
- DAO vote manipulation  
- Unclear upgrade authority  
- Core team departure
- Voting apathy leading to governance capture by a minority
- Treasury mismanagement resulting in protocol insolvency
- Legal entity behind the DAO being dissolved without process
- Misalignment between token holders and core team incentives


## VI. Smart Contract Logic

```CONTRACT```
Risks inherent in smart contract code or upgrade mechanisms, including logic flaws, proxy patterns, or admin controls.

**Examples:**
- Upgradable proxy logic error  
- Backdoor admin function  
- Insufficient test coverage
- Rounding error causing funds to be locked permanently
- Reentrancy attack on lending protocol
- Unchecked external call enabling DoS vector
- Misconfigured time-lock leading to upgrade without delay


## VII. User Handling & Behavior

```HUMAN_ERROR```
Risks resulting from user mistakes or misbehavior, including key loss, phishing, insecure environments, or operational errors.

**Examples:**
- Signing malicious transactions  
- Losing recovery phrase  
- Using dApps with compromised devices
- Copy-pasting wrong recipient address
- Using the wrong blockchain network (e.g., sending ETH on BSC)
- Approving unlimited token spend for a malicious contract
- Failing to revoke access after using DeFi protocol


## VIII. Compliance & Legal

```COMPLIANCE```
Risks related to legal uncertainty, regulatory enforcement, KYC/AML exposure, sanctions, or DAO liability.

**Examples:**
- DAO unintentionally providing a regulated financial service  
- Jurisdictional conflict affecting token legality  
- Token blocked due to sanctions
- Frontend geoblocking bypassable via VPN, leading to legal exposure
- Tokens considered unregistered securities under local law
- AML requirements triggered by large token swaps
