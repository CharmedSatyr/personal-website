"use client";

import { ThemeProvider } from "next-themes";

import siteMetadata from "@/data/site-metadata";

const ThemeProviders = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
			{children}
		</ThemeProvider>
	);
};

export default ThemeProviders;
