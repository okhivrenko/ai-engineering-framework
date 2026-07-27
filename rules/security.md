---
category: security
applies_to: [all]
---

# Security by Default

Treat security as a default constraint during design and implementation.

## Summary

Design and implement features with secure defaults, protecting user data and system integrity. Security checks must be part of code review and CI.

## Why

Security vulnerabilities cause data breaches, downtime, and loss of trust. Addressing security early reduces risk and remediation cost.

## Guidelines

- Validate and sanitize untrusted input
- Use principle of least privilege for credentials and services
- Encrypt sensitive data at rest and in transit where applicable
- Fail securely and log relevant events without leaking secrets
- Run dependency vulnerability scans and address critical findings

## Good Example

```
Input validation at the boundary, parameterized queries for DB access, secrets stored in managed secret store.
```

## Bad Example

```
Concatenating user input into SQL queries or logging secrets in plaintext.
```

## When Not to Apply

- Internal experimental scripts with no access to production data (document justification)
