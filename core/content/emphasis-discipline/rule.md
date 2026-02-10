---
id: "RRAILS:C:0005"
slug: emphasis-discipline
title: Uses Emphasis Sparingly
category: content
type: deterministic
level: L2
backed_by:
- claude-md-guide
- enterprise-claude-usage
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0005:check:0001
    type: deterministic
    name: More than 5 IMPORTANT/CRITICAL per file
    severity: medium
---

# Uses Emphasis Sparingly

Emphasis markers (IMPORTANT, CRITICAL, NEVER, ALWAYS) must be used sparingly.

## Pass / Fail

**Pass:** CLAUDE.md with 2 IMPORTANT markers for genuinely critical constraints.
**Fail:** CLAUDE.md with 15 lines marked IMPORTANT, CRITICAL, or NEVER — diluting signal.

## Limitations

Threshold for 'too many' is subjective; cannot assess whether each emphasis is warranted.
