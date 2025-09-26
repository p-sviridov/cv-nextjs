import { CVData } from "./cv-data.model";

export const cvData: CVData = {
	personal: {
		name: "Pavel Sviridov",
		title: "Frontend Web Developer",
		email: "pavlentiysv@gmail.com",
		phone: "+1 (248) 252-2624",
		location: "Birmingham, Michigan, USA",
		linkedin: "https://linkedin.com/in/p-sviridov",
		github: "https://github.com/p-sviridov",
	},
	summary: `Experienced and proactive web developer with 4+ years of professional experience in Angular,
React, and Vue. Skilled team player. Open-minded to innovative technologies. Proven track
record of delivering high-quality web apps and achieving project milestones in a timely manner.
Passionate to bring useful software making people's lives easier.`,
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
			location: "Minsk, Belarus",
			startDate: "10/2021",
			current: true,
			description: [
				"Responsible for front-end development of web apps for GM, using Angular, React, Vue.",
				"Automated testing with Mocha and Selenium, manual testing and test case writing.",
				"Experience working on .Net Core + Razor Pages project.",
			],
			// TODO: add technologies and more detailed description
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
				"Responsible for front-end development of web apps, primarily using TypeScript/Angular/Firebase.",
				"Daily communication with clients and team from the USA.",
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

		// TODO: add courses ???
	],
	projects: [],
	skills: {
		primary: [],
		secondary: [],
	},
};
