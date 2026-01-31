---
id: AILS_G4
title: Contract Registry
category: governance
type: deterministic
backed_by: []
checks:
  - id: AILS_G4-no-contracts
    name: Backbone lacks contracts key
    severity: medium
    pattern_confidence: medium
sources: []
see_also: [AILS_S1, AILS_G5]
---

# Contract Registry

L6 backbone.yml has quick_ref and contracts keys.

## Pattern

**Good:** backbone.yml with contracts: section listing interfaces
**Bad:** backbone.yml with no contract definitions
