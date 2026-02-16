---
id: RRAILS:C:0005
slug: testing-conventions-documentation
title: Testing Conventions Documentation
category: content
type: deterministic
level: L2
backed_by:
- agents-md-spec
- claude-code-issue-13579
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0005.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0005.has-required-sections
  type: deterministic
  severity: medium
  name: has-required-sections
- id: RRAILS.C.0005.no-anti-sections
  type: deterministic
  severity: medium
  name: no-anti-sections
---

# Testing Conventions Documentation

Instruction files SHOULD document the project's test framework, test file locations, naming patterns, and coverage expectations beyond just the test command

## Pass / Fail

### Pass

~~~~markdown
## Testing

- Framework: Jest with React Testing Library
- Test files: `*.test.tsx` next to source files
- Run: `npm test -- --coverage`
- Coverage target: 80% for new code
- Mock external services; never hit real APIs in tests
~~~~

### Fail

~~~~markdown
## Commands

- Test: `npm test`

(No information about framework, file locations, patterns, or expectations)
~~~~

## Limitations

Can detect testing-related sections and keywords but cannot verify the documentation matches actual test configuration. Small projects with trivial testing may not need this level of detail.
