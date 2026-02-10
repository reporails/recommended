# Acme Search Service

Full-text search engine for the Acme product catalog.

## Tech Stack

- Rust (edition 2024)
- Tantivy for indexing
- Actix-web for HTTP API
- PostgreSQL for metadata

## Commands

- `cargo run` — start search server on port 9200
- `cargo test` — run unit and integration tests
- `cargo bench` — run indexing benchmarks
- `cargo clippy` — run linter

## Architecture

The service maintains an inverted index built with Tantivy.
Documents are ingested via a REST API and indexed asynchronously.

1. Handlers — HTTP request handlers
2. Index — Tantivy index management
3. Query — search query parsing and execution
4. Ingest — document ingestion pipeline

## Constraints

- NEVER block the query path with index writes — use separate threads
- NEVER return more than 100 results per query — enforce pagination
- ALWAYS validate query syntax before executing
- ALWAYS log slow queries (> 500ms) for investigation

## Index Schema

Fields: `id` (stored), `title` (text, indexed), `body` (text, indexed),
`category` (facet), `timestamp` (date, indexed).

## Performance

Target: p99 latency under 50ms for typical queries. The index
is memory-mapped for fast access. Warm-up runs during startup
pre-load the most accessed segments.

## Backup

Index snapshots are taken every 6 hours and uploaded to S3.
Full re-indexing from PostgreSQL takes approximately 45 minutes.
