import { useState } from "react";
import { IconX } from "@tabler/icons-react";

function ProjectModal({ project, isOpen, onClose }) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
			<div className="bg-white dark:bg-slate-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
				<div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-start">
					<div className="flex-1">
						<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
							{project.title}
						</h2>
						<p className="text-blue-600 dark:text-blue-400 font-mono text-sm font-semibold mt-1">
							{project.metric}
						</p>
					</div>
					<button
						onClick={onClose}
						className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
					>
						<IconX size={24} />
					</button>
				</div>

				<div className="p-6 space-y-8">
					<div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
							Technologies
						</h3>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag, idx) => (
								<span
									key={idx}
									className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 text-xs font-medium rounded"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
							Overview
						</h3>
						<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
							{project.description}
						</p>
					</div>

					{project.screenshots && project.screenshots.length > 0 && (
						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
								Screenshots
							</h3>
							<div className="grid grid-cols-1 gap-4">
								{project.screenshots.map((screenshot, idx) => (
									<img
										key={idx}
										src={screenshot}
										alt={`Screenshot ${idx + 1}`}
										className="rounded-lg border border-gray-200 dark:border-gray-700 w-full object-cover"
									/>
								))}
							</div>
						</div>
					)}

					{project.diagrams && project.diagrams.length > 0 && (
						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
								Architecture Diagrams
							</h3>
							<div className="grid grid-cols-1 gap-4">
								{project.diagrams.map((diagram, idx) => (
									<img
										key={idx}
										src={diagram}
										alt={`Architecture Diagram ${idx + 1}`}
										className="rounded-lg border border-gray-200 dark:border-gray-700 w-full object-cover bg-gray-50 dark:bg-gray-800 p-4"
									/>
								))}
							</div>
						</div>
					)}

					{project.challenges && project.challenges.length > 0 && (
						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
								Challenges & Solutions
							</h3>
							<ul className="space-y-2">
								{project.challenges.map((challenge, idx) => (
									<li
										key={idx}
										className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
									>
										<span className="text-blue-500 font-bold mt-1">•</span>
										<span>{challenge}</span>
									</li>
								))}
							</ul>
						</div>
					)}

					{project.outcomes && project.outcomes.length > 0 && (
						<div>
							<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
								Key Outcomes
							</h3>
							<ul className="space-y-2">
								{project.outcomes.map((outcome, idx) => (
									<li
										key={idx}
										className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
									>
										<span className="text-green-500 font-bold mt-1">✓</span>
										<span>{outcome}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				<div className="sticky bottom-0 bg-gray-50 dark:bg-slate-800 border-t border-gray-200 dark:border-gray-700 p-6">
					<button
						onClick={onClose}
						className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProjectModal;
