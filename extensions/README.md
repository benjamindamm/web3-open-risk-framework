# Regulatory Extensions

This directory contains modular regulatory extensions for the Web3 Risk Framework. Each extension provides jurisdiction-specific compliance capabilities while maintaining the framework's core structure.

## Extension Architecture

Extensions follow a consistent pattern:

- **Non-intrusive**: Core framework remains unchanged
- **Optional**: Extension fields are optional additions
- **Extensible**: Multiple jurisdictions can coexist
- **Backward compatible**: Existing risks work without modifications

## Available Extensions

### Swiss FIDLEG Extension
- **Location**: [`fidleg/`](./fidleg/)
- **Purpose**: Swiss Financial Services Act (FIDLEG) compliance
- **Schema**: Extends risk, indicator, and measure schemas with Swiss regulatory fields
- **Documentation**: Complete guide to Swiss regulatory compliance

## Adding New Extensions

To add a new regulatory extension:

1. **Create extension directory**: `module/extensions/{jurisdiction}/`
2. **Define schema extensions**: Extend JSON schemas with jurisdiction-specific fields
3. **Document the extension**: Create comprehensive documentation
4. **Update this README**: Add the new extension to the list

## Extension Pattern

```json
{
  "regulatoryExtensions": {
    "fidleg": {
      "articleReference": "FIDLEG_Art24",
      "regulatoryClassification": "CUSTOMER_PROTECTION",
      "complianceRequirement": "MANDATORY",
      "riskLevel": "HIGH"
    }
  }
}
```

## Benefits

- **Modular Design**: Each jurisdiction can have its own extension
- **Framework Integrity**: Core framework remains unchanged
- **Compliance Support**: Structured approach to regulatory requirements
- **Future-Proof**: Easy to add new jurisdictions and regulations

## Contributing

When contributing new extensions:

- Follow the established pattern
- Maintain backward compatibility
- Provide comprehensive documentation
- Include implementation examples
- Test with existing risk catalogues
