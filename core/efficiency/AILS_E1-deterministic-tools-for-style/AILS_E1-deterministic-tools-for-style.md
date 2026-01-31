---
id: AILS_E1
title: Deterministic Tools for Style
category: efficiency
type: deterministic
backed_by:
  - source: claude-code-hooks
    claim: hooks-for-formatting
  - source: claude-code-hooks
    claim: hooks-deterministic
  - source: instruction-limits-principles
    claim: use-linters
  - source: agents-md-spec
    claim: executable-commands
  - source: claude-code-hooks
    claim: app-level-code
  - source: osmani-ai-coding-workflow
    claim: ci-force-multiplier
checks:
  - id: AILS_E1-formatting-in-instructions
    name: Formatting rules in instruction file
    severity: medium
    pattern_confidence: medium
sources:
  - "https://code.claude.com/docs/en/hooks-guide"
see_also: [CLAUDE_S1, AILS_C1]
---

# Deterministic Tools for Style

Delegate formatting to tools (prettier, eslint), not instructions.

## Pattern

**Good:** "Run `npm run lint` before committing"
**Bad:** "Use 2-space indentation, max 80 chars per line"
