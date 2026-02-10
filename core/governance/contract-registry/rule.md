---
id: "RRAILS:G:0004"
slug: contract-registry
title: Contract Registry
category: governance
type: deterministic
level: L6
backed_by: []
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:G:0004:check:0001
    type: deterministic
    name: Backbone lacks contracts key
    severity: medium
    pattern_confidence: medium
sources: []
see_also: [RRAILS:S:0001, RRAILS:G:0005]
---

# Contract Registry

L6 backbone.yml has quick_ref and contracts keys.

## Pattern

**Good:** backbone.yml with contracts: section listing interfaces
**Bad:** backbone.yml with no contract definitions
