# Acme Search Service

Full-text search engine for the Acme product catalog.

## Change Process

All modifications to the search service follow a structured
change process to minimize risk:

### Approval Matrix

| Change Type | Required Approval |
|-------------|-------------------|
| Bug fix | 1 team member |
| New feature | Team lead + QA |
| Schema change | Architecture board |
| Config change | DevOps lead |

### Breaking Changes

Any breaking change to the search API must:
1. Be announced 2 sprints in advance
2. Include a migration guide for consumers
3. Maintain backward compatibility for at least one release cycle

### Deprecation Policy

Deprecated endpoints are marked with a `Sunset` header and
removed after 90 days. Clients receive warnings in API responses
during the deprecation window.

## Commands

- `cargo run` — start search server on port 9200
- `cargo test` — run unit and integration tests
- `cargo bench` — run indexing benchmarks

## Constraints

- NEVER block the query path with index writes — use separate threads
- NEVER return more than 100 results per query — enforce pagination
- ALWAYS validate query syntax before executing

## Performance

Target: p99 latency under 50ms for typical queries.
