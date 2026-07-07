import { IconBriefcase, IconCalendar, IconArrowUpRight } from "@tabler/icons-react"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"

function Experience() {
    const words = [
        {
            text: "Experience.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const experiences = [
        {
            id: 1,
            title: "Software Engineer – Cloud & Backend",
            company: "Mobydyg",
            period: "July 2024 – Present",
            description: "Full-stack development with Angular and AWS cloud backend. Built and deployed a complete appointments & sessions platform end-to-end, handling high concurrent usage. Integrated third-party services including Timekit (scheduling), Infobip (multi-channel messaging) and Chatwoot. Reduced page load times from 15–17 s down to under 3 s through lazy-loading strategies, skeleton screens and bundle optimization. Designed event-driven serverless architectures using Lambda, SNS/SQS, EventBridge and API Gateway.",
            highlights: [
                { metric: "15–17s → <3s", label: "Page load time improvement" },
                { metric: "3 integrations", label: "Timekit · Infobip · Chatwoot" },
                { metric: "E2E ownership", label: "Appointments & sessions platform" },
            ],
            tags: ["Angular", "TypeScript", "AWS Lambda", "SNS", "SQS", "EventBridge", "API Gateway", "DynamoDB", "Aurora", "NodeJS", "C#", "Timekit API", "Infobip API", "Chatwoot", "Lazy Loading", "Serverless"],
        },
    ];

    return (
        <>
            <div className="px-4 sm:px-10 mt-10 sm:mt-20">
                <TypewriterEffectSmooth words={words} className="flex text-black dark:text-white font-light text-3xl" />
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">Professional journey in full-stack development and cloud engineering</p>
            </div>

            <section className="max-w-4xl mx-auto py-10 px-4 sm:px-10" id="experience">
                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="rounded-xl border-l-4 border-l-blue-500 border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-slate-900 hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-5">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                                            <IconBriefcase size={15} />
                                            <span className="font-medium text-sm">{exp.company}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 text-sm shrink-0">
                                        <IconCalendar size={15} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                {/* Highlight metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                                    {exp.highlights.map((h, idx) => (
                                        <div key={idx} className="flex flex-col gap-0.5 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700">
                                            <span className="text-blue-600 dark:text-blue-400 text-sm font-bold font-mono">
                                                {h.metric}
                                            </span>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {h.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">
                                    {exp.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded border border-gray-200 dark:border-gray-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Experience;
