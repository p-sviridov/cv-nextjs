"use client";

import { cvData } from "@/data/cv-data";
import { generateAndDownloadCV } from "@/lib/docxBuilders";

export default function Home() {
	const data = cvData;

	const handleDownloadDOCX = async () => {
		try {
			await generateAndDownloadCV(
				data,
				`${data.personal.name.replace(/\s+/g, "_")}_CV.docx`
			);
		} catch (error) {
			console.error("Download failed:", error);
			alert("Failed to generate CV document. Please try again.");
		}
	};

	return (
		<main className="leading-5 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
			{/* Download Button */}
			<div className="text-center">
				<button
					onClick={handleDownloadDOCX}
					className="text-gray-600 hover:text-gray-800 text-sm underline transition-colors duration-200 inline-flex items-center gap-1"
				>
					Download as .DOCX
				</button>
			</div>

			<section className="space-y-2">
				<h1 className="text-center text-3xl font-bold">
					{data.personal.name}
				</h1>
				<p className="text-center text-xl">{data.personal.title}</p>
				<p className="text-center text-sm text-gray-500">
					{data.personal.location}
				</p>
				<p className="text-center text-sm text-gray-700">
					{data.personal.summary}
				</p>
				<ul className="flex flex-col items-center gap-2 sm:flex-row sm:flex-wrap sm:justify-center md:justify-between">
					{data.personal.phone && (
						<li>
							<a
								href={`tel:${data.personal.phone}`}
								className="underline"
							>
								{data.personal.phone}
							</a>
						</li>
					)}

					{data.personal.email && (
						<li>
							<a
								href={`mailto:${data.personal.email}`}
								className="underline"
							>
								{data.personal.email}
							</a>
						</li>
					)}

					{data.personal.linkedin && (
						<li>
							<a href={data.personal.linkedin} className="underline">
								{data.personal.linkedin.replace(/^https?:\/\//, "")}
							</a>
						</li>
					)}

					{data.personal.github && (
						<li>
							<a href={data.personal.github} className="underline">
								{data.personal.github.replace(/^https?:\/\//, "")}
							</a>
						</li>
					)}

					{data.personal.telegram && (
						<li>
							<a href={data.personal.telegram} className="underline">
								@{data.personal.telegram.split("/").pop()}
							</a>
						</li>
					)}

					{data.personal.website && (
						<li>
							<a href={data.personal.website} className="underline">
								Website
							</a>
						</li>
					)}
				</ul>
			</section>
			<section className="space-y-3">
				<h2 className="text-2xl font-bold">Languages</h2>
				<hr className="mb-2" />
				<ul className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
					{data.languages.map((language) => (
						<li key={language.language}>
							<span className="text-lg font-bold sm:text-xl">
								{language.language}
							</span>
							<span className="ml-1 text-sm text-gray-500 sm:text-base">
								({language.proficiency})
							</span>
						</li>
					))}
				</ul>
			</section>
			<section className="space-y-4">
				<h2 className="text-2xl font-bold">Experience</h2>
				<hr className="mb-2" />
				<ul className="space-y-6">
					{data.experience.map((experience) => (
						<li className="mb-3" key={experience.company}>
							<div
								className="grid gap-y-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-4"
								key={experience.company}
							>
								<h3 className="font-bold text-lg">
									{experience.company}
								</h3>
								<h4 className="font-bold md:text-right">
									{experience.startDate} -{" "}
									{experience.endDate ||
										(experience.current && "Present")}
								</h4>
								<p className="text-sm text-gray-700 md:text-base">
									{experience.position}
								</p>
								<p className="text-gray-500 italic md:text-right">
									{experience.location}
								</p>
							</div>
							{experience.technologies && (
								<ul className="text-xs flex flex-wrap gap-2 text-gray-500 underline">
									{experience.technologies.map((technology) => (
										<li key={technology}>{technology}</li>
									))}
								</ul>
							)}
							<div className="flex flex-col p-1">
								<ul className="list-disc pl-6 md:pl-10 space-y-2">
									{experience.description.map((description) => (
										<li key={description.main}>
											{description.main}
											<ul className="list-disc pl-5 md:pl-6 space-y-1">
												{description.details?.map((detail) => (
													<li key={detail}>{detail}</li>
												))}
											</ul>
										</li>
									))}
								</ul>
							</div>
						</li>
					))}
				</ul>
			</section>

			<section className="space-y-4">
				<h2 className="text-2xl font-bold">Education</h2>
				<hr className="mb-2" />
				<ul className="space-y-4">
					{data.education.map((education) => (
						<li className="mb-3" key={education.description}>
							<div className="grid gap-y-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-4">
								<h3 className="font-bold text-lg">
									{education.description}
								</h3>
								<h4 className="font-bold md:text-right">
									{education.startDate}
									{education.endDate && ` - ${education.endDate}`}
								</h4>
								<p>{education.institution}</p>
							</div>
						</li>
					))}
				</ul>
			</section>

			{data.projects.length > 0 && (
				<section className="space-y-4">
					<h2 className="text-2xl font-bold">Projects</h2>
					<hr className="mb-2" />
					<ul className="space-y-6">
						{data.projects.map((project) => (
							<li className="mb-3" key={project.name}>
								<div className="grid gap-y-1 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-4">
									<h3 className="font-bold text-lg">{project.name}</h3>
									<h4 className="font-bold md:text-right">
										{project.startDate} - {project.endDate}
									</h4>
									<p>{project.description}</p>
									<ul className="text-xs flex flex-wrap gap-2 text-gray-500 underline">
										{project.technologies.map((technology) => (
											<li key={technology}>{technology}</li>
										))}
									</ul>
									<ul className="list-disc pl-6 md:pl-10 space-y-2">
										{project.highlights?.map((highlight) => (
											<li key={highlight}>{highlight}</li>
										))}
									</ul>
								</div>
							</li>
						))}
					</ul>
				</section>
			)}

			<section className="space-y-3">
				<h2 className="text-2xl font-bold">Skills</h2>
				<hr className="mb-2" />
				<ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 justify-center">
					{data.skills.primary.map((skill) => (
						<li className="font-bold underline decoration-1" key={skill}>
							{skill}
						</li>
					))}
					{data.skills.secondary.map((skill) => (
						<li className="underline decoration-1" key={skill}>
							{skill}
						</li>
					))}
				</ul>
			</section>
		</main>
	);
}
