---
id: RRAILS:C:0001
slug: universal-applicability
title: Universal Applicability of Root Instructions
category: content
type: semantic
level: L2
backed_by:
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0001.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0001.has-structural-sections
  type: deterministic
  severity: medium
  name: has-structural-sections
- id: RRAILS.C.0001.no-anti-sections
  type: deterministic
  severity: medium
  name: no-anti-sections
- id: RRAILS.C.0001.semantic-evaluation
  type: semantic
  severity: medium
  name: semantic-evaluation
question: Does this root instruction file contain sections that only apply to 
  specific, infrequent tasks?
criteria:
- All sections in root file are relevant to the majority of coding sessions
- Task-specific instructions (migrations, deployment, one-time setup) are in 
  separate files
- No section applies only to a narrow, infrequent scenario
choices:
- value: pass
  label: Passes
- value: fail
  label: Fails
pass_value: pass
---

# Universal Applicability of Root Instructions

Root instruction files SHOULD NOT include task-specific instructions that only apply to narrow scenarios, because every line competes for attention in every session

## Pass / Fail

### Pass

~~~~markdown
## Code Style

- Use named exports
- Error responses use {error, code} shape

(These apply to every coding session)
~~~~

### Fail

~~~~markdown
## Database Migration

When creating a new migration, run prisma migrate dev --name <name> and update the seed file at prisma/seed.ts with test data matching the new schema.

(This only matters during migration work but loads every session)
~~~~

## Limitations

Requires judgment about what constitutes 'universally applicable.' Some instructions may appear narrow but apply frequently enough to warrant inclusion. Cannot assess usage frequency of different instruction sections.
