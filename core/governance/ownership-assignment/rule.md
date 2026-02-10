---
id: "RRAILS:G:0003"
slug: ownership-assignment
title: Ownership Assignment
category: governance
type: semantic
level: L5
backed_by:
- anthropic-teams-claude-code
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:G:0003:check:0001
    type: deterministic
    name: File has no designated owner
    severity: medium
    pattern_confidence: low
question: "Does this file have a clear owner or maintainer?"
criteria:
  - Owner specified in file or CODEOWNERS
  - Contact information available
  - Escalation path clear
sources:
  - "https://claude.com/blog/how-anthropic-teams-use-claude-code"
see_also: [RRAILS:G:0001, RRAILS:M:0001]
---

# Ownership Assignment

Files have designated owner/maintainer.

## Pattern

**Good:** CODEOWNERS entry or "Maintainer: @team" in file
**Bad:** Orphaned file with no clear ownership
