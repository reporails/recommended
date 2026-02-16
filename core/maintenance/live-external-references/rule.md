---
id: RRAILS:M:0002
slug: live-external-references
title: Live External References
category: maintenance
type: deterministic
level: L2
backed_by:
- awesome-copilot-meta-instructions
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.M.0002.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
---

# Live External References

Instruction files containing URLs SHOULD only reference accessible resources, because agents may attempt to fetch or recommend dead links to users

## Pass / Fail

### Pass

~~~~markdown
## Resources

- [React docs](https://react.dev/reference)
- [Testing guide](https://vitest.dev/guide/)

(Both URLs return 200)
~~~~

### Fail

~~~~markdown
## Resources

- [Old API docs](https://api.example.com/v1/docs)
- [Deprecated lib](https://github.com/archived/repo)

(First URL returns 404, second is archived — agent may cite dead resources)
~~~~

## Limitations

Some URLs require authentication or return different status codes from automated requests vs browsers. Rate limiting may cause false positives. Intranet URLs will always appear dead from external checkers. Check should use HEAD requests with reasonable timeout.
