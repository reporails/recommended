# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## 0.3.0 — 2026-02-24

**Breaking**: All 18 rules removed for packaging overhaul. Package is empty — rules will be re-added under the new packaging structure.

### Removed
- All 18 rules, levels.yml, docs/sources.yml, agent configs cleared for packaging overhaul

### Changed
- backbone.yml, coordinate-map.yml, CLAUDE.md, README.md stripped of stale references
- release.yml tarball updated for empty package state

## 0.2.0 — 2026-02-16

**Breaking**: Complete rule set overhaul. Coordinates reassigned — 0.1.0 coordinate→slug mappings are invalid in 0.2.0. All rules rewritten with evidence-backed definitions and standardized check schemas.

### Added
- 3 new rules: S:0002 (progressive-disclosure), S:0003 (scope-appropriate-instruction-placement), M:0003 (accurate-version-references)
- Fail test fixtures for all 18 rules

### Removed
- All 5 RRAILS_CLAUDE agent-specific rules — namespace emptied (Claude-specific rules out of scope for agent-agnostic package)
- All 7 RRAILS:G governance rules — category emptied (organizational policy, not instruction quality)
- 5 content rules: C:0010 (negative-constraints-have-alternatives), C:0011 (pointers-over-copies), C:0012 (check-before-implement), C:0013 (iterate-incrementally), C:0014 (specify-interaction-language)
- 2 efficiency rules: E:0005 (grep-efficiency), E:0006 (context-window-awareness)

### Changed
- **34 → 18 rules**: focused on instruction file quality (content, structure, efficiency, maintenance)
- All 15 retained coordinates reassigned to new rules with updated slugs, definitions, and checks
- levels.yml rebuilt: 18 rules across L2 (5), L3 (7), L4 (6); L5–L6 empty (no recommended contributions)
- Coordinate map simplified: flat YAML, alphabetical within categories
- sources.yml trimmed to 12 evidence sources backing current rule set
- 8 semantic/mechanical rules use stub rule.yml (no OpenGrep patterns — checked via M/D chain)

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
