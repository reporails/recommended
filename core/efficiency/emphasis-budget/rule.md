---
id: RRAILS:E:0002
slug: emphasis-budget
title: Emphasis Budget for Critical Instructions
category: efficiency
type: mechanical
level: L2
backed_by:
- claude-md-guide
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.E.0002.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.E.0002.emphasis-overuse
  type: deterministic
  severity: medium
  name: emphasis-overuse
---

# Emphasis Budget for Critical Instructions

Instruction files SHOULD use emphasis markers (IMPORTANT, CRITICAL, MUST, NEVER) sparingly — if everything is marked critical, nothing is effectively critical

## Pass / Fail

### Pass

~~~~markdown
## Boundaries

- NEVER commit .env files or secrets
- Use named exports
- Keep components under 200 lines
- Run tests before committing

(One NEVER for the truly critical constraint)
~~~~

### Fail

~~~~markdown
## Rules

- IMPORTANT: Use TypeScript
- CRITICAL: Follow naming conventions
- MUST: Write tests
- NEVER: Skip code review
- IMPORTANT: Use the logger
- CRITICAL: Handle errors

 (Every rule is emphasized — agent cannot distinguish what actually matters)
~~~~

## Limitations

Threshold for 'too many emphasis markers' is subjective. The check counts emphasis keywords relative to total instruction count. Projects with few but genuinely critical rules may legitimately use multiple emphasis markers.
