# ImageProcessor

Photo processing API with on-demand thumbnail generation and CDN delivery.

## Tech

- Python 3.12, Pillow, FastAPI
- Redis for job queues
- S3-compatible object storage
- Docker for local development

## Commands

- `pytest tests/ -v --cov=src` — run unit and integration tests
- `docker compose up -d` — start Redis and MinIO locally
- `npm run lint` — check code with Ruff
- `pre-commit run --all-files` — run all pre-commit hooks

## Style

Run `ruff check .` before committing any Python changes. The Ruff configuration
in `pyproject.toml` defines all formatting and linting rules. Do not manually
enforce formatting concerns in code reviews.

For frontend files, Prettier handles all formatting automatically via the
pre-commit hook. ESLint catches logic errors only.

## Structure

```
src/processor/      # Core image processing logic
src/api/            # FastAPI route handlers
src/storage/        # S3 and CDN connectors
src/models/         # Pydantic models
tests/unit/         # Unit tests (no external services)
tests/integration/  # Tests requiring Redis and MinIO
config/             # Environment-specific configs
```

## Constraints

- NEVER commit credentials to the repository
- ALWAYS use signed URLs for S3 object access
- ALWAYS run the full test suite before opening a pull request
- Delegate all code formatting to automated tools configured in pyproject.toml
