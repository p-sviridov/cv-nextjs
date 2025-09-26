export interface CVData {
	personal: {
		name: string;
		title: string;
		summary: string;
		location: string;
		email: string;
		phone: string;
		website?: string;
		linkedin?: string;
		github?: string;
		telegram?: string;
	};
	languages: Array<{
		language: string;
		proficiency: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic";
	}>;
	experience: Array<{
		company: string;
		position: string;
		location: string;
		startDate: string;
		endDate?: string;
		current: boolean;
		description: string[];
		technologies?: string[];
	}>;
	education: Array<{
		institution: string;
		description: string;
		location?: string;
		startDate: string;
		endDate?: string;
		gpa?: string;
		url?: string;
	}>;
	projects: Array<{
		name: string;
		description: string;
		technologies: string[];
		url?: string;
		github?: string;
		startDate: string;
		endDate?: string;
		highlights?: string[];
	}>;
	skills: {
		primary: string[];
		secondary: string[];
	};
}
