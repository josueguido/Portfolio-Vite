import AWSLambda from "../assets/aws-icons/Lambda.svg";
import Aurora from "../assets/aws-icons/Aurora.svg";
import APIGateway from "../assets/aws-icons/API Gateway.svg";
import EventBridge from "../assets/aws-icons/EventBridge.svg";
import SNS from "../assets/aws-icons/Simple Notification Service.svg";
import SQS from "../assets/aws-icons/Simple Queue Service.svg";
import DynamoDB from "../assets/aws-icons/DynamoDB.svg";
import CloudWatch from "../assets/aws-icons/CloudWatch.svg";

import React from "../assets/Tecnologias/React.svg";
import NodeJS from "../assets/Tecnologias/NodeJS.svg";
import Docker from "../assets/Tecnologias/Docker.svg";
import Grafana from "../assets/Tecnologias/Grafana.svg";
import Prometheus from "../assets/Tecnologias/Prometheus.svg";
import Terraform from "../assets/Tecnologias/Terraform.svg";
import PostGres from "../assets/Tecnologias/PostGres.svg";
import AWS from "../assets/Tecnologias/AWS.svg";
import Angular from "../assets/Tecnologias/Angular.svg";
import TypeScript from "../assets/Tecnologias/TypeScript.svg";
import Swagger from "../assets/Tecnologias/Swagger.svg";
import API from "../assets/Tecnologias/api.svg";

interface TechInfo {
	icon: string;
	description: string;
	color: string;
}

export const techDescriptions: Record<string, TechInfo> = {
  API: {
    icon: API,
    description: "Used for real-time availability management and slot synchronization",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
  },
	
	React: {
		icon: React,
		description: "JavaScript library for building user interfaces",
		color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200"
	},
  
  Angular: {
		icon: Angular,
		description: "JavaScript library for building user interfaces",
		color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200"
	},

  TypeScript: {
    icon: TypeScript,
    description: "Typed superset of JavaScript for scalable applications",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
  },

	NodeJS: {
		icon: NodeJS,
		description: "JavaScript runtime for server-side applications",
		color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200"
	},

  Swagger: {
    icon: Swagger,
    description: "API design and documentation tool",
    color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200"
  },
	
	"AWS Lambda": {
		icon: AWSLambda,
		description: "Serverless compute service for event-driven applications",
		color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
	},
	"Aurora": {
		icon: Aurora,
		description: "MySQL/PostgreSQL-compatible relational database",
		color: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200"
	},
	AWS: {
		icon: AWS,
		description: "Amazon Web Services cloud platform",
		color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
	},
	SNS: {
		icon: SNS,
		description: "Simple Notification Service for message distribution",
		color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
	},
	SQS: {
		icon: SQS,
		description: "Simple Queue Service for message queuing",
		color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
	},
	DynamoDB: {
		icon: DynamoDB,
		description: "NoSQL database for high-scale applications",
		color: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200"
	},
	"API Gateway": {
		icon: APIGateway,
		description: "Managed service to create and manage APIs",
		color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
	},
	EventBridge: {
		icon: EventBridge,
		description: "Serverless event bus for event routing",
		color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
	},
	
	PostgreSQL: {
		icon: PostGres,
		description: "Advanced open-source relational database",
		color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"
	},
	
	Docker: {
		icon: Docker,
		description: "Container platform for consistent deployments",
		color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200"
	},
	Grafana: {
		icon: Grafana,
		description: "Monitoring and visualization platform",
		color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-200"
	},
	Prometheus: {
		icon: Prometheus,
		description: "Metrics collection and alerting system",
		color: "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200"
	},
	Terraform: {
		icon: Terraform,
		description: "Infrastructure as Code for cloud resources",
		color: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200"
	},
	
	WebSocket: {
		icon: AWS,
		description: "Full-duplex communication protocol for real-time apps",
		color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200"
	}
};

export const getTechIcon = (techName: string) => {
	return techDescriptions[techName] || {
		icon: AWS,
		description: "Technology used in this project",
		color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
	};
};
