---
id: "RRAILS:C:0011"
slug: pointers-over-copies
title: Uses Pointers Not Copies
category: content
type: semantic
level: L3
backed_by:
- enterprise-claude-usage
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0011:check:0001
    type: deterministic
    name: Large code block embedded in instruction file
    severity: medium
    pattern_confidence: medium
question: Does the instruction file embed code that could be referenced via
  pointers instead?
criteria:
- Large code blocks (>10 lines) are replaced with file:line references
- References include brief descriptions of what to look for
- Small inline examples for illustration are acceptable
---

# Uses Pointers Not Copies

Instruction file must use file:line pointers rather than embedding code snippets that become stale.

## Pass / Fail

**Pass:** 'For API patterns, see src/api/users.ts:45-60' with a one-line description of what to look for.
**Fail:** 50-line code block pasted into CLAUDE.md showing 'how we do API endpoints' — will become stale.

## Limitations

Some small examples are better inline; the rule cannot distinguish stable examples from volatile ones.
