---
id: "RRAILS:C:0003"
slug: anti-pattern-documentation
title: Anti-Pattern Documentation
category: content
type: deterministic
level: L2
backed_by:
- spec-writing-for-agents
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0003:check:0001
    type: deterministic
    name: No NEVER or AVOID statements
    severity: medium
    pattern_confidence: high
sources:
  - "https://blog.sshh.io/p/how-i-use-every-claude-code-feature"
see_also: [RRAILS:C:0007, RRAILS:C:0004]
---

# Anti-Pattern Documentation

At least one NEVER/AVOID keyword exists to prevent mistakes.

## Pattern

**Good:** "NEVER commit .env files"
**Bad:** File with no anti-pattern guidance
