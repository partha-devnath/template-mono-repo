terraform {
  required_version = ">= 1.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Configure a remote backend for shared state.
  # Example:
  # backend "s3" {
  #   bucket         = "floci-terraform-state-bucket"
  #   key            = "template-mono-repo/floci/terraform.tfstate"
  #   region         = "us-east-1"
  #   encrypt        = true
  #   dynamodb_table = "floci-terraform-locks"
  # }
}

provider "aws" {
  region = var.aws_region
  profile = "floci"

  default_tags {
    tags = {
      Project     = var.project_name
      Environment = var.environment
      ManagedBy   = "terraform"
    }
  }
}

module "ecr" {
  source = "../../modules/ecr"

  project_name = var.project_name
  force_delete = var.force_delete
  tags         = local.common_tags
}

module "network" {
  source = "../../modules/network"

  project_name       = var.project_name
  vpc_cidr           = var.vpc_cidr
  single_nat_gateway = var.single_nat_gateway
  tags               = local.common_tags
}

module "gateway" {
  source = "../../modules/gateway"

  project_name       = var.project_name
  vpc_id             = module.network.vpc_id
  public_subnets     = module.network.public_subnets
  security_group_ids = [module.network.alb_security_group_id]
  tags               = local.common_tags
}

module "eks" {
  source = "../../modules/eks"

  project_name          = var.project_name
  vpc_id                = module.network.vpc_id
  private_subnets       = module.network.private_subnets
  kubernetes_version    = var.kubernetes_version
  instance_types        = var.instance_types
  min_size              = var.min_size
  max_size              = var.max_size
  desired_size          = var.desired_size
  alb_security_group_id = module.network.alb_security_group_id
  tags                  = local.common_tags
}

locals {
  common_tags = {
    Project     = var.project_name
    Environment = var.environment
    ManagedBy   = "terraform"
  }
}
