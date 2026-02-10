# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## 0.1.0 — 2026-02-10

### Added
- 8 new rules: RRAILS:C:0008, C:0010–C:0014, RRAILS_CLAUDE:S:0002, S:0003 (34 total, all passing)
- All 34 rules fully implemented with checks, OpenGrep patterns, and test fixtures
- Coordinate map registry (RRAILS + RRAILS_CLAUDE namespaces)
- Test runtime via rules/ harness (`--package /recommended`)
- Claude skills: `/generate-rule`, `/implement-rule`, `/add-changelog-entry`
- CLAUDE.md with standard sections (initialization, backbone enforcement, navigation, efficiency)
- CI workflow for version branches; release workflow with QA gate (validate → qa → release)
- VERSION file as release trigger (matches rules/ pattern)

### Fixed
- OpenGrep patterns: YAML escape (`\.` in double-quoted), `(?s)` dotall breaking line counts
- Test fixtures: directory structure (tests/pass/, tests/fail/), missing alternative keywords
- All check entries have required `type: deterministic` field

### Changed
- RRAILS namespace migration complete (AILS_ prefix retired throughout)
- All 34 rule.md frontmatters schema-compliant (slug, level, targets fields added)
- backbone.yml: coordinate-map is single source of truth (redundant index removed)
- levels.yml: all 34 rules mapped to correct levels (L2–L6)
- README.md: accurate rule counts, CLI commands, CC BY-SA 4.0 license
- Release workflow: VERSION-based trigger replaces tag-based

## 0.0.1 — 2026-01-31

### Added
- Initial release: 26 recommended rules split from reporails/rules
- RRAILS_ namespace for all rules (RRAILS:S:0001, RRAILS:C:0001, etc.)
- Claude agent severity overrides (RRAILS:E:0002, RRAILS:E:0004, RRAILS:E:0005)
- Supplementary levels.yml with RRAILS_ rule mappings
