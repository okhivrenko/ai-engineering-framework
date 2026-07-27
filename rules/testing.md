---
category: testing
applies_to: [all]
---

# Testable by Design

Design features so they can be verified with automated tests.

## Summary

Every new feature must include automated tests covering expected behavior and edge cases. Tests should be fast, deterministic, and runnable in CI.

## Why

Automated tests provide confidence that changes do not introduce regressions and enable safe refactoring and releases.

## Guidelines

- Write unit tests for business logic
- Write integration tests for component interactions and external services (use mocks where appropriate)
- Include end-to-end tests for critical user flows
- Keep tests isolated, deterministic, and fast enough for CI
- Require passing tests in CI before merging

## Good Example

```
Unit tests that assert pure functions, integration tests that use ephemeral test databases, E2E tests for main user journeys.
```

## Bad Example

```
Manual QA notes with no automated tests or flaky tests that depend on external services.
```

## When Not to Apply

- Throwaway prototypes explicitly marked as experimental
- Documentation-only changes that do not affect behavior
