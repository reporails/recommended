# Project Instructions

## Code Style

Follow the Airbnb JavaScript style guide with project-specific overrides.
Use meaningful variable names that describe the data they hold.
Name React components in PascalCase and utility functions in camelCase.
Formatting is handled by Prettier — see `.prettierrc` for configuration.

## Architecture Patterns

Use the repository pattern for data access layers.
Separate business logic from HTTP handlers using service classes.
Keep controller methods thin — delegate to services for logic.

## Naming Conventions

Prefix React hooks with `use` (e.g., `useAuth`, `usePagination`).
Name test files with `.test.ts` suffix adjacent to the module under test.
Use `SCREAMING_SNAKE_CASE` for environment variable names.

## File Organization

Group files by feature, not by type.
Place shared utilities in `src/lib/` and export from barrel files.
Keep components under 300 lines — extract sub-components when they grow.

## Error Handling

Define custom error classes in `src/errors/` for each domain.
Return structured error responses from all API endpoints.
Log errors with structured metadata using the shared logger.

## Dependencies

Prefer built-in Node.js APIs over third-party packages.
Use exact version pinning in `package.json`.
Run `npm audit` weekly and address critical findings within 48 hours.

## Git Workflow

Branch from `main` with descriptive names: `feat/`, `fix/`, `chore/`.
Write conventional commit messages.
Squash merge all pull requests.
