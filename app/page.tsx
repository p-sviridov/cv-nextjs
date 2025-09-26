import { cvData } from "@/data/cv-data";

export default function Home() {
	const data = cvData;

	return (
		<main>
			<section>
				<h1 className="text-center text-3xl font-bold mt-6">
					{data.personal.name}
				</h1>
				<p className="text-center text-xl">{data.personal.title}</p>
				<p className="text-center text-sm text-gray-500">
					{data.personal.location}
				</p>
				<p className="text-center text-lg p-2">{data.personal.summary}</p>
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
			</section>
		</main>
	);
}
