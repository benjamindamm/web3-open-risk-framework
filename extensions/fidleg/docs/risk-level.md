# Risk Level

This document explains the `riskLevel` field used in FIDLEG-compliant files.

## What is riskLevel?

The `riskLevel` field indicates how serious a risk is for your business and clients. It helps prioritize which risks need the most attention and resources.

## Risk Level Options

### LOW
- **What it means**: Minimal impact on business or clients
- **When to use**: For minor risks with limited consequences
- **Examples**: Minor UI issues, low-impact technical problems
- **Action required**: Standard monitoring and basic controls

### MEDIUM
- **What it means**: Moderate impact requiring attention
- **When to use**: For risks that could cause some problems
- **Examples**: Moderate technical issues, standard operational risks
- **Action required**: Enhanced monitoring and controls

### HIGH
- **What it means**: Significant impact requiring immediate attention
- **When to use**: For serious risks that could cause major problems
- **Examples**: Significant technical failures, major operational risks
- **Action required**: Strong controls and regular monitoring

### CRITICAL
- **What it means**: Maximum impact requiring immediate action
- **When to use**: For risks that could cause severe damage
- **Examples**: Security breaches, client fund loss, regulatory violations
- **Action required**: Maximum controls and continuous monitoring

## How to Choose the Right Level

### Ask These Questions:
1. **What happens if this risk occurs?**
   - Minor inconvenience → LOW
   - Some problems → MEDIUM
   - Major problems → HIGH
   - Severe damage → CRITICAL

2. **How quickly do we need to respond?**
   - Can wait → LOW/MEDIUM
   - Need quick response → HIGH
   - Immediate response → CRITICAL

3. **What's the impact on clients?**
   - Minor impact → LOW/MEDIUM
   - Significant impact → HIGH
   - Severe impact → CRITICAL

## Examples

### Technical Risk
```yaml
regulatoryExtensions:
  fidleg:
    riskLevel: "CRITICAL"  # Admin key compromise
```

### Operational Risk
```yaml
regulatoryExtensions:
  fidleg:
    riskLevel: "HIGH"  # System downtime
```

### Compliance Risk
```yaml
regulatoryExtensions:
  fidleg:
    riskLevel: "MEDIUM"  # Documentation gaps
```

### Minor Risk
```yaml
regulatoryExtensions:
  fidleg:
    riskLevel: "LOW"  # UI improvements
```

## Risk Level Guidelines

### LOW Risks
- Standard monitoring sufficient
- Basic controls adequate
- Regular review cycles
- Minimal resource allocation

### MEDIUM Risks
- Enhanced monitoring required
- Stronger controls needed
- More frequent reviews
- Moderate resource allocation

### HIGH Risks
- Continuous monitoring required
- Strong controls essential
- Frequent reviews necessary
- Significant resource allocation

### CRITICAL Risks
- Real-time monitoring required
- Maximum controls essential
- Daily reviews necessary
- Priority resource allocation

## Important Notes

- Risk levels help prioritize resources
- Higher levels require more attention
- Choose based on potential impact
- Review and update regularly
- Consider both business and client impact
