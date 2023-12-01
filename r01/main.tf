terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.26"
    }
  }
  backend "local" {}
}

provider "aws" {
  region     = "ap-northeast-1"
  access_key = "test"
  secret_key = "test"

  s3_use_path_style = true
  skip_credentials_validation = true
  skip_metadata_api_check     = true
  skip_requesting_account_id  = true

  endpoints {
    s3 = "http://localstack:4566"
  }
}

resource "aws_s3_bucket" "my_bucket" {
  bucket = "microposts"
}

resource "aws_s3_bucket_cors_configuration" "my_bucket" {
  bucket = aws_s3_bucket.my_bucket.id

  cors_rule {
    allowed_methods = ["PUT"]
    allowed_origins = ["*"]
  }
}
