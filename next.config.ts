import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";

import type { NextConfig } from "next";

// Content hash of the CV PDF, appended to the download link so browsers
// fetch the new file whenever it is regenerated instead of a cached copy.
const pdfHash = createHash("sha256")
	.update(
		readFileSync(path.join(process.cwd(), "public/Pavel_Sviridov_CV.pdf"))
	)
	.digest("hex")
	.slice(0, 8);

const nextConfig: NextConfig = {
	output: "export",
	// GitHub Pages serves the site under /cv-nextjs.
	basePath: process.env.NODE_ENV === "production" ? "/cv-nextjs" : "",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	env: {
		NEXT_PUBLIC_CV_PDF_HASH: pdfHash,
	},
};

export default nextConfig;
