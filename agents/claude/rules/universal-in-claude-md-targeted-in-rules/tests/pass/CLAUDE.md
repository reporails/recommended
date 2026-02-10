# MyApp

E-commerce platform built with Python and React.

## Project Structure

```
src/api/         # REST API endpoints
src/frontend/    # React UI components
src/models/      # Database models
tests/           # Test suites
```

## Commands

- `make test` -- run all tests
- `make lint` -- check code style
- `make build` -- production build

## Conventions

NEVER commit directly to main. ALWAYS create a feature branch.
ALWAYS run tests before opening a PR.
ALWAYS write tests for new features.
NEVER leave TODO comments without an issue number.

## Quality Standards

- All public functions must have docstrings
- Test coverage must not decrease
- PRs require at least one approval

## Domain Rules

See `.claude/rules/` for path-specific conventions.
