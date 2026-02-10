---
id: "RRAILS:E:0002"
slug: session-start-ritual
title: Session Start Ritual
category: efficiency
type: deterministic
level: L6
backed_by: []  # Tier: experimental (community pattern, L6-only)
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:E:0002:check:0001
    type: deterministic
    name: No session start ritual section in instructions
    severity: critical
    pattern_confidence: medium
  - id: RRAILS:E:0002:check:0002
    type: deterministic
    name: Session ritual does not reference backbone.yml
    severity: high
    pattern_confidence: medium
  - id: RRAILS:E:0002:check:0003
    type: deterministic
    name: Session ritual lacks numbered steps (1. 2. 3.)
    severity: high
    pattern_confidence: medium
  - id: RRAILS:E:0002:check:0004
    type: deterministic
    name: Session ritual does not mention maps or navigation
    severity: high
    pattern_confidence: medium
  - id: RRAILS:E:0002:check:0005
    type: deterministic
    name: Session ritual missing 'before searching' guidance
    severity: low
    pattern_confidence: medium
  - id: RRAILS:E:0002:check:0006
    type: deterministic
    name: No context loading instructions for session start
    severity: high
    pattern_confidence: medium
sources: []
see_also: [RRAILS:S:0001, RRAILS:G:0004]
---

# Session Start Ritual

L6 projects require explicit session start rituals with numbered steps referencing backbone/maps.

## Pattern

**Good:** "## Session Start\n1. Read backbone.yml\n2. Identify relevant maps\n3. Load context before searching"
**Bad:** No guidance on how to start a session, or ritual without backbone/map references

## Required Elements

- Dedicated section header (Session Start, Initialization, Before You Begin)
- Reference to backbone.yml or .reporails/backbone
- Numbered steps (1. 2. 3.)
- Map/navigation references
- "Before searching" or "read first" guidance
- Context loading instructions
