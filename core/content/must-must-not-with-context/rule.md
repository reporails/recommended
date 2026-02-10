---
id: "RRAILS:C:0004"
slug: must-must-not-with-context
title: MUST/MUST NOT with Context
category: content
type: deterministic
level: L2
backed_by:
- claude-4-best-practices
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0004:check:0001
    type: deterministic
    name: Binary rule without rationale
    severity: medium
    pattern_confidence: high
sources:
  - "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices"
see_also: [RRAILS:C:0003, RRAILS:C:0007]
---

# MUST/MUST NOT with Context

Binary rules include rationale after em-dash or in parentheses.

## Pattern

**Good:** "MUST use TypeScript — ensures type safety"
**Bad:** "MUST use TypeScript" (no explanation)
