---
id: RRAILS:S:0003
slug: scope-appropriate-instruction-placement
title: Scope-Appropriate Instruction Placement
category: structure
type: semantic
level: L3
backed_by:
- claude-code-memory
- instruction-limits-principles
- monorepo-claude-md-organization
- rules-directory-mechanics
targets: '{{main_instruction_file}}'
checks:
- id: RRAILS.S.0003.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.S.0003.semantic-evaluation
  type: semantic
  severity: medium
  name: semantic-evaluation
question: Are instructions placed at the scope level matching their 
  applicability?
criteria:
- Root instruction file contains only project-wide conventions
- Domain-specific guidance is in path-scoped files (not root)
- No technology-specific instructions in root when a relevant subdirectory 
  exists
- Path-scoped files target the correct file patterns
choices:
- value: pass
  label: Passes
- value: fail
  label: Fails
pass_value: pass
---

# Scope-Appropriate Instruction Placement

Instructions SHOULD be placed at the scope level that matches their applicability — project-wide conventions in root instruction files, domain-specific guidance in path-scoped files — so agents receive relevant context without noise from instructions meant for other parts of the codebase

## Pass / Fail

### Pass

~~~~markdown
# Root CLAUDE.md
- Python 3.12, use type hints everywhere
- Run pytest before committing

# .claude/rules/api-patterns.md
- All API endpoints return Pydantic models
- Use dependency injection for database sessions

(Root has universal rules; API-specific rules are path-scoped)
~~~~

### Fail

~~~~markdown
(File does not exist at expected path)
~~~~

## Limitations

Requires understanding which instructions are domain-specific vs universal — inherently semantic. M/D chain can detect instruction files that reference path-specific technologies (e.g., React in root when src/frontend/ exists) and flag for agent review. Small projects may not benefit from splitting.
