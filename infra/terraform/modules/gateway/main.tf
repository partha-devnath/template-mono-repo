terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

module "alb" {
  source  = "terraform-aws-modules/alb/aws"
  version = "~> 9.0"

  name = "${var.project_name}-alb"

  load_balancer_type = "application"
  vpc_id             = var.vpc_id
  subnets            = var.public_subnets
  security_groups    = var.security_group_ids

  listeners = {
    http = {
      port     = 80
      protocol = "HTTP"
      fixed_response = {
        content_type = "text/plain"
        message_body = "Redirecting to HTTPS"
        status_code  = "301"
      }
      # For production, add an HTTPS listener with an ACM certificate.
    }
  }

  target_groups = {
    api = {
      name_prefix          = "api-"
      protocol             = "HTTP"
      port                 = 3001
      target_type          = "ip"
      deregistration_delay = 30
      create_attachment    = false

      health_check = {
        enabled             = true
        healthy_threshold   = 2
        interval            = 30
        matcher             = "200"
        path                = "/api/health"
        port                = "traffic-port"
        protocol            = "HTTP"
        timeout             = 5
        unhealthy_threshold = 3
      }
    }

    web = {
      name_prefix          = "web-"
      protocol             = "HTTP"
      port                 = 5173
      target_type          = "ip"
      deregistration_delay = 30
      create_attachment    = false

      health_check = {
        enabled             = true
        healthy_threshold   = 2
        interval            = 30
        matcher             = "200"
        path                = "/"
        port                = "traffic-port"
        protocol            = "HTTP"
        timeout             = 5
        unhealthy_threshold = 3
      }
    }
  }

  # Path-based routing: /api/* -> API, everything else -> web
  route_records = {
    api = {
      listener_key     = "http"
      priority         = 100
      target_group_key = "api"
      paths            = ["/api/*"]
    }
    web = {
      listener_key     = "http"
      priority         = 200
      target_group_key = "web"
      paths            = ["/*"]
    }
  }

  tags = var.tags
}
