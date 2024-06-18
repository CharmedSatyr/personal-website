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
					secondary: colors.amber,
					accent: colors.teal,
				},
				grayscale: colors.slate,
				primary: colors.zinc,
				secondary: colors.teal,
				accent: colors.amber,
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
