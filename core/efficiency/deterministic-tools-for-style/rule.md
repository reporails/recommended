---
id: "RRAILS:E:0001"
slug: deterministic-tools-for-style
title: Deterministic Tools for Style
category: efficiency
type: deterministic
level: L3
backed_by:
- claude-code-hooks
- instruction-limits-principles
- agents-md-spec
- osmani-ai-coding-workflow
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:E:0001:check:0001
    type: deterministic
    name: Formatting rules in instruction file
    severity: medium
    pattern_confidence: medium
sources:
  - "https://code.claude.com/docs/en/hooks-guide"
see_also: [CLAUDE_S1, RRAILS:C:0001]
---

# Deterministic Tools for Style

Delegate formatting to tools (prettier, eslint), not instructions.

## Pattern

**Good:** "Run `npm run lint` before committing"
**Bad:** "Use 2-space indentation, max 80 chars per line"
