---
id: AILS_M2
title: Change Management
category: maintenance
type: semantic
backed_by:
  - source: anthropic-teams-claude-code
    claim: review-process
checks:
  - id: AILS_M2-no-change-process
    name: No change management documented
    severity: medium
    pattern_confidence: medium
question: "Is there a change management process for instructions?"
criteria:
  - Approval matrix or change process documented
  - Breaking changes require notification
  - Versioning strategy exists
sources:
  - "https://claude.com/blog/how-anthropic-teams-use-claude-code"
see_also: [AILS_M1, C5]
---

# Change Management

Approval matrix or change process documented.

## Pattern

**Good:** "Major changes require team lead approval"
**Bad:** No guidance on how to propose changes
