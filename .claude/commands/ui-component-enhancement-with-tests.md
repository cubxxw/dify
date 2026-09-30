---
name: ui-component-enhancement-with-tests
description: Workflow command scaffold for ui-component-enhancement-with-tests in dify.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /ui-component-enhancement-with-tests

Use this workflow when working on **ui-component-enhancement-with-tests** in `dify`.

## Goal

Adds or updates UI components, including implementation and corresponding tests.

## Common Files

- `web/app/components/**/*.tsx`
- `web/app/components/**/__tests__/*.spec.tsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Modify or create UI component files (e.g., .tsx in components/).
- Update or add corresponding test files (e.g., __tests__/*.spec.tsx).

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.