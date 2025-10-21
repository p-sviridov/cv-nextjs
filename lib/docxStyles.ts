import {
	Paragraph,
	TextRun,
	HeadingLevel,
	AlignmentType,
	convertInchesToTwip,
} from "docx";

/**
 * DOCX Style System
 * Provides consistent styling for CV document generation
 * No runtime Tailwind usage - pure DOCX styling
 */

// Margins: 1 inch on all sides
export const DOCUMENT_MARGINS = {
	top: convertInchesToTwip(0.25),
	right: convertInchesToTwip(0.75),
	bottom: convertInchesToTwip(0.25),
	left: convertInchesToTwip(0.75),
};

// Font sizes (in half-points)
export const FONT_SIZES = {
	title: 32, // 18pt
	heading1: 32, // 16pt
	heading2: 28, // 14pt
	heading3: 24, // 12pt
	body: 20, // 10pt
	small: 18, // 9pt
	tiny: 14, // 7pt
} as const;

// Spacing (in twips)
export const SPACING = {
	section: 240, // 12pt
	paragraph: 120, // 6pt
	small: 60, // 3pt
	tiny: 30, // 1.5pt
} as const;

// Colors (hex values)
export const COLORS = {
	primary: "020403", // Obsidian
	secondary: "7F8C8D", // Medium gray
	accent: "3498DB", // Blue
	muted: "95A5A6", // Light gray
	text: "020403", // Obsidian
} as const;

/**
 * Creates a title paragraph (name)
 */
export function createTitleParagraph(text: string): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				bold: true,
				size: FONT_SIZES.title,
				color: COLORS.primary,
				font: "Calibri",
			}),
		],
		alignment: AlignmentType.CENTER,
	});
}

/**
 * Creates a subtitle paragraph (job title)
 */
export function createSubtitleParagraph(text: string): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				size: FONT_SIZES.heading1,
				color: COLORS.primary,
				font: "Calibri",
			}),
		],
		alignment: AlignmentType.CENTER,
		spacing: {
			after: SPACING.small,
		},
	});
}

/**
 * Creates a section heading
 */
export function createSectionHeading(text: string): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				bold: true,
				size: FONT_SIZES.heading1,
				color: COLORS.primary,
				font: "Calibri",
			}),
		],
		heading: HeadingLevel.HEADING_1,
		spacing: {
			before: SPACING.section,
			after: SPACING.paragraph,
		},
	});
}

/**
 * Creates a subsection heading (company, institution)
 */
export function createSubsectionHeading(text: string): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				bold: true,
				size: FONT_SIZES.heading2,
				color: COLORS.primary,
				font: "Calibri",
			}),
		],
		spacing: {
			before: SPACING.paragraph,
			after: SPACING.small,
		},
	});
}

/**
 * Creates a regular body paragraph
 */
export function createBodyParagraph(
	text: string,
	options?: {
		bold?: boolean;
		italic?: boolean;
		spacing?: "normal" | "small" | "tiny";
	}
): Paragraph {
	const spacing =
		options?.spacing === "small"
			? SPACING.small
			: options?.spacing === "tiny"
				? SPACING.tiny
				: SPACING.paragraph;

	return new Paragraph({
		children: [
			new TextRun({
				text,
				bold: options?.bold,
				italics: options?.italic,
				size: FONT_SIZES.body,
				color: COLORS.text,
				font: "Calibri",
			}),
		],
		spacing: {
			after: spacing,
		},
	});
}

/**
 * Creates a bullet point paragraph
 */
export function createBulletParagraph(
	text: string,
	level: 0 | 1 = 0
): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				size: FONT_SIZES.body,
				color: COLORS.text,
				font: "Calibri",
			}),
		],
		bullet: {
			level: level,
		},
		spacing: {
			after: SPACING.small,
		},
	});
}

/**
 * Creates a contact info paragraph with clickable links
 */
export function createContactParagraph(text: string, url?: string): Paragraph {
	const children = url
		? [
				new TextRun({
					text,
					size: FONT_SIZES.body,
					color: COLORS.accent,
					font: "Calibri",
				}),
			]
		: [
				new TextRun({
					text,
					size: FONT_SIZES.body,
					color: COLORS.text,
					font: "Calibri",
				}),
			];

	return new Paragraph({
		children,
		alignment: AlignmentType.CENTER,
		spacing: {
			after: SPACING.tiny,
		},
	});
}

/**
 * Creates a date/location paragraph (small, right-aligned)
 */
export function createDateLocationParagraph(text: string): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				size: FONT_SIZES.small,
				color: COLORS.muted,
				italics: true,
				font: "Calibri",
			}),
		],
		alignment: AlignmentType.RIGHT,
		spacing: {
			after: SPACING.tiny,
		},
	});
}

/**
 * Creates a technologies paragraph (small, comma-separated)
 */
export function createTechnologiesParagraph(technologies: string[]): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text: technologies.join(", "),
				size: FONT_SIZES.small,
				color: COLORS.muted,
				font: "Calibri",
			}),
		],
		spacing: {
			after: SPACING.small,
		},
	});
}

/**
 * Creates a summary paragraph (larger, justified)
 */
export function createSummaryParagraph(text: string): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				size: FONT_SIZES.body,
				color: COLORS.text,
				font: "Calibri",
			}),
		],
		alignment: AlignmentType.JUSTIFIED,
		spacing: {
			after: SPACING.section,
		},
	});
}

/**
 * Creates a skills paragraph with primary/secondary distinction
 */
export function createSkillsParagraph(
	skills: string[],
	isPrimary: boolean = false
): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text: skills.join(", "),
				size: FONT_SIZES.body,
				color: COLORS.text,
				bold: isPrimary,
				font: "Calibri",
			}),
		],
		spacing: {
			after: SPACING.paragraph,
		},
	});
}
