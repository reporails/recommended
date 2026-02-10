---
id: "RRAILS_CLAUDE:S:0001"
slug: skill-size-limits
title: Skill Size Limits
category: structure
type: deterministic
level: L4
backed_by: []
targets: '{{skills_dir}}/**/*.md'
checks:
  - id: RRAILS_CLAUDE:S:0001:check:0001
    type: deterministic
    name: SKILL.md file exceeds 100 lines
    severity: medium
    pattern_confidence: very_high
sources: []
see_also: [S1, RRAILS_CLAUDE:M:0001]
---

# Skill Size Limits

Keeps .claude/skills/*/SKILL.md files under 100 lines. Extract details to supporting files.

## Pattern

**Good:** Focused 60-line SKILL.md with references to supporting files
**Bad:** 250-line SKILL.md with embedded documentation
