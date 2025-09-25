import { CVData } from "./cv-data.model";

export const cvData: CVData = {
	personal: {
		name: "Your Name",
		title: "Your Professional Title",
		email: "your.email@example.com",
		phone: "+1 (555) 123-4567",
		location: "City, State, Country",
		website: "https://yourwebsite.com",
		linkedin: "https://linkedin.com/in/yourprofile",
		github: "https://github.com/yourusername",
	},
	summary:
		"Write a compelling professional summary that highlights your key strengths, experience, and career objectives. Keep it concise but impactful, typically 2-3 sentences.",
	experience: [
		{
			company: "Company Name",
			position: "Job Title",
			location: "City, State",
			startDate: "2023-01",
			endDate: "2024-12",
			current: false,
			description: [
				"Describe your key responsibilities and achievements",
				"Use action verbs and quantify results when possible",
				"Highlight technologies and methodologies used",
			],
			technologies: ["React", "TypeScript", "Node.js", "AWS"],
		},
	],
	education: [
		{
			institution: "University Name",
			degree: "Bachelor of Science",
			field: "Computer Science",
			location: "City, State",
			startDate: "2019-09",
			endDate: "2023-05",
			current: false,
			gpa: "3.8/4.0",
			relevantCoursework: [
				"Data Structures and Algorithms",
				"Software Engineering",
				"Database Systems",
				"Machine Learning",
			],
		},
	],
	skills: {
		technical: [
			"JavaScript/TypeScript",
			"React/Next.js",
			"Node.js",
			"Python",
			"SQL",
			"Git",
		],
		languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
		tools: ["VS Code", "Git", "Docker", "AWS", "Figma", "Postman"],
		soft: [
			"Problem Solving",
			"Team Leadership",
			"Communication",
			"Project Management",
			"Mentoring",
		],
	},
	projects: [
		{
			name: "Project Name",
			description:
				"Brief description of what the project does and its purpose",
			technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
			url: "https://yourproject.com",
			github: "https://github.com/yourusername/project",
			startDate: "2023-06",
			endDate: "2023-12",
			highlights: [
				"Key achievement or feature",
				"Technical challenge solved",
				"Impact or result achieved",
			],
		},
	],
	certifications: [
		{
			name: "AWS Certified Developer",
			issuer: "Amazon Web Services",
			date: "2023-08",
			url: "https://aws.amazon.com/certification/",
		},
	],
	languages: [
		{
			language: "English",
			proficiency: "Native",
		},
		{
			language: "Spanish",
			proficiency: "Fluent",
		},
	],
};
