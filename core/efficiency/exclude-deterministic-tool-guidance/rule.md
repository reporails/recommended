---
id: RRAILS:E:0001
slug: exclude-deterministic-tool-guidance
title: Exclude Deterministic Tool Guidance
category: efficiency
type: deterministic
level: L2
backed_by:
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.E.0001.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.E.0001.has-required-sections
  type: deterministic
  severity: medium
  name: has-required-sections
- id: RRAILS.E.0001.no-anti-sections
  type: deterministic
  severity: medium
  name: no-anti-sections
---

# Exclude Deterministic Tool Guidance

Root instruction files SHOULD NOT include guidance for tasks that deterministic tools (linters, formatters, type checkers) already enforce, because agents learn conventions from codebase context and tool output more efficiently than from prose instructions

## Pass / Fail

### Pass

~~~~markdown
## Code Quality

- Run `npm run lint -- --fix` before committing
- TypeScript strict mode is enabled

(Points to the tools; does not restate their rules)
~~~~

### Fail

~~~~markdown
## Code Style

- Use 2-space indentation
- Always add semicolons
- Use single quotes for strings
- Maximum line length 80 characters
- No unused variables
- No any types

(All of this is already enforced by ESLint + Prettier + tsconfig)
~~~~

## Limitations

M/D chain detects linter config files and extracts their rule sets, then compares against style directives in the instruction file. Coverage varies by ecosystem — eslintrc, ruff.toml, rustfmt.toml, .prettierrc are well-structured; other tools may have less parseable configs. Some teams legitimately document tool behavior for onboarding context — the semantic gate distinguishes intentional documentation from wasteful duplication.
