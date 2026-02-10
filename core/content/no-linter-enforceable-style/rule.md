---
id: "RRAILS:C:0008"
slug: no-linter-enforceable-style
title: No Linter-Enforceable Style Rules in Instructions
category: content
type: semantic
level: L2
backed_by:
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0008:check:0001
    type: deterministic
    name: Linter-enforceable style rule found in instruction file
    severity: medium
    pattern_confidence: low
question: Does the instruction file contain formatting rules that belong in a
  linter configuration?
criteria:
- No indentation, line length, or bracket placement rules in instruction files
- Formatting references point to linter configs (.eslintrc, .prettierrc) instead
- High-level style conventions (naming, architecture) are permitted
---

# No Linter-Enforceable Style Rules in Instructions

Instruction file must not contain formatting rules enforceable by a linter (indentation, line length, bracket placement).

## Pass / Fail

**Pass:** Style section covering naming conventions and architectural patterns, with a note: 'Formatting handled by Prettier — see .prettierrc'.
**Fail:** 'Use 2-space indentation, max 80 chars per line, opening braces on same line' — all linter-enforceable.

## Limitations

Boundary between linter-enforceable and convention is fuzzy; some rules (e.g., naming) straddle both. Single-source backing.
