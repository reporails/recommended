---
id: AILS_C4
title: MUST/MUST NOT with Context
category: content
type: deterministic
backed_by:
  - source: claude-4-best-practices
    claim: context-improves
  - source: claude-4-best-practices
    claim: never-with-context
checks:
  - id: AILS_C4-binary-rule-no-context
    name: Binary rule without rationale
    severity: medium
    pattern_confidence: high
sources:
  - "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices"
see_also: [AILS_C3, AILS_C7]
---

# MUST/MUST NOT with Context

Binary rules include rationale after em-dash or in parentheses.

## Pattern

**Good:** "MUST use TypeScript — ensures type safety"
**Bad:** "MUST use TypeScript" (no explanation)
