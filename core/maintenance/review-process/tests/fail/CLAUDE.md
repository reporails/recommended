# Acme Notification Service

Handles email and push notifications for the Acme platform.

## Review Process

All changes to this service require a pull request with at least
one approval from the notifications team.

### CODEOWNERS

The `CODEOWNERS` file enforces review requirements:
- `src/tasks/` requires approval from @notifications-team
- `src/templates/` requires approval from @marketing-team
- `config/` requires approval from @platform-team

### Change Review Checklist

Before requesting review:
1. Run the full test suite locally
2. Verify notification templates render correctly
3. Check rate limiting configuration
4. Update the changelog

## Commands

- `make dev` — start Celery worker locally
- `make test` — run pytest suite
- `make beat` — start Celery beat scheduler

## Architecture

Async task processing with Celery. Tasks are queued by the API
service and processed by dedicated worker nodes.

## Constraints

- NEVER send notifications synchronously in request handlers
- NEVER hardcode email addresses — use config templates
- ALWAYS include an unsubscribe link in marketing emails

## Retry Strategy

Failed notifications are retried with exponential backoff.
After 3 failures: move to dead-letter queue.
