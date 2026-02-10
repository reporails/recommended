# Project Instructions

## Code Style

Use TypeScript strict mode for all source files.
Format code with `prettier --write .` before committing.
Name React components in PascalCase and hooks with `use` prefix.

## Error Handling

Wrap async route handlers with `asyncHandler()` from `src/utils/`.
Return structured error objects: `{ code, message, details }`.
Log errors to stdout in JSON format using `pino`.

## Testing

Run `npm test` before opening a pull request.
Write unit tests for all exported functions in `__tests__/` directories.
Use `msw` to mock external API calls in integration tests.

## Git Workflow

Create feature branches from `main` with format `feat/TICKET-description`.
Write commit messages in imperative mood: "Add feature" not "Added feature".
Squash merge all PRs and delete the source branch after merge.

## Deployment

Run `docker compose up --build` for local development.
Use `npm run migrate` to apply pending database migrations.
Tag releases with `npm version patch|minor|major` before deploying.

## Dependencies

Pin exact versions in `package.json` using `--save-exact`.
Run `npm audit fix` after adding new dependencies.
Prefer Node.js built-in modules over third-party alternatives.

## File Organization

Place shared types in `src/types/` and import from the index barrel.
Keep route handlers under 50 lines — extract logic to service files.
Store database queries in `src/repositories/` separate from controllers.
