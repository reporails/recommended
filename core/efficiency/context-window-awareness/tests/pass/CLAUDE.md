# NotificationService

Multi-channel notification service supporting email, SMS, and push.

## Tech Stack

- Python 3.12, FastAPI, Celery
- PostgreSQL 16, Redis 7 (broker and cache)
- SendGrid (email), Twilio (SMS), Firebase (push)
- pytest, httpx for testing

## Commands

- `pytest tests/ -v` — run all tests
- `celery -A app.worker worker --loglevel=info` — start Celery worker
- `uvicorn app.main:app --reload` — start development server
- `ruff check .` — lint Python source files

## Efficiency

- Use `files_with_matches` mode when searching for relevant modules
- Apply `head_limit` to cap results from broad pattern searches
- Read only the function signatures in large files when exploring interfaces
- For template files in `templates/`, read the specific template needed rather
  than scanning the entire directory

## Structure

```
app/
  main.py            # FastAPI application entry point
  worker.py          # Celery task definitions
  channels/          # Channel implementations (email, sms, push)
  models/            # SQLAlchemy models
  schemas/           # Pydantic request/response schemas
templates/           # Notification templates (Jinja2)
tests/
  unit/              # Fast tests without external services
  integration/       # Tests with Redis and database
config/              # Environment and channel configurations
```

## Constraints

- NEVER send notifications without user opt-in verification
- NEVER log full phone numbers or email addresses in production
- ALWAYS use Celery tasks for sending — never send synchronously in request handlers
- ALWAYS include unsubscribe links in marketing email templates
- Rate limit SMS to 1 message per user per minute
