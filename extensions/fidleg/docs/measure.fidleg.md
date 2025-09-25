#  Measure - FIDLEG Extension

##  Purpose

The FIDLEG Measure extension provides Swiss regulatory compliance measures for DeFi protocols. It defines regulatory requirements and triggers specific compliance actions when conditions are met.

##  FIDLEG Measure Categories

### Regulatory Requirements
- **[MANDATORY]** - Legally required by FIDLEG/GwG
- **[REGULATORY]** - Strongly recommended by regulators
- **[RECOMMENDED]** - Best practice recommendation
- **[OPTIONAL]** - Optional enhancement

### Impact Categories
- **[CLIENT_IMPACT]** - Direct impact on client relations
- **[REGULATOR_IMPACT]** - Regulatory reporting required
- **[OPERATIONAL_IMPACT]** - Internal operations affected
- **[REPUTATIONAL_IMPACT]** - Reputation at risk


##  Required Properties

- `relevantArticles` - FIDLEG/GwG articles
- `regulatoryRequirement` - Regulatory requirement level
- `fidlegActionTriggers` - Action triggers for this measure

##  Key FIDLEG Articles

- **Art. 72**: Protocol security requirements
- **Art. 142**: Market abuse prevention
- **Art. 8-10**: Client suitability and appropriateness
- **GwG Art. 6**: Anti-money laundering measures

##  Implementation

Refer to example risk implementations for practical guidance on measure structure and compliance workflows.

<!-- HIDDEN -->

##  Related Documentation

- [Action Documentation](./action.fidleg.md)
- [Assessment Documentation](./assessment.fidleg.md)
- [Risk Documentation](./risk.fidleg.md)
- [Indicator Documentation](./indicator.fidleg.md)

<!-- /HIDDEN -->