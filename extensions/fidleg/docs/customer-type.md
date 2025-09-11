# Customer Type

This document explains the `customerType` field used in FIDLEG-compliant files.

## What is customerType?

The `customerType` field specifies which type of customers a risk, indicator, or measure applies to. Swiss law treats different customer types differently, so this helps ensure appropriate protection levels.

## Customer Type Options

### retail
- **What it means**: Individual consumers, non-professional clients
- **Protection level**: Highest protection required
- **When to use**: For individual customers, small investors
- **Requirements**: Enhanced protection, simplified information, higher thresholds

### professional
- **What it means**: Sophisticated clients, institutional investors
- **Protection level**: Standard protection sufficient
- **When to use**: For experienced investors, institutions
- **Requirements**: Standard protection, detailed information, lower thresholds

### both
- **What it means**: Applies to all customer types
- **Protection level**: Must meet highest requirements
- **When to use**: For universal risks or measures
- **Requirements**: Must satisfy both retail and professional standards

## How to Choose the Right Type

### For Retail Customers Only
- Individual investors
- Small amounts
- Basic knowledge
- Need maximum protection

```yaml
applicability:
  customerType: "retail"
```

### For Professional Customers Only
- Institutional investors
- Large amounts
- Sophisticated knowledge
- Standard protection sufficient

```yaml
applicability:
  customerType: "professional"
```

### For All Customers
- Universal risks
- System-wide measures
- Must work for everyone

```yaml
applicability:
  customerType: "both"
```

## Examples

### Risk Example - Retail Only
```yaml
regulatoryExtensions:
  fidleg:
    applicability:
      customerType: "retail"  # Customer protection risk
```

### Risk Example - Professional Only
```yaml
regulatoryExtensions:
  fidleg:
    applicability:
      customerType: "professional"  # Institutional trading risk
```

### Risk Example - All Customers
```yaml
regulatoryExtensions:
  fidleg:
    applicability:
      customerType: "both"  # System security risk
```

## Protection Requirements

### Retail Customers
- **Higher thresholds**: More protection required
- **Simplified information**: Easy to understand
- **Enhanced monitoring**: More frequent checks
- **Stronger controls**: Maximum protection

### Professional Customers
- **Lower thresholds**: Standard protection
- **Detailed information**: Comprehensive data
- **Standard monitoring**: Regular checks
- **Standard controls**: Adequate protection

### Both Customer Types
- **Highest thresholds**: Must meet retail requirements
- **Comprehensive information**: Must satisfy both types
- **Enhanced monitoring**: Must meet retail standards
- **Strongest controls**: Must protect both types

## Important Notes

- Retail customers need maximum protection
- Professional customers can handle more risk
- "Both" means meeting the highest standards
- Choose based on who uses your service
- Consider the sophistication of your customers
