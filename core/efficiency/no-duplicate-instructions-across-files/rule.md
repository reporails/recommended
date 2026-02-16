---
id: RRAILS:E:0003
slug: no-duplicate-instructions-across-files
title: No Duplicate Instructions Across Files
category: efficiency
type: deterministic
level: L2
backed_by:
- enterprise-claude-usage
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.E.0003.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
---

# No Duplicate Instructions Across Files

When using multiple instruction files (root + nested or root + rules directory), the same instruction SHOULD NOT appear in more than one file, because duplicates waste context tokens and create maintenance burden when one copy is updated but others are not

## Pass / Fail

### Pass

~~~~markdown
CLAUDE.md defines 'use named exports' once.
.claude/rules/ api-patterns.md covers API-specific rules only.
No overlap between the two files.
~~~~

### Fail

~~~~markdown
CLAUDE.md says 'use named exports, no any types'.
 .claude/rules/code-style.md also says 'use named exports, no any types'.
Both load in every session, doubling token cost for identical instructions.
~~~~

## Limitations

Detecting semantic duplicates (same meaning, different words) requires fuzzy matching. Exact string matching catches only verbatim duplicates. Some intentional reinforcement of critical rules across files may be justified.
