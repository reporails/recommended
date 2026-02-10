# Project Instructions

## Tech Stack

- Runtime: Node.js 20 LTS
- Framework: Next.js 14 with App Router
- Database: PostgreSQL via Prisma
- Testing: Vitest + Playwright

## Code Style

Use TypeScript strict mode for all source files.
Format code with Prettier before committing.
Follow the naming conventions defined in `.eslintrc.yml`.

## Architecture

Follow the three-layer architecture: routes, services, repositories.
Keep route handlers under 50 lines — extract logic to service files.
Place shared types in `src/types/` and import from the index barrel.

## Error Handling

Define custom error classes in `src/errors/` for each domain.
Return structured error responses from all API endpoints.
Log errors with structured metadata using the shared logger.

## Testing

Write unit tests for all exported functions.
Place test files adjacent to source files with a `.test.ts` suffix.
Run `npm test` before opening a pull request.

## Git Workflow

Create feature branches from `main` with format `feat/TICKET-description`.
Write conventional commit messages.
Squash merge all pull requests.

## Dependencies

Prefer built-in Node.js APIs over third-party packages.
Use exact version pinning in `package.json`.

## Deployment

Use Docker Compose for local development.
Tag releases with semantic versioning.
Run database migrations before deploying the application.
