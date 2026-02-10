---
id: "RRAILS:C:0014"
slug: specify-interaction-language
title: Specifies Interaction Language
category: content
type: deterministic
level: L2
backed_by:
- claude-code-issue-13579
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0014:check:0001
    type: deterministic
    name: Interaction language specified
    severity: low
    pattern_confidence: high
    negate: true
---

# Specifies Interaction Language

Instruction file must specify the interaction language explicitly.

## Pass / Fail

**Pass:** CLAUDE.md with 'Always respond in English' near the top.
**Fail:** CLAUDE.md with no language specification; agent switches to system locale after compaction.

## Limitations

Single-source backing (community issue report). May not affect all agents or all locales.
