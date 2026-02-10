---
id: "RRAILS_CLAUDE:G:0001"
slug: organization-level-policies
title: Organization-Level Policies
category: governance
type: deterministic
level: L5
backed_by:
- claude-code-settings
- claude-code-memory
targets: '{{instruction_files}}'
checks:
  - id: RRAILS_CLAUDE:G:0001:check:0001
    type: deterministic
    name: No organization-level policy file
    severity: medium
    pattern_confidence: high
sources:
  - "https://code.claude.com/docs/en/settings"
  - "https://claude.com/blog/how-anthropic-teams-use-claude-code"
see_also: [RRAILS:G:0001, CLAUDE_S1]
---

# Organization-Level Policies

L5+ requires managed-settings.json in system directory.

## Pattern

**Good:** /etc/claude-code/managed-settings.json with `allowedTools`/`permissions` keys
**Bad:** Managed settings file without org policy keys, or no file deployed

> **Note:** OpenGrep cannot detect missing files. This pattern validates content of existing
> managed settings files. File-existence detection requires runtime validation.
