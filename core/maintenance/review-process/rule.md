---
id: "RRAILS:M:0001"
slug: review-process
title: Review Process
category: maintenance
type: semantic
level: L3
backed_by:
- claude-code-memory
- anthropic-teams-claude-code
- agents-md-spec
- claude-md-optimization-study
- dometrain-claude-md-guide
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:M:0001:check:0001
    type: deterministic
    name: No PR review process documented
    severity: medium
    pattern_confidence: medium
question: "Is there a review process for instruction file changes?"
criteria:
  - PR approval documented or CODEOWNERS exists
  - Changes require review before merge
  - Review responsibility is clear
sources:
  - "https://claude.com/blog/how-anthropic-teams-use-claude-code"
see_also: [RRAILS:M:0002, RRAILS:G:0003]
---

# Review Process

PR approval process documented or CODEOWNERS exists.

## Pattern

**Good:** CODEOWNERS with @team for CLAUDE.md
**Bad:** Anyone can modify instructions without review
