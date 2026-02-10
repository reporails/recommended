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
Return structured error responses for all HTTP errors.
Log exceptions with full context using structlog.

## Security

Store secrets in environment variables.
Configure CORS with explicit allowed origins.
Use parameterized queries for all database operations.

## Testing

Write integration tests for all API endpoints.
Place fixtures in `tests/conftest.py` for shared setup.
Use a separate test database for integration tests.

## Git Workflow

Create branches from `main` with descriptive names.
Write conventional commit messages.
Squash merge all pull requests.

## Deployment

Use Docker Compose for local development.
Tag releases with semantic versioning.
Run database migrations before deploying the application.
