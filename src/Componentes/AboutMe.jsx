import {
	IconCloud,
	IconDatabase,
	IconShield,
	IconGitBranch,
} from "@tabler/icons-react";

function About() {
	const stats = [
		{ value: "2+", label: "year of professional experience" },
		{ label: "Several real-world, production-like projects" },
		{ label: "AWS & DevOps stack in progress" },
	];

	const specializations = [
		{
			icon: IconCloud,
			label: "Cloud Architecture",
			color: "bg-blue-100 dark:bg-blue-900",
			textColor: "text-blue-600 dark:text-blue-400",
		},
		{
			icon: IconDatabase,
			label: "Kubernetes",
			color: "bg-cyan-100 dark:bg-cyan-900",
			textColor: "text-cyan-600 dark:text-cyan-400",
		},
		{
			icon: IconGitBranch,
			label: "IaC & Terraform",
			color: "bg-purple-100 dark:bg-purple-900",
			textColor: "text-purple-600 dark:text-purple-400",
		},
		{
			icon: IconShield,
			label: "DevSecOps",
			color: "bg-pink-100 dark:bg-pink-900",
			textColor: "text-pink-600 dark:text-pink-400",
		},
	];

	const principles = [
		"Automation first: if you do it twice, automate it",
		"Immutable infrastructure versioned as code",
		"Security and observability as first-class citizens",
		"Simplicity over complexity",
	];

	return (
		<section className="py-16 px-4 sm:px-10" id="about">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
					About Me
				</h1>
				<p className="text-gray-600 dark:text-gray-400 text-lg">
					Cloud / DevOps Engineer | AWS | Docker | IaC
				</p>
			</div>

			<div className="max-w-6xl mx-auto mb-8">
				<p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
					Cloud & DevOps Engineer with hands-on experience designing, building
					and operating containerized applications using Docker, AWS and
					Infrastructure as Code. I focus on reliable CI/CD pipelines, cloud
					infrastructure and observability platforms that help teams deploy
					faster and operate systems with confidence.
				</p>

				<p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
					I enjoy working close to infrastructure rather than only application
					code, with a strong interest in containerization, automation,
					monitoring, logging and cloud architecture. Currently expanding my
					expertise in Terraform, Linux internals and Kubernetes while building
					real-world, production-oriented projects.
				</p>
			</div>

			<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
				<div>
					<p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
						I enjoy working close to infrastructure rather than only application
						code, with a strong interest in containerization, automation,
						monitoring, logging and cloud architecture. Currently expanding my
						expertise in Terraform, Linux internals and Kubernetes while
						building real-world, production-oriented projects.
					</p>

					<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
						Core Principles
					</h3>
					<ul className="space-y-3">
						{principles.map((principle, idx) => (
							<li
								key={idx}
								className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
							>
								<span className="text-blue-600 dark:text-blue-400 font-bold mt-1">
									•
								</span>
								<span>{principle}</span>
							</li>
						))}
					</ul>
				</div>

				<div>
					<div className="grid grid-cols-2 gap-4 mb-8">
						{stats.map((stat, idx) => (
							<div
								key={idx}
								className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center bg-white dark:bg-slate-900"
							>
								<div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
									{stat.value}
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									{stat.label}
								</div>
							</div>
						))}
					</div>

					<div>
						<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
							Specialization Areas
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{specializations.map((spec, idx) => {
								const Icon = spec.icon;
								return (
									<div
										key={idx}
										className={`${spec.color} rounded-lg p-5 transition-all hover:shadow-lg dark:hover:shadow-xl`}
									>
										<Icon size={28} className={`${spec.textColor} mb-3`} />
										<h4 className="font-bold text-gray-900 dark:text-white text-sm">
											{spec.label}
										</h4>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			<div className="mt-12 bg-blue-50 dark:bg-blue-950 rounded-lg p-8 text-center">
				<p className="text-gray-700 dark:text-gray-300 mb-4">
					Interested in collaborating or learning more about my work? Let's connect!
				</p>
				<a
					href="mailto:josuedguido866@gmail.com"
					className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
				>
          Contact Me
				</a>
			</div>
		</section>
	);
}

export default About;
