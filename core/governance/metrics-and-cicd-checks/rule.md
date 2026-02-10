---
id: "RRAILS:G:0007"
slug: metrics-and-cicd-checks
title: Metrics and CI/CD Checks
category: governance
type: deterministic
level: L5
backed_by:
- anthropic-teams-claude-code
- osmani-ai-coding-workflow
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:G:0007:check:0001
    type: deterministic
    name: No CI workflow with instruction file checks
    severity: medium
    pattern_confidence: low
sources:
  - "https://claude.com/blog/how-anthropic-teams-use-claude-code"
see_also: [RRAILS:G:0006, RRAILS:M:0001]
---

# Metrics and CI/CD Checks

.github/workflows/*.yml with instruction file checks.

## Pattern

**Good:** CI workflow that validates CLAUDE.md on PR
**Bad:** No automated validation of instruction files
