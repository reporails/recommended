---
id: "RRAILS:C:0012"
slug: check-before-implement
title: Instructs Agent to Check Before Implementing
category: content
type: semantic
level: L3
backed_by:
- claude-code-issue-13579
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0012:check:0001
    type: deterministic
    name: Instruction to check existing code before implementing
    severity: low
    pattern_confidence: medium
    negate: true
question: Does the instruction file direct the agent to check existing code
  before implementing?
criteria:
- An explicit instruction to search before implementing is present
- Search strategy is described (grep, file search, etc.)
---

# Instructs Agent to Check Before Implementing

Instruction file must direct the agent to search existing code before implementing new code.

## Pass / Fail

**Pass:** 'Before creating new utilities, search the codebase for existing implementations: grep > explore > implement.'
**Fail:** No instruction about checking existing code; agent creates duplicate utilities.

## Limitations

Cannot verify the agent follows the instruction at runtime.
