# Project Instructions

## Code Style

Use TypeScript strict mode for all source files.
Format code with Prettier using the shared config.
Follow the naming conventions defined in `.eslintrc.yml`.

## Security Constraints

NEVER commit secrets or API keys to the repository.
NEVER disable CORS in production.
NEVER store passwords in plain text.

## Error Handling

NEVER return raw stack traces in API responses.
NEVER swallow exceptions silently.
NEVER use string concatenation for SQL.

## Git Workflow

NEVER force push to `main` or `develop`.
NEVER merge without CI passing.
NEVER rewrite shared branch history.

## Deployment

NEVER deploy directly to production.
NEVER skip database backup before migrations.

## Testing

NEVER commit with failing tests.
NEVER mock what you do not own.
