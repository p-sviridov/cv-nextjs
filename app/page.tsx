import { cvData } from "@/data/cv-data";

export default function Home() {
	const data = cvData;

	return (
		<main className="leading-5">
			<section>
				<h1 className="text-center text-3xl font-bold">
					{data.personal.name}
				</h1>
				<p className="text-center text-xl">{data.personal.title}</p>
				<p className="text-center text-sm text-gray-500">
					{data.personal.location}
				</p>
				<p className="text-center p-2">{data.personal.summary}</p>
				<ul className="flex flex-row gap-2 justify-between p-2">
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
			<section>
				<h2 className="text-2xl font-bold">Languages</h2>
				<hr className="mb-2" />
				<ul className="flex flex-row gap-8 mb-6">
					{data.languages.map((language) => (
						<li key={language.language}>
							<span className="text-xl font-bold">
								{language.language}
							</span>
							<span className="ml-1 text-gray-500">
								({language.proficiency})
							</span>
						</li>
					))}
				</ul>
			</section>
			<section>
				<h2 className="text-2xl font-bold">Experience</h2>
				<hr className="mb-2" />
				<ul>
					{data.experience.map((experience) => (
						<li className="mb-3" key={experience.company}>
							<div
								className="grid grid-cols-2 grid-rows-2"
								key={experience.company}
							>
								<h3 className="font-bold text-lg">
									{experience.company}
								</h3>
								<h4 className="font-bold text-right">
									{experience.startDate} -{" "}
									{experience.endDate ||
										(experience.current && "Present")}
								</h4>
								<p>{experience.position}</p>
								<p className="text-gray-500 italic text-right">
									{experience.location}
								</p>
							</div>
							{experience.technologies && (
								<ul className="text-xs flex flex-row gap-2 text-gray-500 underline">
									{experience.technologies.map((technology) => (
										<li key={technology}>{technology}</li>
									))}
								</ul>
							)}
							<div className="flex flex-col p-1">
								<ul className="list-disc px-10">
									{experience.description.map((description) => (
										<li key={description.main}>
											{description.main}
											<ul className="list-disc px-6">
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

			<section>
				<h2 className="text-2xl font-bold">Education</h2>
				<hr className="mb-2" />
				<ul>
					{data.education.map((education) => (
						<li className="mb-3" key={education.description}>
							<div className="grid [grid-template-columns:repeat(2,auto)] [grid-template-rows:repeat(2,auto)]">
								<h3 className="font-bold text-lg">
									{education.description}
								</h3>
								<h4 className="font-bold text-right">
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
				<section>
					<h2 className="text-2xl font-bold">Projects</h2>
					<hr className="mb-2" />
					<ul>
						{data.projects.map((project) => (
							<li className="mb-3" key={project.name}>
								<div className="grid [grid-template-columns:repeat(2,auto)] [grid-template-rows:repeat(2,auto)]">
									<h3 className="font-bold text-lg">{project.name}</h3>
									<h4 className="font-bold text-right">
										{project.startDate} - {project.endDate}
									</h4>
									<p>{project.description}</p>
									<ul className="text-xs flex flex-row gap-2 text-gray-500 underline">
										{project.technologies.map((technology) => (
											<li key={technology}>{technology}</li>
										))}
									</ul>
									<ul className="list-disc px-10">
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

			<section>
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
