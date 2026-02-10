---
id: "RRAILS:C:0006"
slug: instructions-over-philosophy
title: Instructions Over Philosophy
category: content
type: semantic
level: L2
backed_by:
- claude-4-best-practices
- spec-writing-for-agents
- osmani-ai-coding-workflow
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0006:check:0001
    type: deterministic
    name: Explanatory prose instead of imperatives
    severity: low
    pattern_confidence: low
question: "Is this content actionable instruction or explanatory prose?"
criteria:
  - Content uses imperative verbs (use, run, add, create)
  - Avoids lengthy explanations of why
  - Focuses on what to do, not theory
sources:
  - "https://addyosmani.com/blog/good-spec/"
see_also: [RRAILS:C:0001, RRAILS:C:0004]
---

# Instructions Over Philosophy

Imperative guidance, not explanatory prose.

## Pattern

**Good:** "Run pytest before committing"
**Bad:** "Testing is important because it helps catch bugs early..."
