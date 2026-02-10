# Marketplace

E-commerce marketplace backend with microservices architecture.

## Tech Stack

- Go 1.22, gRPC, Protocol Buffers
- PostgreSQL 16, Redis 7
- Kubernetes with Helm charts

## Commands

- `go test ./...` — run all tests
- `make proto` — regenerate protobuf stubs
- `helm upgrade --install marketplace charts/marketplace` — deploy to cluster
- `make lint` — run golangci-lint

## Development Guidelines

When working on a feature, check the relevant service directory first.
Look at existing handlers for patterns to follow.
Keep functions small and well-tested.

## Structure

```
cmd/marketplace/    # Service entry points
internal/api/       # gRPC service implementations
internal/domain/    # Business logic and domain models
internal/store/     # Database access layer
proto/              # Protocol Buffer definitions
charts/             # Helm deployment charts
migrations/         # SQL migration files
```

## Constraints

- NEVER modify generated protobuf files directly — edit `.proto` and regenerate
- ALWAYS write table-driven tests for new Go functions
- ALWAYS run `make lint` before committing
- Keep service handlers thin — business logic belongs in `internal/domain/`
