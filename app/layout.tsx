import { Metadata } from "next";
import { Poppins } from "next/font/google";

import "css/tailwind.css";
import ThemeProviders from "app/theme-providers";
import Footer from "components/Footer";
import Header from "components/Header";
import siteMetadata from "data/site-metadata";

/**
 * See https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */
export const metadata: Metadata = {
	metadataBase: new URL(siteMetadata.siteUrl),
	title: {
		default: siteMetadata.title,
		template: `%s | ${siteMetadata.title}`,
	},
	description: siteMetadata.description,
	openGraph: {
		title: siteMetadata.title,
		description: siteMetadata.description,
		url: "./",
		siteName: siteMetadata.title,
		locale: "en_US",
		type: "website",
	},
	// alternates: {
	// 	canonical: "./",
	// 	types: {
	// 		"application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
	// 	},
	// },
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

const poppins = Poppins({
	subsets: ["latin"],
	variable: "--font-poppins",
	weight: ["200", "600"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang={siteMetadata.locale} suppressHydrationWarning>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.webp" />

			<body className={`${poppins.variable} flex h-screen flex-col justify-between font-sans`}>
				<ThemeProviders>
					<Header />
					<main className="m-8 flex justify-center md:-mt-10">{children}</main>
					<Footer />
				</ThemeProviders>
			</body>
		</html>
	);
};

export default RootLayout;
