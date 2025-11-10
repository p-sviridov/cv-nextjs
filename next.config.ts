import type { NextConfig } from "next";

// Only use basePath for GitHub Pages deployment
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	basePath: isGithubPages ? "/cv-nextjs" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
