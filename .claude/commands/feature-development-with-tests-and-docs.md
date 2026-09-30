---
name: feature-development-with-tests-and-docs
description: Workflow command scaffold for feature-development-with-tests-and-docs in dify.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /feature-development-with-tests-and-docs

Use this workflow when working on **feature-development-with-tests-and-docs** in `dify`.

## Goal

Implements a new feature or service, including backend logic, API endpoints, tests, and documentation/templates.

## Common Files

- `api/controllers/**/*.py`
- `api/core/**/*.py`
- `api/repositories/**/*.py`
- `api/services/**/*.py`
- `api/tasks/**/*.py`
- `api/tests/**/*.py`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Implement backend logic (e.g., core/app/services, controllers, tasks, entities, repositories).
- Add or update API endpoints (e.g., controllers/service_api, controllers/web).
- Create or update related tests (e.g., tests/unit_tests, tests/integration_tests).
- Update or add documentation/templates (e.g., web/app/components/develop/template/).

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.