# Reporails Recommended Rules

Opinionated best-practice rules for AI coding agent instruction files. Supplementary to [reporails/rules](https://github.com/reporails/rules) (core rules).

**Version:** 0.2.1

## What's here

26 recommended rules covering style guidance, governance, process, and optimization patterns.

```
core/
  structure/     # AILS_S1: Backbone structure
  content/       # AILS_C1-C7: Clarity, explicitness, style
  efficiency/    # AILS_E1-E6: Token optimization, rituals
  governance/    # AILS_G1-G7: Ownership, security, CI
  maintenance/   # AILS_M1-M2: Review, change management

agents/
  claude/rules/  # AILS_CLAUDE_S1, AILS_CLAUDE_M1, AILS_CLAUDE_G1

schemas/         # Rule schema
docs/            # Sources and documentation
```

## Relationship to core

Core rules (`reporails/rules`) are objective, measurable checks. Recommended rules are opinionated best practices that improve instruction quality but reflect specific methodologies.

| Aspect | Core | Recommended |
|--------|------|-------------|
| Prefix | `S1`, `CLAUDE_S1` | `AILS_S1`, `AILS_CLAUDE_S1` |
| Nature | Objective | Opinionated |
| Default | Always on | Opt-in |

## Installation

```bash
# With the Reporails CLI
ails plugin add reporails/recommended
```

## Contributing

See [reporails/rules CONTRIBUTING.md](https://github.com/reporails/rules/blob/main/CONTRIBUTING.md) for the shared contribution process.

## License

[CC BY 4.0](LICENSE)
