#  Action - FIDLEG Extension

##  Purpose

The FIDLEG Action extension defines concrete, actionable compliance steps that financial service providers must take to comply with FIDLEG and GwG regulations. Actions are triggered by risk assessments, indicators, and measures.

##  Action Types

### Client Communication & Suitability

| Action Type | Description | Regulatory Context |
|-------------|-------------|-------------------|
| **[INFORM_CLIENT]** | Inform client about risks or changes | Art. 8-10 FIDLEG (Client protection) |
| **[REQUEST_ADDITIONAL_INFO_FROM_CLIENT]** | Request additional client information | Art. 8-10 FIDLEG (Due diligence) |
| **[RE_EVALUATE_SUITABILITY]** | Re-evaluate client suitability for products | Art. 8-10 FIDLEG (Suitability assessment) |
| **[RE_EVALUATE_APPROPRIATENESS]** | Re-evaluate product appropriateness for client | Art. 8-10 FIDLEG (Appropriateness assessment) |

<!-- PAGEBREAK -->

### Internal Processes

| Action Type | Description | Regulatory Context |
|-------------|-------------|-------------------|
| **[TRIGGER_INTERNAL_AUDIT]** | Initiate internal audit procedures | Internal compliance framework |
| **[INTERNAL_RISK_COMMITTEE_REVIEW]** | Risk committee review and decision | Art. 72 FIDLEG (Risk management) |
| **[UPDATE_RISK_PROFILE]** | Update client risk profile documentation | Art. 8-10 FIDLEG (Client categorization) |
| **[DOCUMENT_DECISION]** | Document compliance decision and rationale | GwG Art. 6 (Record keeping) |

### Regulatory Reporting & Product Management

| Action Type | Description | Regulatory Context |
|-------------|-------------|-------------------|
| **[REPORT_TO_FINMA]** | Report to Swiss financial regulator | Art. 142 FIDLEG (Market abuse reporting) |
| **[FILE_AML_REPORT_MROS]** | File AML report with MROS | GwG Art. 6 (AML reporting) |
| **[PRODUCT_HALT]** | Suspend or halt product access | Art. 72 FIDLEG (Product safety) |

<!-- PAGEBREAK -->

##  Action ID Format

**Pattern**: `ACTION:TYPE:CONTEXT`

### Examples:

| Action ID                                      | Type                      | Context                  | Description                                |
| ---------------------------------------------- | ------------------------- | ------------------------ | ------------------------------------------ |
| `ACTION:INFORM_CLIENT:MEV_RISK`                | [INFORM_CLIENT]           | [MEV_RISK]               | Inform client about MEV risks              |
| `ACTION:RE_EVALUATE_SUITABILITY:DEFI_PROTOCOL` | [RE_EVALUATE_SUITABILITY] | [DEFI_PROTOCOL]          | Re-evaluate suitability for DeFi protocol  |
| `ACTION:REPORT_TO_FINMA:SECURITY_BREACH`       | [REPORT_TO_FINMA]         | [SECURITY_BREACH]        | Report security breach to FINMA            |
| `ACTION:FILE_AML_REPORT:STRUCTURING_DETECTED`  | [FILE_AML_REPORT_MROS]    | [STRUCTURING_DETECTED]   | File AML report for structuring            |
| `ACTION:PRODUCT_HALT:CRITICAL_VULNERABILITY`   | [PRODUCT_HALT]            | [CRITICAL_VULNERABILITY] | Halt product due to critical vulnerability |

<!-- PAGEBREAK -->

##  Required Properties

- **actionId** - Unique identifier (ACTION:TYPE:CONTEXT format)
- **actionType** - Specific action type
- **relevantArticles** - FIDLEG/GwG articles
- **actionDescription** - Detailed action description
- **priority** - Urgency level
- **dueBy** - Completion timeline
- **responsibleRole** - Responsible internal roles

##  Priority Levels

| Priority       | Description                   | Execution Timeline     | Regulatory Impact                      |
| -------------- | ----------------------------- | ---------------------- | -------------------------------------- |
| **[CRITICAL]** | Immediate execution required  | Within 24 hours        | Potential regulatory breach if delayed |
| **[HIGH]**     | High urgency, quick execution | Within 48 hours        | Significant compliance risk            |
| **[MEDIUM]**   | Standard priority             | Within 5 business days | Standard compliance requirement        |
| **[LOW]**      | Low urgency, flexible timing  | Within 2 weeks         | Preventive compliance measure          |

<!-- PAGEBREAK -->

## ⏰ Due By Timelines

| Timeline                      | Description                            | Use Case                         | Documentation Required  |
| ----------------------------- | -------------------------------------- | -------------------------------- | ----------------------- |
| **[IMMEDIATELY]**             | Execute immediately                    | Critical security incidents      | Yes - incident report   |
| **[24_HOURS]**                | Complete within 24 hours               | High-priority regulatory matters | Yes - action log        |
| **[48_HOURS]**                | Complete within 48 hours               | Standard compliance actions      | Yes - decision record   |
| **[5_BUSINESS_DAYS]**         | Complete within 5 business days        | Routine compliance procedures    | Yes - procedure log     |
| **[ASAP_WITH_DOCUMENTATION]** | As soon as possible with documentation | Flexible timeline actions        | Yes - completion report |

##  Responsible Roles

| Role                     | Department              | Responsibilities                             | Authority Level             |
| ------------------------ | ----------------------- | -------------------------------------------- | --------------------------- |
| **[COMPLIANCE]**         | Compliance team         | Regulatory adherence, audit coordination     | High - can halt operations  |
| **[FRONT_OFFICE]**       | Client-facing staff     | Client communication, suitability assessment | Medium - client interaction |
| **[RISK_MANAGEMENT]**    | Risk management team    | Risk assessment, mitigation strategies       | High - risk decisions       |
| **[LEGAL]**              | Legal department        | Legal interpretation, regulatory guidance    | High - legal decisions      |
| **[PRODUCT_MANAGEMENT]** | Product management team | Product modifications, feature controls      | Medium - product decisions  |

<!-- PAGEBREAK -->

##  Impact Categories

| Impact Type                | Description                        | Client Notification | Regulatory Reporting |
| -------------------------- | ---------------------------------- | ------------------- | -------------------- |
| **[DIRECT_COMMUNICATION]** | Direct client interaction required | Immediate           | May be required      |
| **[INTERNAL_PROCESSING]**  | Internal process only              | Not required        | May be required      |
| **[NO_DIRECT_IMPACT]**     | No direct client impact            | Not required        | Not required         |

##  Key FIDLEG Articles

| Article       | Regulation | Title                                  | Action Relevance                           |
| ------------- | ---------- | -------------------------------------- | ------------------------------------------ |
| **Art. 72**   | FIDLEG     | Protocol security requirements         | Product safety, vulnerability management   |
| **Art. 142**  | FIDLEG     | Market abuse prevention                | Reporting obligations, suspicious activity |
| **Art. 8-10** | FIDLEG     | Client suitability and appropriateness | Client assessment, product matching        |
| **Art. 6**    | GwG        | Anti-money laundering measures         | AML reporting, due diligence               |

##  Implementation

Refer to example risk implementations for practical guidance on action structure and compliance workflows.

<!-- HIDDEN -->

##  Related Documentation

- [Assessment Documentation](./assessment.fidleg.md)
- [Risk Documentation](./risk.fidleg.md)
- [Indicator Documentation](./indicator.fidleg.md)
- [Measure Documentation](./measure.fidleg.md)

<!-- /HIDDEN -->
