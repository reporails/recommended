---
id: AILS_C1
title: Explicit Over Implicit
category: content
type: deterministic
backed_by:
  - source: claude-code-memory
    claim: be-specific
  - source: claude-4-best-practices
    claim: be-explicit
  - source: agents-md-spec
    claim: chat-overrides
  - source: dometrain-claude-md-guide
    claim: command-specificity
  - source: osmani-ai-coding-workflow
    claim: context-packaging
checks:
  - id: AILS_C1-vague-instruction
    name: Vague instruction without specifics
    severity: medium
    pattern_confidence: low
sources:
  - "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices"
see_also: [AILS_C6, AILS_C4]
---

# Explicit Over Implicit

Avoid "properly", "correctly", "appropriate" without specifics.

## Pattern

**Good:** "Use 2-space indentation"
**Bad:** "Format code properly"
