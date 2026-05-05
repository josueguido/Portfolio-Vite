import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { IconCode, IconExternalLink, IconLock, IconServer, IconBrandDocker, IconCloudComputing, IconArrowUpRight } from "@tabler/icons-react"

function Proyectos() {

    const words = [
        {
            text: "Featured Projects.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const projects = [
        {
            id: 1,
            title: "Scheduling Platform",
            subtitle: "Timekit Integration",
            metric: "100+ concurrent users",
            metricLabel: "Real-time availability sync",
            description: "Serverless scheduling system on AWS. NodeJS Lambda functions handling availability management, automated email notifications, and real-time slot synchronization via Timekit API. Aurora database with API Gateway.",
            tags: ["AWS Lambda", "API Gateway", "Aurora", "NodeJS", "TypeScript", "Timekit API", "Serverless"],
            private: true,
            codeLink: null,
            detailsLink: "#",
            icon: IconCloudComputing,
            borderColor: "border-t-blue-500",
            iconBg: "bg-blue-50 dark:bg-blue-950",
            iconColor: "text-blue-500 dark:text-blue-400",
            metricColor: "text-blue-600 dark:text-blue-400",
            detailsBg: "bg-blue-600 hover:bg-blue-700",
        },
        {
            id: 2,
            title: "Chat-App",
            subtitle: "Multi-Channel Support Platform",
            metric: "100% webhook reliability",
            metricLabel: "5 integrated channels",
            description: "Event-driven support platform on AWS. SNS/SQS FIFO queues for message routing, Lambda compute, DynamoDB for WebSocket state, EventBridge for orchestration. Channels: WhatsApp, Facebook, Instagram, LiveChat. CloudWatch monitoring.",
            tags: ["AWS Lambda", "SNS", "SQS", "DynamoDB", "EventBridge", "API Gateway", "WebSocket", "CloudWatch", "NodeJS"],
            private: true,
            codeLink: null,
            detailsLink: "#",
            icon: IconServer,
            borderColor: "border-t-violet-500",
            iconBg: "bg-violet-50 dark:bg-violet-950",
            iconColor: "text-violet-500 dark:text-violet-400",
            metricColor: "text-violet-600 dark:text-violet-400",
            detailsBg: "bg-violet-600 hover:bg-violet-700",
        },
        {
            id: 3,
            title: "TaskFlow App",
            subtitle: "DevOps Pipeline Showcase",
            metric: "Full observability stack",
            metricLabel: "CI/CD · Security scanning · IaC",
            description: "Project management app with a complete DevOps pipeline: Docker, CI/CD with automated releases, Trivy container security scanning, Dependabot, and observability via Grafana, Prometheus, Alertmanager and ELK Stack.",
            tags: ["Docker", "CI/CD", "Trivy", "Grafana", "Prometheus", "Alertmanager", "Elasticsearch", "Kibana", "Logstash", "Terraform"],
            private: false,
            codeLink: "https://github.com/josueguido/TaskFlow-App",
            detailsLink: "#",
            icon: IconBrandDocker,
            borderColor: "border-t-emerald-500",
            iconBg: "bg-emerald-50 dark:bg-emerald-950",
            iconColor: "text-emerald-500 dark:text-emerald-400",
            metricColor: "text-emerald-600 dark:text-emerald-400",
            detailsBg: "bg-emerald-600 hover:bg-emerald-700",
        }
    ];

    return (
        <>
            <div className="px-4 sm:px-10 mt-10 sm:mt-20">
                <TypewriterEffectSmooth words={words} className="flex text-black dark:text-white font-light text-3xl" />
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Infrastructure and automation projects demonstrating real-world impact</p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-4 sm:px-10" id="proyectos">
                {projects.map((project) => {
                    const Icon = project.icon;
                    return (
                        <div
                            key={project.id}
                            className={`group flex flex-col rounded-xl border-t-4 border border-gray-200 dark:border-gray-700/60 ${project.borderColor} bg-white dark:bg-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                        >
                            <div className="flex flex-col flex-1 p-6">

                                {/* Icon row */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-2.5 rounded-lg ${project.iconBg}`}>
                                        <Icon size={20} className={project.iconColor} />
                                    </div>
                                    {project.private && (
                                        <span className="flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50">
                                            <IconLock size={10} />
                                            Private
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-400 dark:text-gray-500 mb-3">
                                    {project.subtitle}
                                </p>

                                {/* Metric */}
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className={`text-sm font-bold ${project.metricColor}`}>
                                        {project.metric}
                                    </span>
                                    <span className="text-xs text-gray-400 dark:text-gray-500">
                                        · {project.metricLabel}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded border border-gray-200 dark:border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 mt-auto">
                                    {project.codeLink && (
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                                        >
                                            <IconCode size={15} />
                                            Code
                                        </a>
                                    )}
                                    <a
                                        href={project.detailsLink}
                                        className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-white transition-colors ${project.detailsBg} ${project.codeLink ? 'flex-1' : 'w-full'}`}
                                    >
                                        <IconArrowUpRight size={15} />
                                        Details
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}

export default Proyectos;
