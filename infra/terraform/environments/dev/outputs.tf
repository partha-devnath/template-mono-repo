output "ecr_api_repository_url" {
  description = "API ECR repository URL"
  value       = module.ecr.api_repository_url
}

output "ecr_web_repository_url" {
  description = "Web ECR repository URL"
  value       = module.ecr.web_repository_url
}

output "cluster_name" {
  description = "EKS cluster name"
  value       = module.eks.cluster_name
}

output "cluster_endpoint" {
  description = "EKS cluster endpoint"
  value       = module.eks.cluster_endpoint
}

output "alb_dns_name" {
  description = "Application gateway ALB DNS name"
  value       = module.gateway.alb_dns_name
}

output "api_target_group_arn" {
  description = "API target group ARN"
  value       = module.gateway.api_target_group_arn
}

output "web_target_group_arn" {
  description = "Web target group ARN"
  value       = module.gateway.web_target_group_arn
}
