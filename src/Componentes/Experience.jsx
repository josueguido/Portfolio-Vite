import { IconBriefcase, IconCalendar } from "@tabler/icons-react"
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
            title: "Full Stack Developer",
            company: "Mobydyg",
            period: "2024 - Present",
            description: "Developing full-stack applications with Angular and cloud backend technologies. Implementing multi-service integrations, real-time communication systems, and serverless architectures. Designed and deployed scalable solutions handling complex business requirements across multiple platforms.",
            tags: ["AWS", "Angular", "TypeScript", "Lambda", "C#", "PostgreSQL", "DynamoDB", "WebSocket", "API Gateway", "SNS", "SQS", "EventBridge", "Aurora", "NodeJS", "Timekit API", "Infobip API", "Serverless", "Lambdas"],
        },
    ];

    return (
        <>
            <div className="px-4 sm:px-10 mt-10 sm:mt-20">
                <TypewriterEffectSmooth words={words} className="flex text-black dark:text-white font-light text-3xl" />
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Professional journey in Full Stack Developer, cloud operations and DevOps engineering</p>
            </div>

            <section className="max-w-4xl mx-auto py-10 px-4 sm:px-10" id="experience">
                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                        {exp.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                        <IconBriefcase size={18} />
                                        <span className="font-medium">{exp.company}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm whitespace-nowrap">
                                    <IconCalendar size={18} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded border border-gray-200 dark:border-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Experience;
