---
id: "RRAILS_CLAUDE:M:0001"
slug: rule-snippet-length
title: Rule Snippet Length
category: maintenance
type: semantic
level: L4
backed_by: []
targets: '{{supplementary_files}}'
checks:
  - id: RRAILS_CLAUDE:M:0001:check:0001
    type: deterministic
    name: Rule file body exceeds 40 lines (excluding frontmatter)
    severity: medium
    pattern_confidence: high
  - id: RRAILS_CLAUDE:M:0001:check:0002
    type: deterministic
    name: Rule file paths scope matches many files
    severity: medium
    pattern_confidence: high
question: "Is this rule file justified in its length and scope?"
criteria:
  - File is focused on single concern
  - Length is necessary for completeness (cannot trim without losing value)
  - Broad scope is intentional (content applies to all matched files)
  - Cannot be reasonably split without fragmenting the topic
sources: []
see_also: [S1, S2]
---

# Rule Snippet Length

Rule files that are long or broadly scoped consume tokens on every matched file operation.

## Pattern

**Good:** Focused 30-line rule scoped to specific paths
**Bad:** 180-line reference doc scoped to all rule files
