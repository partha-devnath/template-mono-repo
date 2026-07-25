terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.0"

  cluster_name    = "${var.project_name}-cluster"
  cluster_version = var.kubernetes_version

  cluster_endpoint_public_access = true

  vpc_id     = var.vpc_id
  subnet_ids = var.private_subnets

  eks_managed_node_groups = {
    default = {
      name           = "${var.project_name}-ng"
      instance_types = var.instance_types
      min_size       = var.min_size
      max_size       = var.max_size
      desired_size   = var.desired_size
    }
  }

  tags = var.tags
}

resource "aws_security_group_rule" "allow_alb_ingress" {
  type                     = "ingress"
  from_port                = 3001
  to_port                  = 3001
  protocol                 = "tcp"
  source_security_group_id = var.alb_security_group_id
  security_group_id        = module.eks.cluster_security_group_id
  description              = "Allow ALB to reach API service"
}

resource "aws_security_group_rule" "allow_alb_ingress_web" {
  type                     = "ingress"
  from_port                = 5173
  to_port                  = 5173
  protocol                 = "tcp"
  source_security_group_id = var.alb_security_group_id
  security_group_id        = module.eks.cluster_security_group_id
  description              = "Allow ALB to reach web service"
}
