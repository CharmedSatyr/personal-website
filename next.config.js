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
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
	env: {
		lastUpdated: getBuildDate(),
	},
};

module.exports = withMDX(nextConfig);
