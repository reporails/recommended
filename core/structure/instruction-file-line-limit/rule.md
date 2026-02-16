---
id: RRAILS:S:0001
slug: instruction-file-line-limit
title: Instruction File Line Limit
category: structure
type: mechanical
level: L1
backed_by:
- enterprise-claude-usage
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.S.0001.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.S.0001.max-line-count
  type: mechanical
  severity: medium
  name: max-line-count
  check: line_count
  args:
    max: 300
---

# Instruction File Line Limit

Root instruction files SHOULD be limited to 300 lines to maintain agent focus and reduce context window consumption

## Pass / Fail

### Pass

~~~~markdown
A CLAUDE.md file at 85 lines covering project context, commands, conventions, and pointers to detailed docs
~~~~

### Fail

~~~~markdown
(File does not exist at expected path)
~~~~

## Limitations

Line count is a proxy for complexity. A 200-line file of dense, specific instructions may be more effective than a 50-line file of vague platitudes. The 300-line threshold is community consensus, not an empirically derived optimum.
