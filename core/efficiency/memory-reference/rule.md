---
id: "RRAILS:E:0004"
slug: memory-reference
title: Memory Reference
category: efficiency
type: deterministic
level: L4
backed_by:
- claude-code-issue-13579
- claude-4-best-practices
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:E:0004:check:0001
    type: deterministic
    name: No memory reference instruction
    severity: low
    pattern_confidence: low
sources:
  - "https://github.com/anthropics/claude-code/issues/13579"
see_also: [RRAILS:E:0003, RRAILS:E:0006]
---

# Memory Reference

Instructions mention "reference from memory" for unchanged files.

## Pattern

**Good:** "Reference from memory instead of re-reading unchanged files"
**Bad:** No guidance on avoiding redundant reads
