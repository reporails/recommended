---
id: "RRAILS:C:0002"
slug: context-specific-content
title: Context-Specific Content
category: content
type: semantic
level: L3
backed_by:
- claude-code-memory
- instruction-limits-principles
- spec-writing-for-agents
- monorepo-claude-md-organization
- dometrain-claude-md-guide
targets: '{{instruction_files}}'
checks:
  - id: RRAILS:C:0002:check:0001
    type: deterministic
    name: Domain-specific content in root instruction file
    severity: medium
    pattern_confidence: low
question: "Is domain-specific content appropriately placed?"
criteria:
  - Root file contains general project context only
  - Domain details are in @imports or path-scoped rules
  - No API endpoints or implementation details in root
sources:
  - "https://code.claude.com/docs/en/memory"
see_also: [S2, CLAUDE_S2]
---

# Context-Specific Content

Root file is general; domain content lives in @imports or rules.

## Pattern

**Good:** Root has stack overview; API details in @docs/api.md
**Bad:** Root file with 50 lines of endpoint documentation
