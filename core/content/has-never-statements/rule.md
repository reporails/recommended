---
id: "RRAILS:C:0007"
slug: has-never-statements
title: NEVER with Alternative
category: content
type: deterministic
level: L2
backed_by:
- claude-4-best-practices
- enterprise-claude-usage
- spec-writing-for-agents
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0007:check:0001
    type: deterministic
    name: NEVER statement without positive alternative
    severity: medium
    pattern_confidence: high
sources:
  - "https://blog.sshh.io/p/how-i-use-every-claude-code-feature"
  - "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices"
see_also: [RRAILS:C:0003, RRAILS:C:0004]
---

# NEVER with Alternative

NEVER statements include positive alternative after em-dash.

## Pattern

**Good:** "NEVER use var — use const or let instead"
**Bad:** "NEVER use var" (no guidance on what to do)
