---
id: RRAILS:C:0004
slug: context-aware-file-references
title: Context-Aware File References
category: content
type: deterministic
level: L2
backed_by:
- enterprise-claude-usage
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0004.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0004.bare-file-reference
  type: deterministic
  severity: medium
  name: bare-file-reference
---

# Context-Aware File References

When referencing external instruction files, root instruction files SHOULD include a brief description of WHEN to read each file, so agents only load context relevant to the current task

## Pass / Fail

### Pass

~~~~markdown
## Resources

- For database migrations or schema changes, see docs/database.md
- When debugging auth issues or seeing FooBarError, see docs/auth-troubleshooting.md
- For deployment to staging/production, see docs/deploy.md
~~~~

### Fail

~~~~markdown
## Resources

- docs/database.md
- docs/auth.md
- docs/deploy.md

(No context for when to read each file — agent either reads all of them or ignores all of them)
~~~~

## Limitations

Can detect file references and check for contextual language (when, for, if, during) but cannot verify the triggers are accurate or useful. Some agents may ignore contextual hints regardless.
