import { useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect"
import { IconCode, IconExternalLink } from "@tabler/icons-react"
import ProjectModal from "../modals/ProjectModal";

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const words = [
        {
            text: "Featured Projects.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const projects = [
        {
            id: 1,
            title: "Scheduling Platform - Timekit Integration",
            metric: "Real-time availability sync, 100+ concurrent users",
            description: "Full-stack scheduling application integrating Timekit API for availability management. Built Angular frontend with TypeScript, NodeJS lambdas backend services, and Aurora database. Implemented real-time slot synchronization, automated email notifications.",
            tags: ["API", "Angular", "TypeScript", "Aurora", "AWS"],
            techDescriptions: {
                "API": "Timekit API Used for real-time availability management and slot synchronization",
                "Aurora": "Relational database for scheduling data persistence",
                "Angular": "Frontend framework for building dynamic user interfaces",
                "TypeScript": "Typed superset of JavaScript for scalable applications",
                "NodeJS": "Backend runtime for RESTful API and server logic",
                "AWS Lambda": "Serverless functions for handling backend processes"
            },
            isConfidential: true,
            screenshots: [],
            diagrams: [],
            challenges: [],
            outcomes: []
        },
        {
            id: 2,
            title: "Chat-App - Multi-Channel Support Platform",
            metric: "5 channels, 100% webhook reliability",
            description: "Enterprise customer support system with Infobip Conversations API integration. Serverless architecture using Lambda, SNS/SQS FIFO queues for event routing, DynamoDB for WebSocket connections, and Aurora database. Implemented real-time WebSocket API, multi-channel support (WhatsApp, Facebook, Instagram, LiveChat), automatic conversation routing by shop point, agent authorization per branch, conversation state management, virtual agents, and comprehensive CloudWatch monitoring.",
            tags: ["API", "AWS Lambda", "SNS", "SQS", "DynamoDB", "Aurora", "WebSocket", "API Gateway", "Angular", "EventBridge"],
            techDescriptions: {
                "API": "Infobip API Multi-channel messaging platform integration for WhatsApp, Facebook, Instagram",
                "AWS Lambda": "Serverless functions for processing and routing messages",
                "SNS": "Message publishing for event distribution across services",
                "SQS": "FIFO queues for maintaining message order in conversation routing",
                "DynamoDB": "NoSQL database for storing WebSocket connection mappings",
                "Aurora": "Relational database for conversation history and agent data",
                "WebSocket": "Real-time bidirectional communication with chat clients",
                "API Gateway": "REST API for external integrations and agent interfaces",
                "EventBridge": "Event routing between AWS services",
                "Angular 19": "Frontend framework for building dynamic user interfaces"
            },
            isConfidential: true,
            screenshots: [],
            diagrams: [],
            challenges: [
                "Managing real-time WebSocket connections across multiple serverless instances",
                "Implementing secure multi-channel message routing with proper authorization",
                "Handling high throughput with SQS FIFO queues while maintaining message ordering"
            ],
            outcomes: [
                "Reduced message processing latency from 2s to <100ms",
                "Achieved 99.99% uptime with serverless architecture",
                "Supported 5+ concurrent channels with zero data loss"
            ]
        },
        {
            id: 3,
            title: "TaskFlow App",
            metric: "Full-stack project management system",
            description: "A comprehensive full-stack project and task management system built with modern web technologies. TaskFlow provides an intuitive interface for managing projects, tasks, team members, and business workflows. It features user authentication, role-based access control, real-time notifications, and a responsive design for seamless use across devices. The backend is powered by NodeJS and Express, with PostgreSQL as the database, while the frontend leverages React and TypeScript for a dynamic user experience. Additionally, Docker is used for containerization, and Grafana along with Prometheus are implemented for monitoring application performance.",
            tags: ["Docker", "Grafana", "Prometheus", "NodeJS", "PostgreSQL", "React", "TypeScript", "Terraform"],
            techDescriptions: {
                "Docker": "Containerization for consistent development and production environments",
                "PostgreSQL": "Primary relational database for task and project data",
                "NodeJS": "Backend runtime for RESTful API and server logic",
                "React": "Frontend framework for interactive user interface",
                "Grafana": "Dashboards for monitoring application metrics and performance",
                "Prometheus": "Metrics collection and time-series database",
                "Terraform": "Infrastructure as Code for AWS resource management",
                "Swagger": "API documentation and testing",
                "TypeScript": "Typed superset of JavaScript for scalable applications"
            },
            isConfidential: false,
            codeLink: "https://github.com/josueguido/TaskFlow-App",
            screenshots: [],
            diagrams: [],
            challenges: [],
            outcomes: []
        }
    ];

    return (
        <>
            <ProjectModal 
                project={selectedProject} 
                isOpen={!!selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />

            <div className="px-4 sm:px-10 mt-10 sm:mt-20">
                <TypewriterEffectSmooth words={words} className="flex text-black dark:text-white font-light text-3xl" />
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Infrastructure and automation projects demonstrating real-world impact</p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4 sm:px-10" id="proyectos">
                {projects.map((project) => (
                    <div key={project.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900">
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {project.title}
                        </h3>

                        <p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-semibold mb-3">
                            {project.metric}
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-3">
                            {!project.isConfidential ? (
                                <>
                                    <a
                                        href={project.codeLink}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
                                    >
                                        <IconCode size={18} />
                                        Code
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
                                    >
                                        <IconExternalLink size={18} />
                                        Visit
                                    </a>
                                </>
                            ) : (
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors"
                                >
                                    View Details
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Projects;
