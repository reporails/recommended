---
name: implement-rule
description: Implement checks, patterns, and fixtures for an existing recommended rule skeleton
---

# /implement-rule

Implement checks, OpenGrep patterns, and test fixtures for an existing recommended rule that has a skeleton but empty `checks: []`.

## Usage

```
/implement-rule <coordinate> [--agent <name>] [--dry-run]
```

- `<coordinate>`: Rule coordinate (e.g., RRAILS:C:0008, RRAILS_CLAUDE:S:0002)
- `--agent <name>`: Agent for template var resolution (default: `claude`)
- `--dry-run`: Show what would be generated without writing files

## Examples

```
/implement-rule RRAILS:C:0001
/implement-rule RRAILS_CLAUDE:S:0001 --agent claude
/implement-rule RRAILS:E:0002 --dry-run
```

## Workflow

### 1. Locate

Resolve rule directory from coordinate:
1. Look up slug in `registry/coordinate-map.yml`
2. Determine category from coordinate letter: S=structure, C=content, E=efficiency, M=maintenance, G=governance
3. For core rules: `core/{category}/{slug}/`
4. For agent rules: `agents/{agent}/rules/{slug}/`

### 2. Read

Parse `rule.md` frontmatter and body:
- Extract: `id`, `type`, `level`, `targets`, `question`, `criteria`, Pass/Fail examples from body
- **Abort if `checks:` is already non-empty** — rule is already implemented
- Identify the **violation class**: what structural or content pattern makes an instruction file FAIL this rule?

### 3. Analyze — Pattern Design

Follow the same pattern design principles as rules/ (core):

| Field | Design role |
|-------|------------|
| `title` | Names the concern |
| `question` | Defines the evaluation question |
| `criteria` | Lists observable properties of a PASSING file — invert for violations |
| Pass example | Structural pattern that makes it good |
| Fail example | Structural pattern that makes it bad |

**Think in terms of violation structure, not fixture discrimination.**

#### Mechanical rules
- Select check function(s) from the registered set (see rules/runtime/checks.py)
- Derive `args` from rule description

#### Deterministic rules
- Design a pattern that matches the structural signature of the violation
- **NEVER use presence-then-negate as the primary strategy**
- `negate: true` only when no structural signature exists
- Use `{{instruction_files}}` in paths

#### Semantic rules
- Deterministic pre-check to surface candidates, then semantic evaluation
- Pre-check matches violation indicators, not rule topic keywords

### 4. Generate checks

Write `checks:` array in `rule.md` frontmatter:
- IDs follow `{RULE_ID}:check:{SLOT}` format
- Check types must not exceed rule type ceiling
- Severity from rule context

### 5. Generate patterns

For deterministic/semantic rules, write OpenGrep rules in `rule.yml`.
For mechanical-only rules: leave `rule.yml` as `rules: []`.

### 6. Generate fixtures

Fixtures simulate REAL instruction files (30-80 lines).

**Pass fixture** (`tests/pass/`): Realistic file satisfying the rule.
**Fail fixture** (`tests/fail/`): Realistic file with one specific violation.

Remove `.gitkeep` from directories that now have real fixture content.

### 7. Verify

Run the test harness from the rules/ runtime:
```bash
docker compose -f ../rules/runtime/docker-compose.yml run test --package /recommended --rule <coordinate>
```

## Dependencies

This package depends on rules/ (core) for:
- **Runtime**: `../rules/runtime/` — test runner, checks.py, Docker harness
- **Agent configs**: `../rules/agents/{agent}/config.yml` — template variable resolution
- **Schemas**: `../rules/schemas/rule.schema.yml` — check field definitions

## Reference

- Schema: `../rules/schemas/rule.schema.yml`
- Patterns: `../rules/docs/opengrep-guide.md`
- Runtime: `../rules/runtime/`
- Agent config: `../rules/agents/{agent}/config.yml`
- Registry: `registry/coordinate-map.yml`

## Severity Mapping

| rule.md severity | rule.yml severity |
|------------------|-------------------|
| critical | ERROR |
| high | WARNING |
| medium | WARNING |
| low | WARNING |
