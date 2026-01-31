---
id: AILS_G3
title: Ownership Assignment
category: governance
type: semantic
backed_by:
  - source: anthropic-teams-claude-code
    claim: governance-roles
checks:
  - id: AILS_G3-no-owner
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
see_also: [AILS_G1, AILS_M1]
---

# Ownership Assignment

Files have designated owner/maintainer.

## Pattern

**Good:** CODEOWNERS entry or "Maintainer: @team" in file
**Bad:** Orphaned file with no clear ownership
