---
id: "RRAILS:C:0001"
slug: explicit-over-implicit
title: Explicit Over Implicit
category: content
type: deterministic
level: L2
backed_by:
- claude-code-memory
- claude-4-best-practices
- agents-md-spec
- dometrain-claude-md-guide
- osmani-ai-coding-workflow
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0001:check:0001
    type: deterministic
    name: Vague instruction without specifics
    severity: medium
    pattern_confidence: low
sources:
  - "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices"
see_also: [RRAILS:C:0006, RRAILS:C:0004]
---

# Explicit Over Implicit

Avoid "properly", "correctly", "appropriate" without specifics.

## Pattern

**Good:** "Use 2-space indentation"
**Bad:** "Format code properly"
