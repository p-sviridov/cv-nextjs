import type { NextConfig } from "next";

// Only use basePath for production (GitHub Pages)
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	basePath: isProduction ? "/cv-nextjs" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
