---
category: architecture
applies_to: [all]
---

# Single Responsibility Principle

Every module should have a single, clearly defined reason to change.

## Summary

Every unit of code (file, module, class, function, component) must have exactly one responsibility. If you can describe its purpose with "and", it violates this rule.

## Why

Code with multiple responsibilities is fragile:
- Changes to one concern unintentionally break the other
- Testing becomes complex (must verify all concerns together)
- Understanding requires knowing all reasons the code might change
- Reusability suffers (can't separate concerns later without major refactoring)

Single responsibility means changes are localized, dependencies are clear, and testing is focused.

## Guidelines

- One responsibility = one reason to change
- If a module handles two different concerns, split it
- A concern is something that might change due to different business requirements or technical evolution
- Examples of distinct concerns: authentication vs authorization, validation vs persistence, formatting vs computation

**Scope:** Applies to all code organization decisions, from files to functions. Scale varies by project.

## Good Example

```
Module: UserAuthenticator
Responsibility: Verify user credentials against a data source

Module: UserPermissionChecker
Responsibility: Determine what resources a user can access

Module: UserSessionManager
Responsibility: Maintain and track active user sessions
```

Each module has one reason to change:
- UserAuthenticator changes if authentication logic evolves
- UserPermissionChecker changes if permission rules change
- UserSessionManager changes if session storage/tracking changes

## Bad Example

```
Module: UserManager
Responsibility: Authenticate users, check permissions, manage sessions, log user events, send notifications

Problem: Changes to any concern force modification of this module.
```

This module violates the rule. It has five reasons to change, making it fragile and difficult to test.

## When Not to Apply

- **Trivial code:** A simple utility function that combines two trivial operations (e.g., calculate and format) may not need splitting
- **Prototyping/exploration:** During rapid prototyping, responsibility clarity is lower priority than speed
- **Cross-cutting concerns:** Logging, monitoring, and error handling intentionally span multiple responsibilities
- **Performance-critical code:** Rare cases where combining responsibilities yields necessary performance gains; document the trade-off

In all cases, document why the principle was violated.

