---
id: RRAILS:M:0003
slug: accurate-version-references
title: Accurate Technology Version References
category: maintenance
type: deterministic
level: L3
backed_by:
- awesome-copilot-meta-instructions
- spec-writing-for-agents
targets: '{{instruction_files}}'
checks:
- id: RRAILS.M.0003.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.M.0003.no-trailing-etc
  type: deterministic
  severity: medium
  name: no-trailing-etc
---

# Accurate Technology Version References

When instruction files specify technology versions (language versions, framework versions, dependency versions), the stated versions SHOULD match the project's actual dependency files so agents do not generate code targeting the wrong version

## Pass / Fail

### Pass

~~~~markdown
## Stack

- Python 3.12
- FastAPI 0.115
- pytest 8.x

(pyproject.toml confirms python = ">=3.12", fastapi = "^0.115", pytest = ">=8.0")
~~~~

### Fail

~~~~markdown
## Stack

- Python 3.10
- FastAPI 0.100
- pytest 7.x

(pyproject.toml has python = ">=3.12", fastapi = "^0.115", pytest = ">=8.0" —
 agent will generate 3.10-compatible code missing match/case, walrus
 operator patterns, etc.)
~~~~

## Limitations

Requires parsing project dependency files (package.json, pyproject.toml, go.mod, Cargo.toml, etc.) which vary by ecosystem. Version ranges in dependency files may not map cleanly to single version numbers in instruction files. Projects using multiple language versions (e.g., CI matrix) may have legitimate differences.
