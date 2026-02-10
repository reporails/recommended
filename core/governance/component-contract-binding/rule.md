---
id: "RRAILS:G:0005"
slug: component-contract-binding
title: Component-Contract Binding
category: governance
type: deterministic
level: L6
backed_by: []
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:G:0005:check:0001
    type: deterministic
    name: Component definition lacks contracts/rules/tests
    severity: medium
    pattern_confidence: medium
sources: []
see_also: [RRAILS:G:0004, RRAILS:G:0006]
---

# Component-Contract Binding

Component definitions have contracts/rules/tests keys.

## Pattern

**Good:** Component with contracts:, rules:, tests: keys
**Bad:** Component definition with only path
