import { CVData } from "./cv-data.model";

export const cvData: CVData = {
	personal: {
		name: "Pavel Sviridov",
		title: "Frontend Engineer",
		email: "pavlentiysv@gmail.com",
		phone: "+12482522624",
		location: "Birmingham, Michigan, USA",
		linkedin: "https://linkedin.com/in/p-sviridov",
		github: "https://github.com/p-sviridov",
		// telegram: "https://t.me/pavlentiysv",
		summary: `Frontend Engineer with 5 years of experience building modern web applications using Angular, React, and Vue. Strong background in delivering scalable, high-quality solutions across diverse industries. Experienced in collaborating with cross-functional teams, adopting new technologies, and driving projects from concept to launch. Passionate about creating intuitive, impactful software that improves everyday experiences.`,
	},
	languages: [
		{
			language: "English",
			proficiency: "Fluent",
		},
		{
			language: "Russian",
			proficiency: "Native",
		},
		{
			language: "Belarusian",
			proficiency: "Native",
		},
		{
			language: "Polish",
			proficiency: "Basic",
		},
	],
	experience: [
		{
			company: "Entrega Systems Group, Inc.",
			position: "Frontend Developer",
			location: "Troy, MI, USA",
			startDate: "10/2021",
			current: true,
			description: [
				{
					main: "Supported and enhanced B2B platforms for General Motors and their dealer network.",
				},
				{
					main: "Maintained and updated the GM Shop Click Drive internal tool for managing dealer information.",
				},
				{
					main: "Modernized client-facing experiences, including:",
					details: [
						"Redesign and relaunch of a law firm portfolio site.",
						"Updates and improvements to a company portal page.",
					],
				},
				{
					main: `Managed and enhanced GM's AEM and SharePoint ecosystems:`,
					details: [
						"Updated and migrated internal SharePoint sites from SharePoint 2016 to SharePoint Online (SPO).",
						"Migrated GM websites from AEM on-premise to AEM Cloud, leveraging Edge Delivery Services and document-based authoring.",
					],
				},
				{
					main: "Designed and implemented a real-time broadcasting widget using WebSockets, integrating with third-party APIs.",
				},
			],
			technologies: [
				"TypeScript",
				"JavaScript",
				"Angular",
				"React",
				"Vue",
				"AEM",
				"Edge Delivery Service",
				"SharePoint",
				"Mocha",
				"Selenium",
				"Razor Pages",
				".Net Core",
			],
		},
		{
			company: "Hiqo Solutions",
			position: "Frontend Developer",
			location: "Minsk, Belarus",
			startDate: "09/2019",
			endDate: "05/2021",
			current: false,
			description: [
				{
					main: "Built and maintained internal frameworks and tools using JavaScript, improving development efficiency for company-wide use.",
				},
				{
					main: "Developed a team engagement and client collaboration platform for Accenture:",
					details: [
						"Optimized WebSocket connections for real-time updates.",
						"Engineered a dynamic form constructor for highly interactive user experiences.",
						"Integrated external media (presentations, videos, interactive elements) seamlessly into the platform.",
						"Designed and deployed Firebase Cloud Functions to handle business logic.",
					],
				},
				{
					main: "Designed and implemented a post-COVID office management system for employees:",
					details: [
						"Integrated with internal employee databases for centralized management.",
						"Developed authentication workflows and workstation booking features.",
					],
				},
			],
			technologies: ["TypeScript", "Angular", "Firebase"],
		},
	],
	education: [
		{
			institution:
				"Belarusian State University of Informatics and Radioelectronics",
			description: "Bachelor of Science in Information Technology",
			location: "Minsk, Belarus",
			startDate: "09/2016",
			endDate: "07/2020",
		},
	],
	projects: [],
	skills: {
		primary: [
			"TypeScript",
			"JavaScript",
			"Angular",
			"React",
			"Vue",
			"Next.js",
			"HTML5",
			"CSS3",
			"SASS",
			"AEM",
			"Edge Delivery Service",
			"Firebase",
			"Git",
			"GraphQL",
		],
		secondary: [
			"WebSockets",
			"SharePoint",
			"Figma",
			"Agile",
			"Scrum",
			"Kanban",
			"Mocha",
			"Jira",
			"Selenium",
			".Net Core",
			"Razor Pages",
		],
	},
};
