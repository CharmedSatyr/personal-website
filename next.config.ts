import withMDX from "@next/mdx";

const getBuildDate = () => {
	const date = new Date();

	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString();
	const day = date.getDate().toString();

	return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
};

const nextConfig: import("next").NextConfig = {
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

export default withMDX()(nextConfig);
