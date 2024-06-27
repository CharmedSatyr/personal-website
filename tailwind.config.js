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
			fontFamily: {
				sans: ["var(--font-sans)"],
				serif: ["var(--font-serif)"],
			},
			colors: {
				dark: {
					primary: colors.slate,
					secondary: colors.red[300],
					accent: colors.teal[300],
					hover: colors.amber[200],
				},
				primary: colors.slate,
				secondary: colors.teal[700],
				accent: colors.amber[600],
				hover: colors.blue[700],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
