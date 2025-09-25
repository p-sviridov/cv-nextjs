export interface CVData {
	personal: {
		name: string;
		title: string;
		email: string;
		phone: string;
		location: string;
		website?: string;
		linkedin?: string;
		github?: string;
	};
	summary: string;
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
		degree: string;
		field: string;
		location: string;
		startDate: string;
		endDate?: string;
		current: boolean;
		gpa?: string;
		relevantCoursework?: string[];
	}>;
	skills: {
		technical: string[];
		languages: string[];
		tools: string[];
		soft: string[];
	};
	projects: Array<{
		name: string;
		description: string;
		technologies: string[];
		url?: string;
		github?: string;
		startDate: string;
		endDate?: string;
		highlights: string[];
	}>;
	certifications: Array<{
		name: string;
		issuer: string;
		date: string;
		url?: string;
	}>;
	languages: Array<{
		language: string;
		proficiency: "Native" | "Fluent" | "Advanced" | "Intermediate" | "Basic";
	}>;
}
