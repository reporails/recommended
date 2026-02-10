# Acme Web App

Backend service for the Acme platform.

## Tech Stack

- Python 3.12
- FastAPI
- PostgreSQL 16
- Redis for caching

## Commands

- `make dev` — start local development server
- `make test` — run pytest suite
- `make lint` — run ruff and mypy
- `make migrate` — apply database migrations

## Architecture

The service follows a layered design:

1. Routes — HTTP endpoint definitions
2. Services — business logic layer
3. Repositories — data access layer
4. Models — SQLAlchemy ORM definitions

## Constraints

- NEVER commit database credentials — use environment variables
- NEVER modify migration files after they have been applied to staging
- ALWAYS write tests for new endpoints before merging
- ALWAYS validate request payloads with Pydantic models

## Deployment

Deployed via GitHub Actions to AWS ECS. Staging deploys on every push
to the `develop` branch. Production deploys require a tagged release.

## Testing

Use pytest with the `--tb=short` flag for concise tracebacks.
Integration tests require a running PostgreSQL instance (see docker-compose.yml).

Run `make coverage` to generate an HTML coverage report.
