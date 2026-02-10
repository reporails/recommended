---
id: "RRAILS:E:0006"
slug: context-window-awareness
title: Context Window Awareness
category: efficiency
type: deterministic
level: L3
backed_by:
- claude-context-windows
- claude-code-issue-13579
- advanced-context-engineering
- codex-agent-loop
- dometrain-claude-md-guide
- osmani-ai-coding-workflow
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:E:0006:check:0001
    type: deterministic
    name: Redundant token management instruction
    severity: low
    pattern_confidence: medium
sources:
  - "https://platform.claude.com/docs/en/build-with-claude/context-windows"
see_also: [RRAILS:E:0003, RRAILS:E:0004]
---

# Context Window Awareness

Avoid redundant "watch your tokens" instructions (model handles this).

## Pattern

**Good:** Specific strategies like "use files_with_matches"
**Bad:** "Be mindful of token limits" (unhelpful, model-native)
