---
id: "RRAILS:M:0002"
slug: change-management
title: Change Management
category: maintenance
type: semantic
level: L4
backed_by:
- anthropic-teams-claude-code
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:M:0002:check:0001
    type: deterministic
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
see_also: [RRAILS:M:0001, C5]
---

# Change Management

Approval matrix or change process documented.

## Pattern

**Good:** "Major changes require team lead approval"
**Bad:** No guidance on how to propose changes
