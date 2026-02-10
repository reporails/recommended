# Project Instructions

## Code Quality

Use TypeScript strict mode for all source files.
Format code with Prettier before committing.

## Security Constraints

Never commit API keys or secrets to the repository.
Don't disable CORS in production.
Avoid using `eval()` or `Function()` constructors.

## Error Handling

Never return raw stack traces in API responses.
Don't catch and swallow exceptions silently.
Avoid generic error messages.

## Git Workflow

Never force push to `main` or `develop`.
Don't merge without passing CI.
Avoid large PRs over 500 lines.

## Dependencies

Never add dependencies without checking for existing alternatives.
Don't use deprecated packages.
Avoid packages with no TypeScript types.

## Deployment

Never deploy to production without staging verification.
Don't skip database backups before migrations.
Avoid manual deployments.

## Testing

Never skip integration tests before merging.
Don't mock third-party services inline.
