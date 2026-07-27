---
category: accessibility
applies_to: [all]
---

# Accessibility First

Prioritize accessibility in all user-facing features and UI components.

## Summary

Every user-facing change must meet accessibility standards appropriate to the project (e.g., WCAG). Accessibility checks are part of the development, review, and release process.

## Why

Accessibility ensures software is usable by people with diverse needs. Making accessibility explicit prevents costly rework and legal risk, and improves overall usability.

## Guidelines

- Ensure semantic markup and correct ARIA roles
- Provide keyboard navigation and focus management
- Ensure sufficient color contrast and readable type sizes
- Include alt text for meaningful images and captions for media
- Automate accessibility checks in CI and enforce in reviews

## Good Example

```
Button element with role=button, keyboard focus, aria-label when icon-only, visible focus styles.
```

## Bad Example

```
Non-semantic div used as a button without keyboard handling or aria attributes.
```

## When Not to Apply

- Generated or third-party content where modification is impossible (document the limitation)
- Temporary prototypes that are explicitly flagged as non-production
