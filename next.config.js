// Should be out of canary soon: https://github.com/vercel/next.js/pull/63051
/* eslint-disable-next-line @typescript-eslint/no-require-imports */
const withMDX = require("@next/mdx")();

const getBuildDate = () => {
	const date = new Date();

	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString();
	const day = date.getDate().toString();

	return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "shared.akamai.steamstatic.com",
			},
		],
	},
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	env: {
		lastUpdated: getBuildDate(),
	},
};

module.exports = withMDX(nextConfig);
