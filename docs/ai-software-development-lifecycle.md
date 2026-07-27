# AI Software Development Lifecycle

> AI is not just a code generator. It is a business analyst, solution architect, tech lead, reviewer, and developer depending on the current stage of the project.
>
> The biggest mistake is asking AI to write code before making engineering decisions.
>
> This document describes the workflow I follow when building software with AI.

---

# Core Principle

Instead of saying:

> Build me an e-commerce application.

I gradually move AI through different roles.

```
Business Analyst
        ↓
Solution Architect
        ↓
Tech Lead
        ↓
Software Engineer
        ↓
Code Reviewer
        ↓
Architect (again)
```

Every stage produces artifacts that become context for the next stage.

---

# Stage 1 — Discovery

## AI Role

Business Analyst

## Goal

Understand the business before writing any code.

## Example Prompt

```
You are a Senior Business Analyst.

Help me gather requirements.

Do not generate code.

Ask me one question at a time until you fully understand the project.
```

## Deliverables

- Business Requirements
- Functional Requirements
- Non-functional Requirements
- User Roles
- Constraints
- Risks

## Output

```
docs/requirements.md
```

---

# Stage 2 — System Design

## AI Role

Solution Architect

## Goal

Design the system before discussing implementation.

## Example Prompt

```
You are a Solution Architect.

Design the system based on requirements.

Focus on architecture.
Do not write code.
```

## Deliverables

- High-Level Architecture
- Services
- External Integrations
- Deployment Overview
- Data Flow

## Output

```
docs/system-design.md
```

---

# Stage 3 — Technical Decisions

## AI Role

Tech Lead

## Goal

Choose technologies intentionally.

Everything should have a reason.

## Typical Questions

- Next.js or Remix?
- Server Actions or REST?
- Zustand or Redux?
- TanStack Query or SWR?
- PostgreSQL or MongoDB?
- Monorepo or Polyrepo?
- Docker?
- CI/CD?

The goal is not to accept AI's first answer.

The goal is to discuss trade-offs.

## Output

```
docs/technical-decisions.md
```

---

# Stage 4 — Project Architecture

## AI Role

Software Architect

## Goal

Define the project's internal structure.

## Deliverables

- Folder Structure
- Layer Boundaries
- Feature Organization
- Shared Libraries
- Naming Conventions

Example:

```
src/

app/
features/
entities/
widgets/
shared/
```

## Output

```
docs/architecture.md
```

---

# Stage 5 — Build AI Context

Only now do I start thinking about AI instructions.

At this stage I ask:

> What does an AI agent need to know before writing code?

Possible context:

- Architecture
- Folder Structure
- Coding Standards
- API Design
- Database Design
- UI Guidelines
- Accessibility Standards

These documents become the source of truth.

---

# Stage 6 — Planning

## AI Role

Scrum Master

## Goal

Break work into small deliverable units.

Hierarchy:

```
Epic
    ↓
Story
    ↓
Task
```

AI can generate:

- Epics
- User Stories
- Acceptance Criteria
- GitHub Issues
- Sprint Plan

---

# Stage 7 — Implementation

## AI Role

Senior Software Engineer

Now I finally open Cursor (or another coding agent).

Instead of saying:

```
Build an e-commerce.
```

I say:

```
Implement Story #12.

Use the existing architecture.

Follow Coding Standards.

Follow Architecture.md.
```

AI should implement decisions.

It should not invent them.

---

# Stage 8 — Code Review

## AI Role

Senior Reviewer

AI reviews:

- Code Quality
- Naming
- Performance
- Accessibility
- Security
- Maintainability
- Architecture Violations

The goal is not just fixing bugs.

The goal is protecting architecture.

---

# Stage 9 — Refactoring

## AI Role

Senior Engineer

AI looks for:

- Duplication
- Large Components
- Dead Code
- Missing Abstractions
- Complex Logic
- Reusable Patterns

---

# Stage 10 — Lessons Learned

This is the most important stage.

When AI makes a mistake I never ask:

> Which Rule should I create?

Instead I ask:

> Why did AI make this mistake?

Possible answers:

### Missing Context

Update documentation.

### Poor Prompt

Improve the prompt.

### Architecture was unclear

Improve Architecture.md.

### Repeated mistake

Create a Rule.

### Complex repeated workflow

Create a Workflow.

### Specialized task

Create a Skill.

Rules, Skills and Workflows should emerge from real problems.

They should never be created without evidence.

---

# Continuous Improvement Loop

```
Business Problem
        │
        ▼
Requirements
        │
        ▼
System Design
        │
        ▼
Architecture
        │
        ▼
Technical Decisions
        │
        ▼
Documentation
        │
        ▼
AI Context
        │
        ▼
Implementation
        │
        ▼
Code Review
        │
        ▼
Lessons Learned
        │
        ▼
Improve Context
        │
        └───────────────────────┐
                                │
                                ▼
                    Better Next Iteration
```

---

# Philosophy

I don't use AI to replace engineering.

I use AI to accelerate engineering.

The architecture comes first.

The documentation comes second.

The implementation comes last.

Good AI-generated code is usually the result of good engineering decisions made before the first line of code was written.

The goal is not to write better prompts.

The goal is to build a better engineering process.
