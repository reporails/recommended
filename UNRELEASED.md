# Unreleased

### Added
- [RUNTIME]: Uses rules/ test harness via `--package /recommended` (no separate runtime)
- [SKILLS]: `/generate-rule` — create recommended rule skeletons
- [SKILLS]: `/implement-rule` — implement checks, patterns, and fixtures for recommended rules
- [META]: CLAUDE.md — contributor instructions with dependency documentation and test commands
- [REGISTRY]: Coordinate map (34 rules: RRAILS + RRAILS_CLAUDE namespaces)
- [RULES]: All 34 recommended rules fully implemented — checks, patterns, and fixtures (34/34 passing)

### Fixed
- [OPENGREP]: Fixed YAML escape in no-external-doc-imports pattern (`\.` in double-quoted YAML)
- [OPENGREP]: Removed `(?s)` flag from pointers-over-copies pattern (dotall broke `{10,}` line count)
- [FIXTURES]: Fixed negative-constraints-have-alternatives pass fixture (line 28 lacked alternative keyword)
- [CHECKS]: Added `type: deterministic` to all check entries (required by test runner dispatch)

### Changed
- [FIXTURES]: Migrated from flat fixture files (tests/pass.md) to directory structure (tests/pass/CLAUDE.md)
- [RULES]: 9 GROUP A rules (previously `checks: []`) now have full deterministic pre-check patterns
- [META]: backbone.yml — added 8 missing rules to index, fixed test patterns (flat→directory), added agents/registry/docs sections
- [META]: levels.yml — added 8 unmapped rules to correct levels (3 L2, 5 L3)
- [META]: CLAUDE.md — rewritten with standard sections (initialization, navigation, efficiency)
- [META]: README.md — fixed rule count (26→34), CLI commands, license reference (CC BY-SA 4.0), coordinate format
- [META]: CHANGELOG.md — fixed retired AILS_ prefix to RRAILS_
- [META]: CI — added QA gate to release workflow (validate→qa→release), added CI workflow for branches/PRs
- [META]: Removed 18 unused .gitkeep files from non-empty test fixture directories
- [SCHEMA]: Added slug, level, targets fields to 25 rule.md frontmatters (schema compliance)
