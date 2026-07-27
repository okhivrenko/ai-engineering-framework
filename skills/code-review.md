# Skill: Code Review

Purpose: Evaluate proposed changes for correctness, readability, and compliance with rules.

Inputs:
- PR with code changes, tests, and context
- Relevant rules and validators

Outputs:
- Review comments, requested changes, or approval
- Updated decision records if design changes are introduced

Steps:
1. Verify PR includes acceptance criteria and tests
2. Run and inspect CI results and validators
3. Review design and code for correctness and readability
4. Request small, focused changes when needed
5. Approve when changes meet rules and tests pass

Verification:
- Reviewer confirms acceptance criteria are satisfied
- No critical validator failures remain
