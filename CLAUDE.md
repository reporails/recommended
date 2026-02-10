# Reporails Recommended Package
<!-- Last updated: 2026-02-10 -->

Opinionated best-practice rules for AI agent instruction files. Depends on [reporails/rules](https://github.com/reporails/rules) (core).

## Tech Stack

- Markdown documentation
- YAML schemas and configuration (referenced from rules/)
- OpenGrep patterns for detection
- No application code — framework only

## Initialization

Read these files before searching or modifying anything:

1. Read `.reporails/backbone.yml` for project structure and path resolution
2. Read `registry/coordinate-map.yml` for coordinate-to-slug mappings
3. Read `.claude/rules/` for context-specific constraints on the current task

## Dependency

This package requires core (rules/) for schemas, agent configs, and the test runtime. Both repos must be available locally:

```
reporail/
  rules/          # Core — schemas, runtime, agent configs
  recommended/    # This package — recommended rules
```

## Structure

Defined in `.reporails/backbone.yml` — the single source of truth for project topology, paths, and registry locations.

**BEFORE** running `find`, `grep`, `ls`, or glob to locate project files, you **MUST** read `.reporails/backbone.yml` first. All registry paths, rule directories, agent configs, and doc locations are mapped there. You **MUST NOT** use exploratory commands to discover paths that the backbone already provides.

```
core/{structure,content,efficiency,governance,maintenance}/  # Recommended rules
  {slug}/                                                    # Each rule in own directory
    rule.md                                                  # Rule definition
    rule.yml                                                 # OpenGrep patterns
    tests/                                                   # Test fixtures
      pass/                                                  # Simulated project that passes
      fail/                                                  # Simulated project that fails
agents/{claude}/rules/                                       # Agent-specific recommended rules
registry/                                                    # Coordinate map, tombstones
docs/                                                        # Documentation
.claude/{skills/}                                            # Claude config
```

## Commands

- List all rules: `find core agents -name "rule.md" | grep -v tests`
- List rule directories: `find core agents -name "rule.yml" -exec dirname {} \;`

### Test Harness

Tests run via the core runtime with `--package`:

```bash
# Build test image (from rules/)
docker compose -f ../rules/runtime/docker-compose.yml build

# Run recommended rules (alongside core)
docker compose -f ../rules/runtime/docker-compose.yml run test --package /recommended

# Run one recommended rule
docker compose -f ../rules/runtime/docker-compose.yml run test --package /recommended --rule RRAILS:C:0001

# Run core rules only (no recommended)
docker compose -f ../rules/runtime/docker-compose.yml run test
```

## Coordinate Namespaces

| Prefix | Scope |
|--------|-------|
| `RRAILS` | Core recommended (agent-agnostic) |
| `RRAILS_CLAUDE` | Claude-specific |
| `RRAILS_CODEX` | Codex-specific (reserved) |

## Navigation

Key paths:
- @core/ — Recommended rules by category (structure, content, efficiency, governance, maintenance)
- @agents/ — Agent-specific rules (5 Claude rules)
- @registry/ — Coordinate map, tombstones
- @docs/ — Source registry
- @levels.yml — Level-to-rule mappings

## Efficiency

- Read files based on purpose: full for EDIT, partial for UNDERSTAND
- Reference from memory instead of re-reading unchanged files during a session
- Use `files_with_matches` mode and `head_limit` to cap search results
- For rule work, start with `.claude/rules/` instructions

## Shared Resources

Agent-agnostic knowledge lives in `.shared/`:

- `.shared/knowledge/` — Domain reference (changelog format, validation)

Skills in `.claude/skills/` are entry points that reference shared content.

## Skills

Skills in `.claude/skills/` — each has a SKILL.md with workflow instructions.

| Skill | Purpose |
|-------|---------|
| `/generate-rule` | Create recommended rule skeleton |
| `/implement-rule` | Implement checks, patterns, and fixtures |
| `/add-changelog-entry` | Add changelog entry to UNRELEASED.md |

## Constraints

- NEVER duplicate schemas — reference `../rules/schemas/` instead
- NEVER hardcode agent paths in core rules — use `{{instruction_files}}`
- NEVER read CHANGELOG.md — use UNRELEASED.md instead
- NEVER execute destructive or irreversible operations without explicit user confirmation
- ALWAYS create both rule.md and rule.yml for each rule
- ALWAYS create tests/pass/ and tests/fail/ fixture directories
- ALWAYS update registry/coordinate-map.yml when adding or removing rules
- ALWAYS update UNRELEASED.md when modifying rules
- ALWAYS resolve paths from `.reporails/backbone.yml` before using exploratory commands
