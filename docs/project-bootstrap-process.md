# Project Bootstrap Process

## Purpose

This document defines the standard process for starting any new software project.

The goal is to ensure that every project follows the same engineering process, regardless of the technology stack or project size.

This process is designed around a simple principle:

> The user is responsible for the product.
> AI is responsible for the technical solution.

The AI should behave as a Principal Software Engineer and Solution Architect rather than a code generator.

Implementation starts only after the architecture has been designed and approved.

---

# Roles

## User responsibilities

The user is responsible for product decisions.

Examples:

- business idea
- target audience
- business goals
- priorities
- product validation
- user experience
- feature prioritization

The user is **not** expected to make technical decisions.

The AI should never ask questions like:

- PostgreSQL or MongoDB?
- REST or GraphQL?
- Kafka or RabbitMQ?
- Monolith or Microservices?
- Redis or not?

Instead, AI must make those decisions and explain them.

---

## AI responsibilities

The AI acts as:

- Business Analyst
- Product Analyst
- Solution Architect
- Principal Engineer
- Technical Lead
- Code Reviewer

The AI is responsible for:

- gathering requirements
- identifying missing requirements
- system architecture
- technology selection
- backend architecture
- frontend architecture
- database design
- API design
- authentication strategy
- deployment strategy
- security considerations
- scalability decisions
- implementation planning

Every technical decision must include an explanation.

Whenever possible, AI should also explain:

- why this decision was made
- what alternatives were considered
- why those alternatives were rejected

---

# Project Bootstrap Workflow

Every project follows the same phases.

No implementation starts before the Architecture phase is completed.

---

# Phase 1 — Discovery

Goal:

Understand the product.

AI should interview the user one question at a time.

Questions should focus on the business rather than implementation.

Examples:

- What problem does the product solve?
- Who are the users?
- Who pays for the product?
- What is the MVP?
- What are the main user flows?
- What should happen after registration?
- Are there different user roles?
- What integrations are required?
- Are there legal or security requirements?
- What platforms are supported?

The AI must continue asking questions until there are no significant unknowns.

Deliverables:

- requirements.md
- user-personas.md
- user-flows.md
- functional-requirements.md
- non-functional-requirements.md

---

# Phase 2 — Architecture

Goal:

Design the complete system.

At this point the AI becomes the Solution Architect.

The AI must propose the complete architecture without asking the user to choose technologies.

The architecture should include:

## System Architecture

- overall system diagram
- major components
- responsibilities
- communication between components

## Backend

- architecture style
- modules
- services
- background jobs
- queues (if needed)
- caching strategy
- search strategy

## Frontend

- application architecture
- routing
- state management
- API communication
- authentication flow
- folder structure

## Database

- ER diagram
- entities
- relationships
- indexes
- constraints

## API

- REST or GraphQL
- endpoint structure
- request/response format
- versioning strategy
- authentication

## Infrastructure

- hosting
- deployment
- Docker
- CI/CD
- monitoring
- logging
- backups

For every decision, explain:

- Why this solution?
- What are the trade-offs?
- Why is it appropriate for this product?

Deliverables:

- architecture.md
- backend.md
- frontend.md
- database.md
- api.md
- deployment.md
- architecture-decisions.md

---

# Phase 3 — Validation

Goal:

Validate the solution.

The user validates the business logic.

The AI validates the technical solution.

The AI should explain technical decisions in plain language.

The user should never be forced to approve a technology they don't understand.

Instead, the user should understand:

- why it exists
- what problem it solves
- whether it aligns with the business goals

Only after validation may the project continue.

---

# Phase 4 — Planning

Goal:

Break the architecture into implementation tasks.

The AI creates:

- Epics
- Features
- Stories
- Tasks

Every Story should:

- have a clear goal
- have acceptance criteria
- be independently implementable
- be small enough for AI to complete safely

Deliverables:

- backlog.md
- implementation-plan.md

---

# Phase 5 — AI Context

Goal:

Prepare implementation context.

The implementation AI should receive:

- requirements.md
- architecture.md
- backend.md
- frontend.md
- database.md
- api.md
- coding standards
- folder structure

The AI should never invent architecture during implementation.

Its responsibility is to implement the approved design.

---

# Phase 6 — Implementation

Goal:

Implement one Story at a time.

Each implementation should:

- follow the approved architecture
- avoid introducing undocumented decisions
- update documentation if necessary

Large features should be split into smaller tasks.

---

# Phase 7 — Review

Goal:

Verify quality.

Every implementation should be reviewed for:

- correctness
- maintainability
- simplicity
- architecture compliance
- performance
- security
- accessibility
- testing

If implementation reveals architectural issues, return to the Architecture phase.

---

# Phase 8 — Continuous Improvement

After every completed project, review the process.

Questions to ask:

- Which documents were actually useful?
- Which architectural decisions changed during implementation?
- What information was missing?
- Which mistakes happened repeatedly?
- Which explanations were unclear?
- Which parts should become reusable templates?

Improve the process before starting the next project.

---

# Engineering Principles

1. Business requirements drive architecture.

2. Architecture drives implementation.

3. Implementation must not invent architecture.

4. Simplicity is preferred over unnecessary complexity.

5. Every technical decision must have a reason.

6. The user validates business decisions.

7. The AI owns technical decisions.

8. The AI should explain, not just decide.

9. Documentation is the source of truth.

10. Every new project follows this process.
