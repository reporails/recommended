---
id: RRAILS:C:0007
slug: architecture-description-accuracy
title: Architecture Description Accuracy
category: content
type: semantic
level: L3
backed_by:
- agents-md-spec
- dometrain-claude-md-guide
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0007.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0007.semantic-evaluation
  type: semantic
  severity: medium
  name: semantic-evaluation
question: Does the directory structure or component layout described in this 
  instruction file match the actual filesystem?
criteria:
- All listed directories exist in the project
- Directory descriptions match the actual contents of those directories
- No major project directories are described with wrong names or purposes
choices:
- value: pass
  label: Passes
- value: fail
  label: Fails
pass_value: pass
---

# Architecture Description Accuracy

When instruction files describe the project's directory structure, component layout, or module organization, the description SHOULD match the actual filesystem so agents build an accurate mental model of the codebase before making changes

## Pass / Fail

### Pass

~~~~markdown
## Structure

```
src/
  models/       # Pydantic data models
  api/          # FastAPI route handlers
  services/     # Business logic
tests/
  unit/         # Unit tests
  integration/  # Integration tests
```

(All listed directories exist and descriptions match actual contents)
~~~~

### Fail

~~~~markdown
(File does not exist at expected path)
~~~~

## Limitations

M/D chain checks directory existence and can sample file contents. Descriptions like 'Business logic' vs actual file contents require semantic evaluation. Projects with generated or dynamic directories may have legitimate differences between documented and actual structure.
