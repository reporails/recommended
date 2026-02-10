---
id: "RRAILS:G:0006"
slug: architecture-tests
title: Architecture Tests
category: governance
type: deterministic
level: L5
backed_by: []
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:G:0006:check:0001
    type: deterministic
    name: No architecture test files found
    severity: medium
    pattern_confidence: low
sources: []
see_also: [RRAILS:G:0005, RRAILS:G:0007]
---

# Architecture Tests

Test files exist and CI integration present.

## Pattern

**Good:** tests/architecture/*.test.ts with CI workflow
**Bad:** No automated architecture enforcement
