# Terraform Infrastructure

This directory contains Terraform modules for deploying the `template-mono-repo` stack on AWS.

## Structure

```
infra/terraform/
├── modules/
│   ├── ecr/      # Container registries for api and web images
│   ├── network/  # VPC, subnets, NAT gateways, and ALB security group
│   ├── gateway/  # Application Load Balancer with path-based routing
│   └── eks/      # EKS cluster and managed node groups
├── environments/
│   ├── dev/      # Development environment
│   ├── prod/     # Production environment
│   └── floci/    # floci AWS environment
```

## Deployment

1. Ensure AWS credentials are configured (via `aws configure` or environment variables).
2. (Recommended) Configure a remote S3 backend in `environments/<env>/main.tf` before applying.
3. Initialize and apply:

```bash
cd infra/terraform/environments/dev
terraform init
terraform plan
terraform apply
```

## Outputs

After apply, Terraform prints:

- `ecr_api_repository_url` and `ecr_web_repository_url` — push Docker images here.
- `cluster_name` and `cluster_endpoint` — configure `kubectl` to deploy to EKS.
- `alb_dns_name` — public endpoint for the application.
- `api_target_group_arn` and `web_target_group_arn` — wire Kubernetes Services to these target groups.

## Notes

- The ALB routes `/api/*` to the API service and everything else to the web service.
- The default listener is HTTP only. Add an HTTPS listener with an ACM certificate for production.
- `prod` uses `single_nat_gateway = false` for multi-AZ availability and larger instance types.
