# Reporails Recommended Rules

34 opinionated rules that validate the instructions you give to AI coding agents — files like `CLAUDE.md`, `.cursorrules`, and `copilot-instructions.md`. Supplementary to the [core rules](https://github.com/reporails/rules).

## Quick start

```bash
# Recommended rules are included by default
ails check .
```

You'll get a score, capability level, and actionable findings. To opt out, set `recommended: false` in `.reporails/config.yml`.

## What these rules check

Content clarity, governance, efficiency, and maintenance of your agent instruction files:

```
core/
  structure/     # RRAILS:S:0001 — Backbone structure (1 rule)
  content/       # RRAILS:C:0001–C:0014 — Clarity, explicitness, style (13 rules)
  efficiency/    # RRAILS:E:0001–E:0006 — Token optimization, context management (6 rules)
  governance/    # RRAILS:G:0001–G:0007 — Ownership, security, CI (7 rules)
  maintenance/   # RRAILS:M:0001–M:0002 — Review, change management (2 rules)

agents/
  claude/rules/  # RRAILS_CLAUDE — Claude-specific rules (5 rules)

docs/            # Evidence sources backing each rule
```

## Core vs recommended

[Core rules](https://github.com/reporails/rules) are objective, measurable checks (file size, required sections, valid links). Recommended rules are opinionated best practices backed by methodology and research — they improve instruction quality but reflect specific approaches.

| | Core | Recommended |
|--------|------|-------------|
| Prefix | `CORE:S:0001`, `CLAUDE:S:0001` | `RRAILS:S:0001`, `RRAILS_CLAUDE:S:0001` |
| Nature | Objective | Opinionated |
| Default | Always on | Included by default, opt-out via config |

## Contributing

See [CONTRIBUTING.md](https://github.com/reporails/rules/blob/main/CONTRIBUTING.md) in the core repo.

## License

[CC BY-SA 4.0](LICENSE)
