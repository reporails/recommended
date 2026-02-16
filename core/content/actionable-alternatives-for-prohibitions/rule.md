---
id: RRAILS:C:0003
slug: actionable-alternatives-for-prohibitions
title: Actionable Alternatives for Prohibitions
category: content
type: deterministic
level: L2
backed_by:
- copilot-cli-best-practices
- enterprise-claude-usage
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0003.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0003.bare-prohibition
  type: deterministic
  severity: medium
  name: bare-prohibition
---

# Actionable Alternatives for Prohibitions

Instruction files SHOULD pair prohibition constraints (never, do not) with a recommended alternative action, so agents are not left stuck when they encounter the prohibited path

## Pass / Fail

### Pass

~~~~markdown
- Never use console.log for debugging; use the project logger at src/lib/logger.ts instead
- Do not install new dependencies without checking package.json first; prefer existing packages
~~~~

### Fail

~~~~markdown
- Never use console.log
- Do not install new dependencies
- Never modify the generated files

(Agent gets stuck when it needs to debug, add a dep, or update generated code)
~~~~

## Limitations

Can detect prohibition patterns and check for nearby alternative language (instead, prefer, use, rather) but cannot verify the alternative is actionable or correct. Some prohibitions are absolute and need no alternative (never commit secrets).
