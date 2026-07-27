AI Agent Adapter — Minimal Guidance

Purpose: Show AI agents how to consume project context and conventions with minimal prompt additions.

Usage pattern (include this JSON at the top of the prompt):

```
CONTEXT_HEADER:
<PROJECT_CONTEXT>
# include only these keys: tech_stack, components_dir, test_command, accessibility_level, top_priorities, auth_options
</PROJECT_CONTEXT>
```

Prompt checklist for "Create an accessible DataTable component":
1. Load CONTEXT_HEADER from project root `project-context.yml`.
2. Follow conventions in `conventions.yml` (component naming, file location, tests required).
3. Implement an accessible table using semantic `<table>`, `<thead>`, `<tbody>`, `<th scope="col">`, and a `<caption>`.
4. Add keyboard focusability for rows (tabIndex and focus styles) and aria attributes where needed.
5. Add unit tests that verify the presence of a table with caption and headers.
6. Add a Decision Record (use decision-records/DECISION-TEMPLATE.md) documenting any trade-offs.
7. Create a PR or patch including: component file under `src/components`, test under `__tests__` or alongside component, Decision Record, and reference to the acceptance criteria from project-context.yml.

Short prompt example (after Context Header):

"Implement an accessible DataTable component in this Next.js project. Place the component in src/components/DataTable.jsx, add unit tests, and include a decision record referencing accessibility trade-offs. Follow the project conventions and ensure tests pass with `npm test`."

Notes:
- Do not include secrets in prompts.
- If a project-context field is missing, ask one clarifying question before implementing.
