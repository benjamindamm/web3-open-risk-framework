# Suspicious Patterns

This document explains the `suspiciousPatterns` field used in FIDLEG-compliant indicators.

## What are suspiciousPatterns?

Suspicious patterns are trading behaviors that might indicate illegal activities like market manipulation or money laundering. The system monitors for these patterns and reports them to Swiss authorities when detected.

## Pattern Types

### MEV (Maximal Extractable Value) Patterns

#### mev_arbitrage
- **What it is**: Extracting profit by manipulating transaction order
- **Why it's suspicious**: Can harm other traders
- **When to report**: MEV extraction > CHF 10,000
- **Example**: Front-running large trades

#### flash_loan_exploitation
- **What it is**: Using flash loans for profit without collateral
- **Why it's suspicious**: Can manipulate prices artificially
- **When to report**: Flash loan volume > CHF 100,000 in 1 hour
- **Example**: Arbitrage using borrowed funds

### Market Manipulation Patterns

#### wash_trading
- **What it is**: Fake trading to create artificial volume
- **Why it's suspicious**: Misleads other traders about market activity
- **When to report**: Coordinated trading > CHF 50,000 daily
- **Example**: Matching buy/sell orders from same entity

#### governance_manipulation
- **What it is**: Trying to control voting in governance systems
- **Why it's suspicious**: Can manipulate protocol decisions
- **When to report**: Governance token accumulation > CHF 25,000
- **Example**: Rapid token buying before votes

### Money Laundering Patterns

#### rapid_funds_movement
- **What it is**: Moving large amounts quickly between accounts
- **Why it's suspicious**: Could be hiding money source
- **When to report**: 3+ transactions > CHF 50,000 in 24 hours
- **Example**: Rapid transfers between wallets

#### unusual_timing
- **What it is**: Trading at unusual times (nights, holidays)
- **Why it's suspicious**: Could indicate automated or suspicious activity
- **When to report**: Multiple transactions outside business hours
- **Example**: Late night trading patterns

### Cross-Chain Patterns

#### cross_chain_arbitrage
- **What it is**: Profiting from price differences between blockchains
- **Why it's suspicious**: Can indicate market manipulation
- **When to report**: Cross-chain arbitrage > CHF 50,000 daily
- **Example**: Bridge arbitrage opportunities

#### concentrated_activity
- **What it is**: One entity controlling too much trading
- **Why it's suspicious**: Can manipulate market prices
- **When to report**: > 20% of daily volume from single source
- **Example**: Single wallet dominance

## How to Use

### For Transaction Monitoring
```yaml
suspiciousPatterns: ["rapid_funds_movement", "unusual_timing"]
```

### For Market Monitoring
```yaml
suspiciousPatterns: ["mev_arbitrage", "wash_trading"]
```

### For Comprehensive Monitoring
```yaml
suspiciousPatterns: ["mev_arbitrage", "wash_trading", "rapid_funds_movement"]
```

## Reporting Requirements

### Automatic Reporting
- System automatically detects patterns
- Reports sent to MROS (Money Laundering Reporting Office)
- Reports sent to FINMA for market abuse
- Timeline: Within 24 hours of detection

### What Gets Reported
- Pattern type detected
- Transaction amounts
- Time and date
- Affected accounts
- Risk assessment

## Examples

### Large Transaction Monitoring
```yaml
regulatoryExtensions:
  fidleg:
    suspiciousPatterns: ["rapid_funds_movement"]
    reportingThreshold: "CHF_100k"
```

### MEV Detection
```yaml
regulatoryExtensions:
  fidleg:
    suspiciousPatterns: ["mev_arbitrage", "flash_loan_exploitation"]
    regulatoryThreshold: "Any MEV activity"
```

### Comprehensive Monitoring
```yaml
regulatoryExtensions:
  fidleg:
    suspiciousPatterns: ["mev_arbitrage", "wash_trading", "rapid_funds_movement", "unusual_timing"]
```

## Important Notes

- Patterns are automatically detected
- Reports are sent to Swiss authorities
- Choose patterns relevant to your business
- More patterns = more comprehensive monitoring
- Consider false positive rates
