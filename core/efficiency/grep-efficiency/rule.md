---
id: "RRAILS:E:0005"
slug: grep-efficiency
title: Grep Efficiency
category: efficiency
type: deterministic
level: L4
backed_by:
- claude-code-issue-13579
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:E:0005:check:0001
    type: deterministic
    name: No grep efficiency guidance
    severity: low
    pattern_confidence: medium
sources:
  - "https://github.com/anthropics/claude-code/issues/13579"
see_also: [RRAILS:E:0003, RRAILS:E:0004]
---

# Grep Efficiency

Instructions document grep guidelines (files_with_matches, head_limit).

## Pattern

**Good:** "Use files_with_matches mode, limit with head_limit"
**Bad:** No guidance on efficient search patterns
