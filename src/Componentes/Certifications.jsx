import { IconAward, IconClock } from "@tabler/icons-react"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"

function Certifications() {
    const words = [
        {
            text: "Certifications.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    const certifications = [
        {
            id: 1,
            title: "AWS Solutions Architect Associate",
            issuer: "Amazon Web Services",
            status: "In Progress",
            description: "Designing and deploying scalable, highly available and fault-tolerant systems on AWS. Covers compute, storage, networking, databases, security and cost optimization.",
            color: "bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800",
            badgeColor: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 border border-yellow-200 dark:border-yellow-700",
            iconColor: "text-orange-500 dark:text-orange-400",
            iconBg: "bg-orange-100 dark:bg-orange-900",
        },
        {
            id: 2,
            title: "HashiCorp Terraform Associate",
            issuer: "HashiCorp",
            status: "In Progress",
            description: "Infrastructure as Code fundamentals using Terraform. Covers provisioning, state management, modules, remote backends and Terraform Cloud workflows.",
            color: "bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800",
            badgeColor: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700",
            iconColor: "text-purple-500 dark:text-purple-400",
            iconBg: "bg-purple-100 dark:bg-purple-900",
        },
    ];

    return (
        <>
            <div className="px-4 sm:px-10 mt-10 sm:mt-20">
                <TypewriterEffectSmooth words={words} className="flex text-black dark:text-white font-light text-3xl" />
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">Ongoing certifications to validate cloud and infrastructure expertise</p>
            </div>

            <section className="max-w-4xl mx-auto py-10 px-4 sm:px-10" id="certifications">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <div
                            key={cert.id}
                            className={`border rounded-lg p-6 hover:shadow-lg dark:hover:shadow-xl transition-all duration-300 ${cert.color}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-lg ${cert.iconBg}`}>
                                    <IconAward size={26} className={cert.iconColor} />
                                </div>
                                <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${cert.badgeColor}`}>
                                    <IconClock size={13} />
                                    {cert.status}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                                {cert.issuer}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                {cert.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Certifications;
