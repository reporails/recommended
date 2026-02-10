# DataPipeline

ETL service for ingesting CSV and Parquet files into PostgreSQL.

## Tech Stack

- Python 3.12, SQLAlchemy, pandas
- PostgreSQL 16 with pgvector extension
- Docker Compose for local development

## Commands

- `pytest tests/ -v --cov=src` — run unit and integration tests
- `docker compose up -d` — start database and worker services

## Style

Use 4-space indentation for all Python files. Never use tab characters.
Maximum line length is 88 characters for code and 120 for comments.
Remove trailing whitespace from every line before committing.
Imports should be sorted alphabetically and grouped by standard library,
third-party, and local modules.

## Structure

```
src/pipeline/       # Core ETL logic
src/connectors/     # Database and API connectors
src/models/         # SQLAlchemy models
tests/unit/         # Fast unit tests (no DB)
tests/integration/  # Tests requiring running DB
config/             # Environment-specific configs
```

## Constraints

- NEVER commit database credentials to the repository
- ALWAYS use parameterized queries, never string interpolation for SQL
- ALWAYS run the full test suite before opening a pull request
- Keep indentation consistent across all files in the project
