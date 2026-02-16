---
id: RRAILS:C:0006
slug: coding-convention-alignment
title: Coding Convention Alignment
category: content
type: semantic
level: L3
backed_by:
- awesome-copilot-meta-instructions
- instruction-limits-principles
- spec-writing-for-agents
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0006.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0006.semantic-evaluation
  type: semantic
  severity: medium
  name: semantic-evaluation
question: Do the coding conventions stated in this instruction file match what 
  the codebase actually does?
criteria:
- Naming conventions (snake_case, camelCase, etc.) match the dominant pattern in
  the codebase
- Import patterns described match actual import style in source files
- Error handling approach matches what the codebase implements
- No convention contradicts the codebase majority practice
choices:
- value: pass
  label: Passes
- value: fail
  label: Fails
pass_value: pass
---

# Coding Convention Alignment

When instruction files specify coding conventions (naming style, import patterns, component structure, error handling approach), the stated conventions SHOULD match what the codebase actually does, because agents receiving contradictory signals from instructions vs codebase context produce inconsistent output

## Pass / Fail

### Pass

~~~~markdown
## Style

- Use snake_case for all Python functions and variables
- Prefer dataclasses over plain dicts for structured data

 (Codebase grep confirms: 95%+ of functions use snake_case, dataclasses used in 12 modules)
~~~~

### Fail

~~~~markdown
(File does not exist at expected path)
~~~~

## Limitations

Projects undergoing migration may intentionally document target conventions that differ from current codebase state. The check should distinguish between aspirational conventions (flagged as info) and contradictory conventions (flagged as warning). M/D chain samples the codebase — cannot exhaustively verify every file.
