# MyApp

E-commerce platform built with Python and React.

## Commands

- `make test` -- run all tests
- `make lint` -- check code style

## Conventions

NEVER commit directly to main. ALWAYS create a feature branch.
ALWAYS run tests before opening a PR.

## API Guidelines

When working on src/api/ endpoints, follow REST conventions:
- Use plural resource names
- Return proper HTTP status codes
- Validate request bodies with Pydantic

## Frontend Rules

When editing src/frontend/ components, follow these patterns:
- Use functional components with hooks
- Keep components under 200 lines
- Co-locate tests with components

## Testing

For .py files, use pytest with fixtures.
For .ts files, use vitest with testing-library.
In tests/ directory, group by feature not by type.
