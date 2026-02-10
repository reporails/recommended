---
id: "RRAILS:C:0013"
slug: iterate-incrementally
title: Instructs Agent to Iterate Incrementally
category: content
type: semantic
level: L3
backed_by:
- claude-code-issue-13579
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0013:check:0001
    type: deterministic
    name: Instruction to iterate incrementally and test after each change
    severity: low
    pattern_confidence: medium
    negate: true
question: Does the instruction file direct the agent to iterate incrementally
  and test after each change?
criteria:
- An explicit instruction to work incrementally is present
- Testing after each change is mentioned, not just at the end
---

# Instructs Agent to Iterate Incrementally

Instruction file must direct the agent to iterate incrementally and test after each change.

## Pass / Fail

**Pass:** 'Make one change at a time. Test after each file modification before proceeding to the next.'
**Fail:** No instruction about incremental iteration; agent builds entire feature before testing anything.

## Limitations

Cannot verify the agent follows the instruction at runtime.
