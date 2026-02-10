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

1. Step 1 of the deployment process with details
2. Step 2 of the deployment process with details
3. Step 3 of the deployment process with details
4. Step 4 of the deployment process with details
5. Step 5 of the deployment process with details
6. Step 6 of the deployment process with details
7. Step 7 of the deployment process with details
8. Step 8 of the deployment process with details
9. Step 9 of the deployment process with details
10. Step 10 of the deployment process with details

## Configuration

```yaml
# config/staging.yml
cluster: staging-us-east-1
replicas: 2
health_check_interval: 30s
rollback_threshold: 3
```

```yaml
# config/production.yml
cluster: prod-us-east-1
replicas: 5
health_check_interval: 10s
rollback_threshold: 2
canary_percentage: 10
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| AWS_REGION | Yes | AWS region for deployment |
| DOCKER_REGISTRY | Yes | Container registry URL |
| SLACK_WEBHOOK | No | Notification webhook |
| DEPLOY_TIMEOUT | No | Timeout in seconds (default: 300) |

## Monitoring

After deployment, the skill automatically:

1. Watches CloudWatch metrics for 5 minutes
2. Checks error rate against baseline
3. Validates response latency percentiles
4. Confirms auto-scaling group health

## Troubleshooting

### Common Issues

**Image build fails:**
- Check Dockerfile syntax
- Verify base image availability
- Ensure build context includes all required files

**Health check timeout:**
- Verify application startup time
- Check port configuration
- Review load balancer settings

**Rollback triggered:**
- Check application logs in CloudWatch
- Review deployment diff
- Verify environment variables

## Rollback Procedures

### Automatic Rollback

The system triggers automatic rollback when:
- Error rate exceeds 5% for 2 consecutive minutes
- P99 latency exceeds 2x baseline for 3 minutes
- Health check failures exceed rollback_threshold

### Manual Rollback

1. Run /rollback with the target version
2. Verify the rollback completed successfully
3. Post incident summary to team channel

## History

| Date | Change | Author |
|------|--------|--------|
| 2026-01-15 | Added canary deployment | @platform |
| 2026-01-02 | Initial version | @devops |

## Related

- /rollback skill for manual rollback
- /status skill for deployment status
- /logs skill for log access
- docs/deployment.md for architecture
- docs/runbook.md for incident response
- docs/monitoring.md for observability setup
