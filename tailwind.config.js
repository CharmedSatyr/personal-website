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
					secondary: colors.amber[100],
					accent: colors.teal[300],
					highlight: colors.red[200],
				},
				primary: colors.slate,
				secondary: colors.blue[600],
				accent: colors.amber[600],
				highlight: colors.teal[700],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
