import {
	Paragraph,
	TextRun,
	HeadingLevel,
	AlignmentType,
	convertInchesToTwip,
	TableRow,
	TableCell,
	WidthType,
	BorderStyle,
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
	title: 32, // 16pt
	heading1: 28, // 14pt
	heading2: 24, // 12pt
	heading3: 22, // 11pt
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
	accent: "545454", // Gray
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
				font: "Arial",
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
				font: "Arial",
			}),
		],
		alignment: AlignmentType.CENTER,
		spacing: {
			after: SPACING.small,
		},
	});
}

/**
 * Creates a section heading with bottom border divider
 */
export function createSectionHeading(text: string): Paragraph {
	return new Paragraph({
		children: [
			new TextRun({
				text,
				bold: true,
				size: FONT_SIZES.heading1,
				color: COLORS.primary,
				font: "Arial",
			}),
		],
		heading: HeadingLevel.HEADING_1,
		border: {
			bottom: {
				style: BorderStyle.SINGLE,
				size: 6, // Line thickness
				color: COLORS.primary,
				space: 0.5, // Space between text and line
			},
		},
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
				font: "Arial",
			}),
		],
		spacing: {
			before: SPACING.paragraph,
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
				font: "Arial",
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
				font: "Arial",
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
					font: "Arial",
				}),
			]
		: [
				new TextRun({
					text,
					size: FONT_SIZES.body,
					color: COLORS.accent,
					font: "Arial",
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
				font: "Arial",
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
				font: "Arial",
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
				font: "Arial",
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
				font: "Arial",
			}),
		],
		spacing: {
			after: SPACING.paragraph,
		},
	});
}

/**
 * Creates a combined skills paragraph with primary skills bold and secondary skills normal
 */
export function createCombinedSkillsParagraph(
	primarySkills: string[],
	secondarySkills: string[]
): Paragraph {
	const children: TextRun[] = [];

	// Add primary skills (bold)
	if (primarySkills.length > 0) {
		children.push(
			new TextRun({
				text: primarySkills.join(", "),
				size: FONT_SIZES.body,
				color: COLORS.text,
				bold: true,
				font: "Arial",
			})
		);
	}

	// Add secondary skills (normal) with separator if primary skills exist
	if (secondarySkills.length > 0) {
		const separator = primarySkills.length > 0 ? ", " : "";
		children.push(
			new TextRun({
				text: separator + secondarySkills.join(", "),
				size: FONT_SIZES.body,
				color: COLORS.text,
				bold: false,
				font: "Arial",
			})
		);
	}

	return new Paragraph({
		children,
		spacing: {
			after: SPACING.paragraph,
		},
	});
}

/**
 * Creates a unified table row with left content (title/subtitle) and right content (date/location)
 * Used for both education and experience sections
 */
export function createTableRow(
	title: string,
	subtitle: string,
	dateLocation: string
): TableRow {
	return new TableRow({
		children: [
			// Left cell (wide) - contains title and subtitle
			new TableCell({
				children: [
					// Title paragraph
					new Paragraph({
						children: [
							new TextRun({
								text: title,
								bold: true,
								size: FONT_SIZES.heading2,
								color: COLORS.primary,
								font: "Arial",
							}),
						],
						spacing: {
							after: SPACING.tiny,
						},
					}),
					// Subtitle paragraph
					new Paragraph({
						children: [
							new TextRun({
								text: subtitle,
								size: FONT_SIZES.body,
								color: COLORS.text,
								font: "Arial",
							}),
						],
						spacing: {
							after: SPACING.tiny,
						},
					}),
				],
				width: {
					size: 70,
					type: WidthType.PERCENTAGE,
				},
				margins: {
					top: convertInchesToTwip(0.05),
					bottom: convertInchesToTwip(0.05),
					left: convertInchesToTwip(0),
					right: convertInchesToTwip(0),
				},
				borders: {
					top: { style: "none", size: 0, color: "FFFFFF" },
					bottom: { style: "none", size: 0, color: "FFFFFF" },
					left: { style: "none", size: 0, color: "FFFFFF" },
					right: { style: "none", size: 0, color: "FFFFFF" },
				},
			}),
			// Right cell (narrow) - contains date and location
			new TableCell({
				children: [
					new Paragraph({
						children: [
							new TextRun({
								text: dateLocation,
								size: FONT_SIZES.small,
								color: COLORS.muted,
								italics: true,
								font: "Arial",
							}),
						],
						alignment: AlignmentType.RIGHT,
					}),
				],
				width: {
					size: 30,
					type: WidthType.PERCENTAGE,
				},
				margins: {
					top: convertInchesToTwip(0.05),
					bottom: convertInchesToTwip(0.05),
					left: convertInchesToTwip(0),
					right: convertInchesToTwip(0),
				},
				borders: {
					top: { style: "none", size: 0, color: "FFFFFF" },
					bottom: { style: "none", size: 0, color: "FFFFFF" },
					left: { style: "none", size: 0, color: "FFFFFF" },
					right: { style: "none", size: 0, color: "FFFFFF" },
				},
			}),
		],
	});
}
