---
id: "RRAILS:C:0010"
slug: negative-constraints-have-alternatives
title: Negative Constraints Provide Alternatives
category: content
type: semantic
level: L3
backed_by:
- enterprise-claude-usage
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0010:check:0001
    type: deterministic
    name: Negative constraint without positive alternative
    severity: medium
    pattern_confidence: medium
question: Do negative constraints ('never', 'don't', 'avoid') include
  alternative actions?
criteria:
- Each prohibition is paired with what to do instead
- Alternatives are concrete and actionable, not just 'find another way'
---

# Negative Constraints Provide Alternatives

Negative constraints ('never do X') must include a positive alternative action.

## Pass / Fail

**Pass:** 'Never use the --force flag; use --force-with-lease instead for safe force pushes.'
**Fail:** 'Never use the --foo-bar flag.' — no alternative provided; agent gets stuck.

## Limitations

Some prohibitions have no alternative (e.g., 'never delete production data'). Single-source backing.
