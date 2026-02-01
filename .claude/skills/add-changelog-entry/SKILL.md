---
name: add-changelog-entry
description: Add a changelog entry to UNRELEASED.md
---

# /add-changelog-entry

Automatically add a changelog entry to PROJECT_ROOT/UNRELEASED.md.

## Instructions

1. Check git diff or recent file modifications
2. Determine the area from the file path:
   - rules/*.md, rule definitions → [RULES]
   - README.md → [DOCS]
   - CLAUDE.md, backbone.yml, .claude/, .reporails/ → [META]
3. Determine the category:
   - New files/content → Added
   - Modified existing → Changed
   - Marked as deprecated/obsolete → Deprecated
   - Removed content → Removed
   - Bug fixes → Fixed
   - Security-related changes → Security
4. Write a concise description (3-7 words)
5. Append to UNRELEASED.md under the correct category section
6. Create the category section if it doesn't exist

## Format

```markdown
### [Category]
- [Area]: [Description]
```

## Categories

Added, Changed, Deprecated, Removed, Fixed, Security

## Areas

- [RULES] – Recommended rule definitions (AILS_ namespace)
- [DOCS] – README, general documentation
- [META] – CLAUDE.md, backbone.yml, repo structure

## Example

```markdown
### Added
- [RULES]: AILS_G1 rule for governance practices

### Changed
- [DOCS]: Updated README with new rule list
```

Do not ask for confirmation. Just do it.
