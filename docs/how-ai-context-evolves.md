---

# How AI Context Evolves

One of the biggest misconceptions about AI Engineering is believing that a project should start with Rules, Skills or Workflows.

It shouldn't.

Those artifacts should evolve naturally as the project grows.

The AI context becomes more sophisticated over time.

## Level 1 — Prompt

Every project starts with a conversation.

```
Build a React application.

Use Next.js.

Use TypeScript.
```

This works well for prototypes and small experiments.

There is almost no reusable context.

---

## Level 2 — Documentation

As the project grows, repeating the same information becomes inefficient.

Instead of writing the same instructions every time, create documentation.

Examples:

```
Architecture.md
API.md
FolderStructure.md
CodingStandards.md
```

At this point documentation becomes the project's source of truth.

Instead of explaining architecture in every prompt, AI reads the documentation.

---

## Level 3 — Examples

Sometimes documentation is not enough.

AI understands examples better than abstract descriptions.

Instead of saying

```
Use Feature-Sliced Design.
```

show it:

```
features/
    cart/
        api/
        hooks/
        ui/
        types/
```

Real examples significantly improve consistency.

---

## Level 4 — Rules

Eventually patterns begin to repeat.

For example:

AI keeps creating components inside `shared`.

Your architecture requires them inside `features`.

Instead of fixing this every time, create a Rule.

Rules should capture repeated engineering decisions.

A Rule is not documentation.

A Rule is an automatic instruction applied during implementation.

Create Rules only when:

- the same mistake happens repeatedly
- the architecture is stable
- the decision is unlikely to change

---

## Level 5 — Skills

Some engineering tasks become repeatable.

For example:

- Create Feature
- Add API Endpoint
- Generate CRUD
- Create React Form
- Create Unit Tests

Instead of describing these processes every time, package them into reusable Skills.

A Skill is specialized knowledge for solving a specific problem.

Unlike Rules, Skills are not always needed.

They are loaded only when relevant.

---

## Level 6 — Workflows

Eventually multiple tasks become connected.

Example:

```
Create Feature

↓

Create Folder

↓

Generate API

↓

Generate Types

↓

Generate React Query Hooks

↓

Generate UI

↓

Generate Tests

↓

Run Linter
```

This is no longer a single instruction.

It is a process.

Workflows orchestrate multiple steps.

Instead of teaching AI what to do, Workflows teach AI how to work.

---

## Level 7 — Memory

Over time AI begins accumulating project knowledge.

Examples:

- preferred coding style
- common architectural decisions
- naming conventions
- recurring business rules
- project history

Memory reduces repeated explanations.

Instead of sending everything in every prompt, AI remembers long-term project context.

---

## Level 8 — External Tools

Eventually context is no longer enough.

AI needs actions.

Examples:

- GitHub
- Jira
- Slack
- Figma
- PostgreSQL
- Browser
- Documentation Search
- CI/CD

This is where MCP servers and other integrations become valuable.

Instead of only answering questions, AI can interact with the engineering ecosystem.

---

# Evolution Timeline

```
Prompt
    │
    ▼
Documentation
    │
    ▼
Examples
    │
    ▼
Rules
    │
    ▼
Skills
    │
    ▼
Workflows
    │
    ▼
Memory
    │
    ▼
External Tools
```

---

# Decision Tree

When AI makes a mistake, don't immediately create a Rule.

Ask yourself:

```
Is this a one-time mistake?

    YES
        Fix it manually.

    NO
        │
        ▼

Was the documentation missing?

    YES
        Improve documentation.

    NO
        │
        ▼

Would an example make it obvious?

    YES
        Add an example.

    NO
        │
        ▼

Is this a repeated engineering decision?

    YES
        Create a Rule.

    NO
        │
        ▼

Is this a repeatable engineering task?

    YES
        Create a Skill.

    NO
        │
        ▼

Does this involve multiple connected steps?

    YES
        Create a Workflow.

    NO
        │
        ▼

Does AI need to interact with external systems?

    YES
        Use MCP or other integrations.
```

---

# Core Principle

Do not build Rules, Skills or Workflows because the platform supports them.

Build them only when they solve a real engineering problem.

Good AI Engineering is not about creating more AI artifacts.

It is about reducing friction while keeping the engineering process simple, maintainable and predictable.
