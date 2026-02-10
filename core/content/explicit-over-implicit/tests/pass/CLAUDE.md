# Project Instructions

## Code Style

Use 2-space indentation for all TypeScript files.
Format code with Prettier before committing.
Name React components in PascalCase and utility functions in camelCase.

## Error Handling

Return a `Result<T, Error>` type from all service functions.
Log errors with structured JSON using the `pino` logger.
Include request IDs in every log entry for traceability.

## Testing

Write unit tests for all exported functions using Vitest.
Place test files adjacent to source files with a `.test.ts` suffix.
Target 80% branch coverage as measured by `vitest --coverage`.

## Git Workflow

Create feature branches from `main` with the prefix `feat/` or `fix/`.
Write commit messages in imperative mood: "Add feature" not "Added feature".
Squash merge all PRs to keep the main branch linear.

## Dependencies

Pin exact versions in `package.json` — do not use `^` or `~` ranges.
Run `npm audit` weekly and resolve critical vulnerabilities within 48 hours.
Prefer built-in Node.js APIs over third-party packages for common tasks.

## Deployment

Run the full test suite before deploying to staging.
Use environment variables from `.env.local` for local development.
Tag releases with semantic versioning: `vMAJOR.MINOR.PATCH`.

## Documentation

Document all public API endpoints in `docs/api.md`.
Keep the README under 200 lines — link to detailed docs instead of inlining them.
Update CHANGELOG.md for every user-facing change.
