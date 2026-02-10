# Project Instructions

## Development Workflow

Make one change at a time. Test after each file modification before proceeding to the next.
Work incrementally: implement, test, verify, then move on.

## Code Style

Use TypeScript strict mode for all source files.
Format code with Prettier before committing.
Follow the naming conventions defined in `.eslintrc.yml`.

## Architecture

Follow the three-layer architecture: routes, services, repositories.
Keep route handlers under 50 lines — extract logic to service files.
Place shared types in `src/types/` and import from the index barrel.

## Feature Development

When implementing a feature:
1. Write the interface first
2. Implement the core logic — test after each change
3. Add error handling
4. Write integration tests
5. Update documentation

Do not build the entire feature before testing. Take small steps and verify each one.

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
Make small, focused commits — each commit should pass all tests.
Squash merge all pull requests.

## Deployment

Use Docker Compose for local development.
Tag releases with semantic versioning.
