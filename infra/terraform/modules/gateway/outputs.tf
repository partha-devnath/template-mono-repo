output "alb_dns_name" {
  description = "DNS name of the application gateway ALB"
  value       = module.alb.dns_name
}

output "api_target_group_arn" {
  description = "ARN of the API target group"
  value       = module.alb.target_groups["api"].arn
}

output "web_target_group_arn" {
  description = "ARN of the web target group"
  value       = module.alb.target_groups["web"].arn
}

output "alb_zone_id" {
  description = "Route 53 zone ID of the ALB"
  value       = module.alb.zone_id
}
