---
id: "RRAILS:E:0003"
slug: purpose-based-file-reading
title: Purpose-Based File Reading
category: efficiency
type: deterministic
level: L4
backed_by:
- claude-code-issue-13579
- claude-4-best-practices
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:E:0003:check:0001
    type: deterministic
    name: No file reading strategy documented
    severity: low
    pattern_confidence: medium
sources:
  - "https://github.com/anthropics/claude-code/issues/13579"
see_also: [RRAILS:E:0004, RRAILS:E:0006]
---

# Purpose-Based File Reading

Instructions document reading strategies (full vs partial).

## Pattern

**Good:** "Read full for EDIT, partial for UNDERSTAND"
**Bad:** No guidance on context-efficient reading
