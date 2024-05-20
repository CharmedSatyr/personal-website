const getBuildDate = () => {
	const date = new Date();

	const year = date.getFullYear().toString();
	let month = (date.getMonth() + 1).toString();
	let day = date.getDate().toString();

	if (month.length < 2) {
		month = `0${month}`;
	}

	if (day.length < 2) {
		day = `0${day}`;
	}

	return [year, month, day].join("-");
};

/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		lastUpdated: getBuildDate(),
	},
};

module.exports = nextConfig;
