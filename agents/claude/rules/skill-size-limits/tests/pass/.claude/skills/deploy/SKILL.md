# Deploy Skill

Deploy the application to the target environment.

## Prerequisites

- Docker installed and running
- AWS CLI configured with appropriate credentials
- Access to the deployment registry

## Usage

```
/deploy [environment] [--dry-run]
```

## Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| environment | Yes | - | Target: staging, production |
| --dry-run | No | false | Preview changes without applying |

## Steps

1. Build the Docker image from current branch
2. Run integration tests against the image
3. Push image to container registry
4. Update the deployment manifest
5. Apply rolling update to target environment
6. Verify health checks pass

## Rollback

If health checks fail after deployment:

1. Revert to previous image tag
2. Apply rollback manifest
3. Notify the team channel

## Notes

- Production deploys require approval from `@platform-team`
- Staging deploys are auto-approved during business hours
- See `docs/deployment.md` for architecture details
- See `docs/runbook.md` for incident response procedures

## Related

- `/rollback` skill for manual rollback
- `/status` skill for deployment status
