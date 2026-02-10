# InfraControl

Multi-cloud infrastructure management platform with Terraform and Pulumi.

## Tech Stack

- Terraform 1.8, Pulumi (TypeScript)
- AWS, GCP multi-cloud deployment
- GitHub Actions CI/CD

## Commands

- `terraform plan -var-file=env/staging.tfvars` — preview staging changes
- `terraform apply` — apply after plan review
- `pulumi up --stack dev` — deploy development stack
- `make test` — run module unit tests with Terratest

## Development Workflow

When working on this project, look at the relevant module first.
Make sure you check the test suite passes before opening a PR.
Coordinate with the platform team for any cross-service changes.

## Structure

```
modules/aws/         # AWS Terraform modules
modules/gcp/         # GCP Terraform modules
pulumi/              # Pulumi TypeScript stacks
docs/architecture.md # High-level architecture overview
tests/               # Terratest integration tests
```

## Constraints

- NEVER apply Terraform changes without a reviewed plan
- ALWAYS tag resources with team and environment labels
- ALWAYS check the architecture doc when uncertain about module boundaries
- Run `terraform validate` and `tflint` before committing
