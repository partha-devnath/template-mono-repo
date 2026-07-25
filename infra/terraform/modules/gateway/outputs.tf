output "alb_dns_name" {
  description = "DNS name of the application gateway ALB"
  value       = aws_lb.this.dns_name
}

output "api_target_group_arn" {
  description = "ARN of the API target group"
  value       = aws_lb_target_group.api.arn
}

output "web_target_group_arn" {
  description = "ARN of the web target group"
  value       = aws_lb_target_group.web.arn
}

output "alb_zone_id" {
  description = "Route 53 zone ID of the ALB"
  value       = aws_lb.this.zone_id
}
