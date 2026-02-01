# Reporails Recommended Rules

26 opinionated rules that validate the instructions you give to AI coding agents — files like `CLAUDE.md`, `.cursorrules`, and `copilot-instructions.md`. Supplementary to the [core rules](https://github.com/reporails/rules).

**Version:** 0.0.1

## Quick start

```bash
# No install needed — validates your agent instructions with recommended rules included
npx @reporails/cli check --with-recommended
```

You'll get a score, capability level, and actionable findings. Already have the [CLI](https://github.com/reporails/cli) installed? Run `ails check --with-recommended`.

## What these rules check

Content clarity, governance, efficiency, and maintenance of your agent instruction files:

```
core/
  structure/     # AILS_S1: Backbone structure
  content/       # AILS_C1-C7: Clarity, explicitness, style
  efficiency/    # AILS_E1-E6: Token optimization, context management
  governance/    # AILS_G1-G7: Ownership, security, CI
  maintenance/   # AILS_M1-M2: Review, change management

agents/
  claude/rules/  # AILS_CLAUDE_S1, AILS_CLAUDE_M1, AILS_CLAUDE_G1

docs/            # Evidence sources backing each rule
```

## Core vs recommended

[Core rules](https://github.com/reporails/rules) are objective, measurable checks (file size, required sections, valid links). Recommended rules are opinionated best practices backed by methodology and research — they improve instruction quality but reflect specific approaches.

| | Core | Recommended |
|--------|------|-------------|
| Prefix | `S1`, `CLAUDE_S1` | `AILS_S1`, `AILS_CLAUDE_S1` |
| Nature | Objective | Opinionated |
| Default | Always on | Opt-in |

## Contributing

See [CONTRIBUTING.md](https://github.com/reporails/rules/blob/main/CONTRIBUTING.md) in the core repo.

## License

[CC BY 4.0](LICENSE)
