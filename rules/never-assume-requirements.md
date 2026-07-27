---
category: engineering
applies_to: [all]
---

# Never Assume Missing Requirements

Do not guess missing requirements; discover them explicitly.

## Summary

When requirements are unspecified or ambiguous, perform a lightweight discovery step (ask stakeholders, create examples, confirm acceptance criteria) before implementing.

## Why

Assumptions lead to rework, mismatched expectations, and fragile features. Explicit requirements reduce churn and improve delivery predictability.

## Guidelines

- Ask clarifying questions and record answers in Project Context
- Produce minimal examples and acceptance criteria before implementation
- If unclear, create a small spike to validate options and update context
- Document edge cases and open questions in the decision record

## Good Example

```
Create acceptance criteria: Given X, when Y, then Z. Confirm stakeholders agree before implementation.
```

## Bad Example

```
Implement feature based on assumed behavior without verifying with stakeholders or tests.
```

## When Not to Apply

- Urgent security patches where immediate remediation is required
- Minor typo fixes or documentation edits
