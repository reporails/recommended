# Project Instructions

## Code Quality

Use TypeScript strict mode for all source files.
Format code with Prettier before committing.

## Security Constraints

Never commit API keys or secrets to the repository — use environment variables instead.
Don't disable CORS in production — configure allowed origins in `config/cors.ts`.
Avoid using `eval()` or `Function()` constructors — use structured data parsing instead.

## Error Handling

Never return raw stack traces in API responses — wrap errors in `ApiError` schema.
Don't catch and swallow exceptions silently — log with context, then re-throw or handle.
Avoid generic error messages — prefer specific codes from `src/errors/codes.ts`.

## Git Workflow

Never force push to `main` or `develop` — use feature branches instead.
Don't merge without passing CI — wait for the green check.
Avoid large PRs over 500 lines — prefer smaller, focused changesets instead.

## Dependencies

Never add dependencies without checking the monorepo first — use workspace search instead.
Don't use deprecated packages — prefer actively maintained replacements.
Avoid packages with no TypeScript types — use `@types/` or typed alternatives instead.

## Deployment

Never deploy to production without staging verification — use the deployment checklist.
Don't skip database backups before migrations — run `scripts/backup.sh` first.
Avoid manual deployments — use the CI pipeline rather than running scripts locally.

## Testing

Never skip integration tests before merging — use `npm run test:integration`.
Don't mock third-party services inline — use shared fixtures from `tests/mocks/`.
