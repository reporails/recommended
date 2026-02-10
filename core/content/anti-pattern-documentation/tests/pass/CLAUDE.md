# Project Instructions

## Tech Stack

- Language: Python 3.12
- Framework: FastAPI
- Database: PostgreSQL via SQLAlchemy
- Testing: pytest with coverage

## Code Conventions

Use type hints for all function signatures.
Follow PEP 8 naming conventions throughout.
Organize imports with `isort` and format with `black`.

## Error Handling

Raise domain-specific exceptions from `app/exceptions.py`.
NEVER return raw stack traces in API responses — wrap them in error schemas.
AVOID catching broad `Exception` types — catch specific exceptions only.

## Security

NEVER commit secrets, API keys, or credentials to the repository.
DO NOT disable CORS in production — configure allowed origins explicitly.
AVOID hardcoding configuration values — use environment variables instead.

## Testing

Write integration tests for all API endpoints.
Place fixtures in `tests/conftest.py` for shared setup.
DON'T mock the database in integration tests — use a test database.

## Git Workflow

Create branches from `main` with descriptive names.
Write conventional commit messages.
Squash merge all pull requests.

## Deployment

Use Docker Compose for local development.
Tag releases with semantic versioning.
Run database migrations before deploying the application.
