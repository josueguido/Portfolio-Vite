import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { IconCloud, IconBox, IconCode, IconGitBranch, IconRadar, IconShield } from "@tabler/icons-react"

function Skills() {
    const words = [
        {
            text: "Technical Skills.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const skillsCategories = [
        {
            id: 1,
            title: "Cloud Platforms",
            description: "Multi-cloud architecture and management",
            icon: IconCloud,
            skills: ["AWS"]
        },
        {
            id: 2,
            title: "Containers & Orchestration",
            description: "Container orchestration and management",
            icon: IconBox,
            skills: ["Docker", "Kubernetes"],
            highlight: true
        },
        {
            id: 3,
            title: "Infrastructure as Code",
            description: "Automated infrastructure provisioning",
            icon: IconCode,
            skills: ["Terraform", "Ansible"]
        },
        {
            id: 4,
            title: "CI/CD & Automation",
            description: "Continuous integration and deployment",
            icon: IconGitBranch,
            skills: ["GitLab CI", "GitHub Actions"]
        },
        {
            id: 5,
            title: "Monitoring & Observability",
            description: "System monitoring and logging",
            icon: IconRadar,
            skills: ["Prometheus", "Grafana", "ELK Stack", "Cadvisor", "CloudWatch"]
        },
        {
            id: 6,
            title: "Security & Compliance",
            description: "Security best practices and compliance",
            icon: IconShield,
            skills: ["AWS IAM"]
        },
        {
            id: 7,
            title: "Programming & Scripting",
            description: "Coding and automation scripts",
            icon: IconCode,
            skills: ["Go", "Bash", "TypeScript", "JavaScript", "C#"]
        },
        {
            id: 8,
            title: "Databases & Storage",
            description: "Database management and storage solutions",
            icon: IconBox,
            skills: ["PostgreSQL", "MySQL", "DynamoDB", "Aurora", "S3"]
        }
    ];

    return (
        <>
            <div className="px-4 sm:px-10 mt-10 sm:mt-20 text-center">
                <TypewriterEffectSmooth words={words} className="flex justify-center text-black dark:text-white font-light text-3xl" />
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Comprehensive expertise across modern cloud and DevOps technologies</p>
            </div>

            <section className="py-10 px-4 sm:px-10" id="skills">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillsCategories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={category.id}
                                className={`rounded-lg p-6 transition-all duration-300 ${
                                    category.highlight
                                        ? "border-2 border-purple-400 dark:border-purple-500 bg-purple-50 dark:bg-purple-950 hover:shadow-xl"
                                        : "border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 hover:shadow-lg dark:hover:shadow-xl"
                                }`}
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className={`p-3 rounded-lg ${
                                        category.id === 1 ? "bg-blue-100 dark:bg-blue-900" :
                                        category.id === 2 ? "bg-purple-100 dark:bg-purple-900" :
                                        category.id === 3 ? "bg-orange-100 dark:bg-orange-900" :
                                        category.id === 4 ? "bg-green-100 dark:bg-green-900" :
                                        category.id === 5 ? "bg-yellow-100 dark:bg-yellow-900" :
                                        "bg-red-100 dark:bg-red-900"
                                    }`}>
                                        <IconComponent size={24} className={
                                            category.id === 1 ? "text-blue-600 dark:text-blue-400" :
                                            category.id === 2 ? "text-purple-600 dark:text-purple-400" :
                                            category.id === 3 ? "text-orange-600 dark:text-orange-400" :
                                            category.id === 4 ? "text-green-600 dark:text-green-400" :
                                            category.id === 5 ? "text-yellow-600 dark:text-yellow-400" :
                                            "text-red-600 dark:text-red-400"
                                        } />
                                    </div>
                                    <div>
                                        <h3 className={`text-lg font-bold ${
                                            category.id === 2 ? "text-purple-600 dark:text-purple-400" : "text-gray-900 dark:text-white"
                                        }`}>
                                            {category.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {category.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                                                category.highlight
                                                    ? "bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700"
                                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                            }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Skills;
