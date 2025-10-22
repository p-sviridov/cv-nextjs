import { Document, Paragraph, Packer, Table } from "docx";
import { CVData } from "@/data/cv-data.model";
import {
	DOCUMENT_MARGINS,
	createTitleParagraph,
	createSubtitleParagraph,
	createSectionHeading,
	createSubsectionHeading,
	createBodyParagraph,
	createBulletParagraph,
	createContactParagraph,
	createDateLocationParagraph,
	createTechnologiesParagraph,
	createSummaryParagraph,
	createSkillsParagraph,
	createEducationTableRow,
} from "./docxStyles";

/**
 * DOCX Builders
 * Semantic builders that transform CV data into DOCX document structure
 * Reads from data/cv-data.ts and builds native Word document
 */

/**
 * Builds the personal information section
 */
function buildPersonalSection(personal: CVData["personal"]): Paragraph[] {
	const paragraphs: Paragraph[] = [];

	// Name (title)
	paragraphs.push(createTitleParagraph(personal.name));

	// Job title (subtitle)
	paragraphs.push(createSubtitleParagraph(personal.title));

	// Location
	paragraphs.push(createContactParagraph(personal.location));

	// Contact information - combine all into one line separated by dots
	const contactItems: string[] = [];

	if (personal.email) {
		contactItems.push(personal.email);
	}
	if (personal.phone) {
		contactItems.push(personal.phone);
	}
	if (personal.linkedin) {
		contactItems.push(personal.linkedin.replace(/^https?:\/\//, ""));
	}
	if (personal.github) {
		contactItems.push(personal.github.replace(/^https?:\/\//, ""));
	}
	if (personal.telegram) {
		contactItems.push(`@${personal.telegram.split("/").pop()}`);
	}
	if (personal.website) {
		contactItems.push("Website");
	}

	if (contactItems.length > 0) {
		const contactText = contactItems.join(" • ");
		paragraphs.push(createContactParagraph(contactText));
	}

	// Summary
	paragraphs.push(createSummaryParagraph(personal.summary));

	return paragraphs;
}

/**
 * Builds the languages section
 */
function buildLanguagesSection(languages: CVData["languages"]): Paragraph[] {
	const paragraphs: Paragraph[] = [];

	paragraphs.push(createSectionHeading("Languages"));

	// Create a single paragraph with all languages
	const languageText = languages
		.map((lang) => `${lang.language} (${lang.proficiency})`)
		.join(" • ");

	paragraphs.push(createBodyParagraph(languageText));

	return paragraphs;
}

/**
 * Builds the experience section
 */
function buildExperienceSection(experience: CVData["experience"]): Paragraph[] {
	const paragraphs: Paragraph[] = [];

	paragraphs.push(createSectionHeading("Experience"));

	experience.forEach((job) => {
		// Company name
		paragraphs.push(createSubsectionHeading(job.company));

		// Position and dates
		const dateRange = job.current
			? `${job.startDate} - Present`
			: `${job.startDate} - ${job.endDate}`;

		paragraphs.push(createBodyParagraph(job.position, { bold: true }));
		paragraphs.push(
			createDateLocationParagraph(`${dateRange} • ${job.location}`)
		);

		// Job description
		job.description.forEach((desc) => {
			paragraphs.push(createBulletParagraph(desc.main));

			if (desc.details && desc.details.length > 0) {
				desc.details.forEach((detail) => {
					paragraphs.push(createBulletParagraph(detail, 1));
				});
			}
		});

		// Technologies
		if (job.technologies && job.technologies.length > 0) {
			paragraphs.push(createTechnologiesParagraph(job.technologies));
		}

		// Add spacing between jobs
		paragraphs.push(createBodyParagraph("", { spacing: "small" }));
	});

	return paragraphs;
}

/**
 * Builds the education section
 */
function buildEducationSection(
	education: CVData["education"]
): (Paragraph | Table)[] {
	const elements: (Paragraph | Table)[] = [];

	elements.push(createSectionHeading("Education"));

	if (education.length > 0) {
		// Create table rows for each education entry
		const tableRows = education.map((edu) => {
			// Dates and location
			const dateRange = edu.endDate
				? `${edu.startDate} - ${edu.endDate}`
				: edu.startDate;

			const locationText = edu.location
				? `${dateRange} • ${edu.location}`
				: dateRange;

			return createEducationTableRow(
				edu.description,
				edu.institution,
				locationText
			);
		});

		// Create the table
		const educationTable = new Table({
			rows: tableRows,
			width: {
				size: 100,
				type: "pct",
			},
			borders: {
				top: { style: "none", size: 0, color: "FFFFFF" },
				bottom: { style: "none", size: 0, color: "FFFFFF" },
				left: { style: "none", size: 0, color: "FFFFFF" },
				right: { style: "none", size: 0, color: "FFFFFF" },
				insideVertical: { style: "none", size: 0, color: "FFFFFF" },
				insideHorizontal: { style: "none", size: 0, color: "FFFFFF" },
			},
		});

		elements.push(educationTable);
	}

	return elements;
}

/**
 * Builds the projects section (if projects exist)
 */
function buildProjectsSection(projects: CVData["projects"]): Paragraph[] {
	const paragraphs: Paragraph[] = [];

	if (projects.length === 0) {
		return paragraphs;
	}

	paragraphs.push(createSectionHeading("Projects"));

	projects.forEach((project) => {
		// Project name
		paragraphs.push(createSubsectionHeading(project.name));

		// Description
		paragraphs.push(createBodyParagraph(project.description));

		// Dates
		const dateRange = project.endDate
			? `${project.startDate} - ${project.endDate}`
			: project.startDate;
		paragraphs.push(createDateLocationParagraph(dateRange));

		// Technologies
		if (project.technologies && project.technologies.length > 0) {
			paragraphs.push(createTechnologiesParagraph(project.technologies));
		}

		// Highlights
		if (project.highlights && project.highlights.length > 0) {
			project.highlights.forEach((highlight) => {
				paragraphs.push(createBulletParagraph(highlight));
			});
		}

		// Links
		if (project.url) {
			paragraphs.push(createContactParagraph("Project Link", project.url));
		}
		if (project.github) {
			paragraphs.push(createContactParagraph("GitHub", project.github));
		}

		// Add spacing between projects
		paragraphs.push(createBodyParagraph("", { spacing: "small" }));
	});

	return paragraphs;
}

/**
 * Builds the skills section
 */
function buildSkillsSection(skills: CVData["skills"]): Paragraph[] {
	const paragraphs: Paragraph[] = [];

	paragraphs.push(createSectionHeading("Skills"));

	// Primary skills
	if (skills.primary.length > 0) {
		paragraphs.push(createSkillsParagraph(skills.primary, true));
	}

	// Secondary skills
	if (skills.secondary.length > 0) {
		paragraphs.push(createSkillsParagraph(skills.secondary, false));
	}

	return paragraphs;
}

/**
 * Main function to build the complete DOCX document
 */
export async function buildCVDocument(cvData: CVData): Promise<Document> {
	const elements: (Paragraph | Table)[] = [];

	// Build all sections
	elements.push(...buildPersonalSection(cvData.personal));
	elements.push(...buildLanguagesSection(cvData.languages));
	elements.push(...buildExperienceSection(cvData.experience));
	elements.push(...buildEducationSection(cvData.education));
	elements.push(...buildProjectsSection(cvData.projects));
	elements.push(...buildSkillsSection(cvData.skills));

	// Create the document
	const doc = new Document({
		sections: [
			{
				properties: {
					page: {
						margin: DOCUMENT_MARGINS,
					},
				},
				children: elements,
			},
		],
	});

	return doc;
}

/**
 * Generates and downloads the DOCX file
 */
export async function generateAndDownloadCV(
	cvData: CVData,
	filename: string = "CV.docx"
): Promise<void> {
	try {
		// Build the document
		const doc = await buildCVDocument(cvData);

		// Generate the blob
		const buffer = await Packer.toBuffer(doc);
		const blob = new Blob([new Uint8Array(buffer)], {
			type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		});

		// Create download link
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;

		// Trigger download
		document.body.appendChild(link);
		link.click();

		// Cleanup
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	} catch (error) {
		console.error("Error generating DOCX:", error);
		throw new Error("Failed to generate CV document");
	}
}
