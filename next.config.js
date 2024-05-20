const getBuildDate = () => {
	const date = new Date();

	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString();
	const day = date.getDate().toString();

	return [year, month.padStart(2, "0"), day.padStart(2, "0")].join("-");
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		lastUpdated: getBuildDate(),
	},
};

module.exports = nextConfig;
