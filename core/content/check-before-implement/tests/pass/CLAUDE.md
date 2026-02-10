# Project Instructions

## Development Workflow

Before creating new utilities, search the codebase for existing implementations.
Use grep or the IDE's global search to find similar functions before writing new ones.

## Code Style

Use TypeScript strict mode for all source files.
Format code with Prettier before committing.
Follow the naming conventions defined in `.eslintrc.yml`.

## Architecture

Follow the three-layer architecture: routes, services, repositories.
Keep route handlers under 50 lines — extract logic to service files.
Place shared types in `src/types/` and import from the index barrel.

## Adding New Features

1. Search for existing implementations that solve the same problem
2. Check `src/lib/` for shared utilities before duplicating logic
3. Look for similar patterns in adjacent modules
4. Only create new code after confirming nothing reusable exists
5. Write tests before or alongside the implementation

## Error Handling

Reuse error classes from `src/errors/` — check for existing error types before creating new ones.
Find existing logging patterns in `src/utils/logger.ts` before adding custom logging.

## Dependencies

Before adding a new package, search for existing solutions in the monorepo.
Check if built-in Node.js APIs cover the use case.

## Testing

Write unit tests for all exported functions.
Place test files adjacent to source files with a `.test.ts` suffix.
Run `npm test` before opening a pull request.

## Git Workflow

Create feature branches from `main` with format `feat/TICKET-description`.
Write conventional commit messages.
Squash merge all pull requests.
