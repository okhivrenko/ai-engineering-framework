---
category: documentation
applies_to: [all]
---

# Documentation with Purpose

Document the why, the how, and the verification for important engineering decisions.

## Summary

Key architectural decisions, APIs, and workflows must include concise documentation explaining purpose, usage, and how to verify correctness.

## Why

Good documentation reduces onboarding time, prevents misunderstandings, and enables AI agents to reason about intended behavior.

## Guidelines

- Every public API and architectural decision must have a short summary and example
- Include verification steps and tests that prove intended behavior
- Keep documentation near the code and versioned with it
- Favor concise examples over long prose

## Good Example

```
API docs with example request/response, authentication requirements, and test cases for expected behavior.
```

## Bad Example

```
README with vague descriptions and no usage examples or tests.
```

## When Not to Apply

- Internal throwaway scripts where long-term maintenance is not intended (document rationale)
