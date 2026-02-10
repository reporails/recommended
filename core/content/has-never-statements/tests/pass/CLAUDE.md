# Project Instructions

## Code Style

Use TypeScript strict mode for all source files.
Format code with Prettier using the shared config.
Follow the naming conventions defined in `.eslintrc.yml`.

## Security Constraints

NEVER commit secrets or API keys to the repository — use environment variables instead.
NEVER disable CORS in production — configure allowed origins explicitly.
NEVER store passwords in plain text — use bcrypt with a cost factor of 12.

## Error Handling

NEVER return raw stack traces in API responses — wrap errors in structured schemas.
NEVER swallow exceptions silently — log them with full context using the logger.
NEVER use string concatenation for SQL — use parameterized queries instead.

## Git Workflow

NEVER force push to `main` or `develop` — use feature branches for all work.
NEVER merge without CI passing — the pipeline must be green before approval.
NEVER rewrite shared branch history — prefer revert commits over interactive rebase.

## Deployment

NEVER deploy directly to production — always go through staging first.
NEVER skip database backup before migrations — use the pre-migration script.

## Testing

NEVER commit with failing tests — run `npm test` before every push.
NEVER mock what you do not own — prefer integration tests for third-party APIs.
