---
id: "RRAILS:S:0001"
slug: yaml-backbone
title: YAML Backbone
category: structure
type: deterministic
level: L6
backed_by: []  # Tier: experimental (community pattern, L6-only)
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:S:0001:check:0001
    type: deterministic
    name: Backbone missing 'maps:' section
    severity: critical
    pattern_confidence: medium
  - id: RRAILS:S:0001:check:0002
    type: deterministic
    name: Backbone missing 'contracts:' section
    severity: high
    pattern_confidence: medium
  - id: RRAILS:S:0001:check:0003
    type: deterministic
    name: Backbone missing 'quick_ref:' section
    severity: high
    pattern_confidence: medium
  - id: RRAILS:S:0001:check:0004
    type: deterministic
    name: Maps section missing 'components:' key
    severity: high
    pattern_confidence: medium
  - id: RRAILS:S:0001:check:0005
    type: deterministic
    name: Maps section missing 'platform:' key
    severity: low
    pattern_confidence: medium
  - id: RRAILS:S:0001:check:0006
    type: deterministic
    name: Backbone file appears empty or minimal
    severity: critical
    pattern_confidence: medium
sources: []
see_also: [RRAILS:E:0002, RRAILS:G:0004, M3]
---

# YAML Backbone

L6 projects require `.reporails/backbone.yml` with complete navigation structure.

## Pattern

**Good:** backbone.yml with maps (components, platform), contracts, and quick_ref sections
**Bad:** Missing or incomplete backbone structure

## Required Sections

- `maps:` — Navigation maps for codebase (required)
  - `components:` — Component location index
  - `platform:` — Platform/infrastructure paths
- `contracts:` — Contract registry for architecture enforcement
- `quick_ref:` — Quick reference for common operations
