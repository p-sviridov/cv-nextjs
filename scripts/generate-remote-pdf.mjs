#!/usr/bin/env node

import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import puppeteer from "puppeteer";

// make sure it's the same name as in the data/cv-data.ts but with underscores instead of spaces
const PERSONAL_NAME = "Pavel_Sviridov";
const TARGET_URL = "https://p-sviridov.github.io/cv-nextjs/";
const SCALE = 0.9;
const PDF_MARGIN_MM = {
	top: "12mm",
	right: "12mm",
	bottom: "12mm",
	left: "12mm",
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const [, , outputArg] = process.argv;
const defaultOutputPath = path.resolve(
	__dirname,
	`../public/${PERSONAL_NAME}_CV.pdf`
);
const outputPath = outputArg
	? path.resolve(process.cwd(), outputArg)
	: defaultOutputPath;

async function main() {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	await page.setViewport({ width: 1280, height: 720 });
	await page.emulateMediaType("screen");

	await page.goto(TARGET_URL, { waitUntil: "networkidle0" });
	await page.waitForSelector("main");

	await page.addStyleTag({
		content: `
      main > div:first-of-type {
        display: none !important;
      }
    `,
	});
	// # Reason: Avoid printing the in-page download button in the generated PDF.
	// # Reason: Ensures consistent print layout with readable page gutters in the PDF export.
	await page.addStyleTag({
		content: `
      body {
        background: #ffffff;
      }
    `,
	});

	await mkdir(path.dirname(outputPath), { recursive: true });

	await page.pdf({
		path: outputPath,
		format: "A4",
		printBackground: true,
		margin: PDF_MARGIN_MM,
		scale: SCALE,
	});

	await browser.close();
	console.log(`CV PDF generated at ${outputPath}`);
}

main().catch((error) => {
	console.error("Failed to generate CV PDF.");
	console.error(error);
	process.exitCode = 1;
});
