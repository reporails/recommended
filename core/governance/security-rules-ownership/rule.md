---
id: "RRAILS:G:0002"
slug: security-rules-ownership
title: Security Rules Ownership
category: governance
type: semantic
level: L5
backed_by:
- anthropic-teams-claude-code
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:G:0002:check:0001
    type: deterministic
    name: Security rules lack qualified owners
    severity: high
    pattern_confidence: medium
question: "Are security rules properly owned by qualified personnel?"
criteria:
  - Security rules have designated owners
  - Owners have relevant expertise
  - Review process exists for security changes
sources:
  - "https://claude.com/blog/how-anthropic-teams-use-claude-code"
see_also: [RRAILS:G:0001, RRAILS:G:0003]
---

# Security Rules Ownership

Security rules have qualified owners.

## Pattern

**Good:** "@security-team owns all NEVER statements about credentials"
**Bad:** Security rules with no clear ownership
