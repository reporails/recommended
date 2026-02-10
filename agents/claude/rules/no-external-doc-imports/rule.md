---
id: "RRAILS_CLAUDE:S:0002"
slug: no-external-doc-imports
title: No @-Imported External Documentation
category: structure
type: deterministic
level: L2
backed_by:
- claude-md-guide
- enterprise-claude-usage
targets: '{{instruction_files}}'
checks:
  - id: RRAILS_CLAUDE:S:0002:check:0001
    type: deterministic
    name: '@-import references external documentation'
    severity: medium
    pattern_confidence: high
---

# No @-Imported External Documentation

@import syntax must not be used to embed external documentation or reference material (API docs, dependency READMEs).

## Pass / Fail

**Pass:** @imports pointing to project-internal instruction files: @docs/testing-conventions.md.
**Fail:** @node_modules/express/README.md or @docs/external-api-reference.md importing full library documentation.

## Limitations

Cannot distinguish internal instruction files from external docs by path alone; requires content inspection for borderline cases.
