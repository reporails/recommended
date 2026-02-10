---
id: "RRAILS_CLAUDE:S:0003"
slug: universal-in-claude-md-targeted-in-rules
title: Universal Rules in CLAUDE.md, Domain Rules in .claude/rules/
category: structure
type: semantic
level: L3
backed_by:
- instruction-limits-principles
- rules-directory-mechanics
targets: '{{instruction_files}}'
checks:
  - id: RRAILS_CLAUDE:S:0003:check:0001
    type: deterministic
    name: CLAUDE.md contains directory-specific instructions
    severity: medium
    pattern_confidence: low
question: Is domain-specific guidance in path-targeted rules rather than the
  main CLAUDE.md?
criteria:
- CLAUDE.md focuses on universal concerns (quality, routing, overview)
- Domain-specific guidance lives in .claude/rules/ with paths frontmatter
- No file-type or directory-specific instructions in main CLAUDE.md
---

# Universal Rules in CLAUDE.md, Domain Rules in .claude/rules/

CLAUDE.md must contain universal routing logic and quality standards; domain-specific guidance must use path-targeted rules in .claude/rules/.

## Pass / Fail

**Pass:** CLAUDE.md with project overview and quality standards; .claude/rules/api.md with paths: ["src/api/**"] for API conventions.
**Fail:** CLAUDE.md with 'When working on API files, use Express patterns...' inline instead of a path-targeted rule.

## Limitations

Cannot assess whether content is truly domain-specific or universal; boundary depends on project size and complexity.
