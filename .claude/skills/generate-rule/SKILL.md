---
name: generate-rule
description: Generate a recommended rule skeleton with proper schema and directory structure
---

# /generate-rule

Generate a rule skeleton for the recommended package with coordinate-based ID, directory structure, and placeholder files.

## Usage

```
/generate-rule <coordinate> <scope> <title> [--agent <name>]
```

- `<coordinate>`: Rule coordinate (e.g., RRAILS:C:0015, RRAILS_CLAUDE:S:0004)
- `<scope>`: `core` or agent name (e.g., `claude`)
- `<title>`: Short title for the rule
- `--agent <name>`: Agent for path resolution (default: `claude`)

## Examples

```
/generate-rule RRAILS:C:0015 core "My Recommended Rule"
/generate-rule RRAILS_CLAUDE:S:0004 claude "Claude-Specific Recommendation"
```

## Workflow

1. Validate coordinate is not in `registry/tombstones.yml`
2. Validate coordinate slot is not already taken in `registry/coordinate-map.yml`
3. Determine category from coordinate letter (S/C/E/M/G)
4. Resolve directory path: `core/{category}/{slug}/` or `agents/{agent}/rules/{slug}/`
5. Create directory with `tests/pass/` and `tests/fail/` subdirectories
6. Generate `rule.md` with frontmatter (id, slug, title, category, type, level, targets, checks: [])
7. Generate `rule.yml` with empty rules array
8. Create `.gitkeep` in test directories
9. Update `registry/coordinate-map.yml` with new slug->coordinate entry

## Dependencies

This package depends on rules/ (core) for:
- **Schemas**: `../rules/schemas/rule.schema.yml` — field definitions and validation rules
- **Agent configs**: `../rules/agents/{agent}/config.yml` — template variable resolution
- **Sources**: `../rules/docs/sources.yml` — source IDs for `backed_by`

## Coordinate Namespaces

| Prefix | Scope |
|--------|-------|
| `RRAILS` | Core recommended rules (agent-agnostic) |
| `RRAILS_CLAUDE` | Claude-specific recommended rules |
| `RRAILS_CODEX` | Codex-specific recommended rules |

## Reference

- Schema: `../rules/schemas/rule.schema.yml`
- Registry: `registry/coordinate-map.yml` — existing coordinates
- Registry: `registry/tombstones.yml` — dead slots