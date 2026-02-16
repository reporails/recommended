---
id: RRAILS:M:0001
slug: one-concern-per-rule-file
title: One Concern Per Rule File
category: maintenance
type: deterministic
level: L2
backed_by:
- claude-code-memory
- instruction-limits-principles
- rules-directory-mechanics
targets: '{{supplementary_files}}'
checks:
- id: RRAILS.M.0001.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.M.0001.multiple-concerns
  type: deterministic
  severity: medium
  name: multiple-concerns
---

# One Concern Per Rule File

Modular rule files (.claude/rules/, .github/instructions/) SHOULD each cover a single, focused topic to enable independent ownership and targeted path scoping

## Pass / Fail

### Pass

~~~~markdown
.claude/rules/testing.md — covers test framework, patterns, and coverage expectations
.claude/rules/security.md — covers auth checks, secret handling, input validation

(Each file owns one domain)
~~~~

### Fail

~~~~markdown
## Testing

Run pytest before committing.

## Security

Never commit .env files.

## Code Style

Use snake_case for functions.

## Deployment

Deploy via CI/CD only.

(Four unrelated concerns in one file — cannot be independently path-scoped)
~~~~

## Limitations

"One concern" is subjective. A file covering "API patterns" might reasonably include request validation, error handling, and response formatting as one concern or three. Heuristic is H2 heading count as proxy for topic count.
