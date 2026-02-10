# Acme CLI Tool

Command-line interface for managing Acme platform resources.

## Ownership

| Path | Owner | Contact |
|------|-------|---------|
| cmd/ | @backend-team | #backend-slack |
| pkg/ | @platform-team | #platform-slack |
| docs/ | @docs-team | #docs-slack |

## Maintainer

Primary maintainer: @jane-doe
Backup: @john-smith

For questions about the CLI architecture, contact the @platform-team
via the #platform-slack channel.

## Commands

- `make build` — compile binary to `./bin/acme`
- `make test` — run go test with race detector

## Architecture

The CLI follows the Cobra command tree pattern.
Each command lives in `cmd/<name>.go`.

## Constraints

- NEVER hardcode environment URLs — read from config file
- NEVER skip error handling — wrap and return all errors
- ALWAYS use structured logging (slog package)

## Configuration

Config file at `~/.acme/config.yaml` stores default values.
Flags override config values. Environment variables override both.

## Testing

Unit tests use the standard `testing` package. Integration tests
require a running backend.

## Release

Releases are built with GoReleaser. Tag a commit with `vX.Y.Z`
and push to trigger the release pipeline.
