# Acme Notification Service

Handles email and push notifications for the Acme platform.

## Tech Stack

- Python 3.12
- Celery with Redis broker
- Jinja2 for email templates
- Firebase Cloud Messaging for push

## Commands

- `make dev` — start Celery worker locally
- `make test` — run pytest suite
- `make beat` — start Celery beat scheduler

## Architecture

Async task processing with Celery. Tasks are queued by the API
service and processed by dedicated worker nodes.

1. Tasks — Celery task definitions
2. Templates — Jinja2 email templates
3. Providers — notification delivery adapters (SMTP, FCM)
4. Config — environment-specific settings

## Constraints

- NEVER send notifications synchronously in request handlers
- NEVER hardcode email addresses — use config templates
- ALWAYS include an unsubscribe link in marketing emails
- ALWAYS log delivery status for every notification attempt

## Retry Strategy

Failed notifications are retried with exponential backoff:
- 1st retry: 60 seconds
- 2nd retry: 5 minutes
- 3rd retry: 30 minutes
- After 3 failures: move to dead-letter queue

## Monitoring

Celery Flower dashboard at `/flower` shows queue depth, worker
status, and task success rates. Alerts fire when queue depth
exceeds 10,000 or failure rate exceeds 5%.
