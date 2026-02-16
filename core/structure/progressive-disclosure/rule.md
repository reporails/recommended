---
id: RRAILS:S:0002
slug: progressive-disclosure
title: Progressive Disclosure Through File Organization
category: structure
type: deterministic
level: L2
backed_by:
- enterprise-claude-usage
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.S.0002.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.S.0002.has-required-sections
  type: deterministic
  severity: medium
  name: has-required-sections
- id: RRAILS.S.0002.no-anti-sections
  type: deterministic
  severity: medium
  name: no-anti-sections
---

# Progressive Disclosure Through File Organization

Projects SHOULD organize task-specific or domain-specific instructions in separate referenced files rather than embedding everything in the root instruction file

## Pass / Fail

### Pass

~~~~markdown
## Resources

For database work, see docs/database.md
 For API conventions, see docs/api-patterns.md
For deployment, see docs/deploy.md
~~~~

### Fail

~~~~markdown
## Database

(200 lines of schema conventions)

## API Patterns

(150 lines of endpoint conventions)

## Deployment

 (100 lines of deployment steps)

All in one root file that loads every session
~~~~

## Limitations

Can detect references to external files but cannot verify the referenced files exist or contain useful content. Some small projects legitimately keep everything in one file.
