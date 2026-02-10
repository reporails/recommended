# InfraControl

Multi-cloud infrastructure management platform with Terraform and Pulumi.

## Session Start

Before searching or coding, load context from the project backbone:

1. Read `.reporails/backbone.yml` for repository topology and ownership maps
2. Check the platform map in `docs/platform-map.md` for service dependencies
3. Identify the owning team for the component you intend to modify
4. Read the relevant module README before making changes

Start by reading the backbone first so you understand which Terraform modules
belong to which cloud provider and region.

## Tech Stack

- Terraform 1.8, Pulumi (TypeScript)
- AWS, GCP multi-cloud deployment
- GitHub Actions CI/CD

## Commands

- `terraform plan -var-file=env/staging.tfvars` — preview staging changes
- `terraform apply` — apply after plan review
- `pulumi up --stack dev` — deploy development stack
- `make test` — run module unit tests with Terratest

## Structure

```
modules/aws/         # AWS Terraform modules
modules/gcp/         # GCP Terraform modules
pulumi/              # Pulumi TypeScript stacks
docs/platform-map.md # Service dependency navigation map
tests/               # Terratest integration tests
```

## Navigation

Use the component maps in `docs/` to locate the right module before editing.
The platform map shows all service-to-service dependencies.

## Constraints

- NEVER apply Terraform changes without a reviewed plan
- ALWAYS tag resources with team and environment labels
- ALWAYS update the platform map when adding new services
- Run `terraform validate` and `tflint` before committing
