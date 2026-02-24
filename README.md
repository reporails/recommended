# Reporails Recommended Rules

Opinionated best-practice rules that validate the instructions you give to AI coding agents — files like `CLAUDE.md`, `.cursorrules`, and `copilot-instructions.md`. Supplementary to the [core rules](https://github.com/reporails/rules).

> **0.3.0 is a transitional release.** All rules have been removed while packaging is reworked. Rules will be re-added under the new structure.

## Quick start

```bash
# Recommended rules are included by default
ails check
```

You'll get a score, capability level, and actionable findings. To opt out, set `recommended: false` in `.reporails/config.yml`.

## Core vs recommended

[Core rules](https://github.com/reporails/rules) are objective, measurable checks (file size, required sections, valid links). Recommended rules are opinionated best practices backed by methodology and research — they improve instruction quality but reflect specific approaches.

| | Core | Recommended |
|--------|------|-------------|
| Prefix | `CORE:S:0001`, `CLAUDE:S:0001` | `RRAILS:S:0001` |
| Nature | Objective | Opinionated |
| Default | Always on | Included by default, opt-out via config |

## Coordinate stability

Coordinates may be reassigned to different rules during pre-1.0 development. Tombstone tracking for retired coordinates begins at 0.5.0. From that version onward, removed coordinates will be recorded in `registry/tombstones.yml` and never reused.

## Contributing

See [CONTRIBUTING.md](https://github.com/reporails/rules/blob/main/CONTRIBUTING.md) in the core repo.

## License

[CC BY-SA 4.0](LICENSE)