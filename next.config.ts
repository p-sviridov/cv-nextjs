import type { NextConfig } from "next";

// Only use basePath for production (GitHub Pages)
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
	output: "export",
	trailingSlash: true,
	basePath: isProduction ? "/cv-nextjs" : "",
	assetPrefix: isProduction ? "/cv-nextjs" : "",
	images: {
		unoptimized: true,
	},
};

console.log("Next.js Config:", {
	NODE_ENV: process.env.NODE_ENV,
	isProduction,
	basePath: nextConfig.basePath,
	assetPrefix: nextConfig.assetPrefix,
});

export default nextConfig;
