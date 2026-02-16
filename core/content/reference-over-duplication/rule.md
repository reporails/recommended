---
id: RRAILS:C:0002
slug: reference-over-duplication
title: Reference External Content Over Duplication
category: content
type: deterministic
level: L2
backed_by:
- enterprise-claude-usage
- instruction-limits-principles
targets: '{{instruction_files}}'
checks:
- id: RRAILS.C.0002.file-exists
  type: mechanical
  severity: medium
  name: file-exists
  check: file_exists
- id: RRAILS.C.0002.inline-code-block
  type: deterministic
  severity: medium
  name: inline-code-block
---

# Reference External Content Over Duplication

Root instruction files SHOULD reference external files by path rather than duplicating code snippets or detailed content inline, because duplicated content becomes stale and wastes context tokens

## Pass / Fail

### Pass

~~~~markdown
## Style Guide

See src/styles/README.md for component styling conventions.
For API error handling patterns, see src/api/errors.ts:15-30.
~~~~

### Fail

~~~~markdown
## Style Guide

```tsx
// Always use this pattern for styled components:
const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
`;
```

(This code snippet will drift from the actual codebase)
~~~~

## Limitations

Can detect inline code blocks and check for file references but cannot verify that referenced files exist or are up to date. Short, stable examples (like error response shapes) may be worth inlining.
