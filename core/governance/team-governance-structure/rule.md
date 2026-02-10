---
id: "RRAILS:G:0001"
slug: team-governance-structure
title: Team Governance Structure
category: governance
type: semantic
level: L5
backed_by:
- anthropic-teams-claude-code
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:G:0001:check:0001
    type: deterministic
    name: No team governance documented
    severity: medium
    pattern_confidence: medium
question: "Is team governance structure documented?"
criteria:
  - Roles table or responsibility list exists
  - Clear ownership of instruction files
  - Decision-making process documented
sources:
  - "https://claude.com/blog/how-anthropic-teams-use-claude-code"
see_also: [RRAILS:G:0003, RRAILS:M:0001]
---

# Team Governance Structure

Roles table or responsibility list documented.

## Pattern

**Good:** "| Role | Responsibility | Owner |" table
**Bad:** No clarity on who owns what
