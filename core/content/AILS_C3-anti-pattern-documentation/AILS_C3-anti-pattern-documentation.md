---
id: AILS_C3
title: Anti-Pattern Documentation
category: content
type: deterministic
backed_by:
  - source: spec-writing-for-agents
    claim: three-tier-boundaries
checks:
  - id: AILS_C3-no-antipatterns
    name: No NEVER or AVOID statements
    severity: medium
    pattern_confidence: high
sources:
  - "https://blog.sshh.io/p/how-i-use-every-claude-code-feature"
see_also: [AILS_C7, AILS_C4]
---

# Anti-Pattern Documentation

At least one NEVER/AVOID keyword exists to prevent mistakes.

## Pattern

**Good:** "NEVER commit .env files"
**Bad:** File with no anti-pattern guidance
