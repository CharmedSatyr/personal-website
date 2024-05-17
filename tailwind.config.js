import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: colors.indigo,
				secondary: colors.teal,
				accent: colors.amber,
			},
		},
	},
	plugins: [],
};
