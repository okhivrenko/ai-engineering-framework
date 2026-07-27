# AI Engineering Framework (MVP)

Minimal AI context layer to help coding agents produce production-quality code in a project.

Included artifacts for the MVP:
- project-context.yml — machine-readable project snapshot (priorities, test commands, acceptance criteria)
- conventions.yml — project conventions (component naming, test locations, accessibility requirements)
- rules.yml — minimal rule manifest referencing required validators
- agent-adapter.md — short guidance and prompt header for AI agents
- decision-records/ — decision record template for documenting trade-offs
- examples/ — example components and tests (accessible DataTable)
- docs/ — project vision and roadmap (context for maintainers)

Usage:
1. Copy these artifacts into a project root for any modern web or service project.
2. Open an AI coding assistant in the project and ask a single request (e.g., "Create an accessible DataTable component").
3. The agent should read project-context.yml, conventions.yml, and the domain skills to make engineering decisions consistent with the project's constraints.

This repository contains the minimal, focused MVP. For v0.2 we will add validators and CI integration to enforce rules automatically.
