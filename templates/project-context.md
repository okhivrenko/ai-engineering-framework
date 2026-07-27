# Project Context Template

Provide a concise snapshot of the project's goals and constraints. AI agents use this as the primary context.

- name: replace-with-project-name
- short_description: One-line summary of project purpose
- tech_stack: [react, nextjs, typescript]
- deployment_target: [vercel, aws, gcp, self-hosted]
- primary_user_personas:
  - persona: "end user"
    needs: "search and filter data"
- top_priorities: [accessibility, security, performance]
- non_functional_requirements:
  - availability: 99.9%
  - response_time: 500ms
- acceptance_criteria:
  - given: "authenticated user"
    when: "submits form"
    then: "data stored and confirmation shown"
- open_questions:
  - "Should login use OAuth or custom auth?"

Instructions: Keep this file minimal and update it when requirements change.
