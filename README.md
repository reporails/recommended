# Reporails Recommended Rules

18 opinionated rules that validate the instructions you give to AI coding agents — files like `CLAUDE.md`, `.cursorrules`, and `copilot-instructions.md`. Supplementary to the [core rules](https://github.com/reporails/rules).

## Quick start

```bash
# Recommended rules are included by default
ails check .
```

You'll get a score, capability level, and actionable findings. To opt out, set `recommended: false` in `.reporails/config.yml`.

## What these rules check

Content quality, structure, efficiency, and maintenance of your agent instruction files:

```
core/
  structure/     # RRAILS:S:0001–S:0003 — File limits, progressive disclosure, scoping (3 rules)
  content/       # RRAILS:C:0001–C:0008 — Clarity, accuracy, conventions (8 rules)
  efficiency/    # RRAILS:E:0001–E:0004 — Token optimization, deduplication (4 rules)
  maintenance/   # RRAILS:M:0001–M:0003 — Single-concern, references, versions (3 rules)

docs/            # Evidence sources backing each rule
```

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
