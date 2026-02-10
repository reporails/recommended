# Acme CLI Tool

Command-line interface for managing Acme platform resources.

## Tech Stack

- Go 1.22
- Cobra for CLI framework
- Viper for configuration

## Commands

- `make build` — compile binary to `./bin/acme`
- `make test` — run go test with race detector
- `make install` — install to $GOPATH/bin

## Architecture

The CLI follows the Cobra command tree pattern:

```
acme
  deploy — push artifacts to target environment
  config — manage local configuration
  status — show current deployment status
  logs   — stream logs from running services
```

Each command lives in `cmd/<name>.go` with its flags and run function.

## Constraints

- NEVER hardcode environment URLs — read from config file
- NEVER skip error handling — wrap and return all errors
- ALWAYS use structured logging (slog package)
- ALWAYS validate flags before executing commands

## Configuration

Config file at `~/.acme/config.yaml` stores default values.
Flags override config values. Environment variables override both.

## Testing

Unit tests use the standard `testing` package. Integration tests
require a running backend (tagged with `//go:build integration`).

Run `make test-integration` to include integration tests.

## Release

Releases are built with GoReleaser. Tag a commit with `vX.Y.Z`
and push to trigger the release pipeline.
