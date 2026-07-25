variable "project_name" {
  description = "Project name used for repository naming"
  type        = string
}

variable "force_delete" {
  description = "Force delete ECR repositories on destroy"
  type        = bool
  default     = false
}

variable "tags" {
  description = "Tags to apply to all resources"
  type        = map(string)
  default     = {}
}
