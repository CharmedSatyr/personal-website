import "css/tailwind.css";

import ThemeProviders from "app/theme-providers";
import Header from "components/Header";
import siteMetadata from "data/site-metadata";
import { Metadata } from "next";

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
	alternates: {
		canonical: "./",
		types: {
			"application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
		},
	},
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang={siteMetadata.locale} suppressHydrationWarning>
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/static/favicons/favicon-32x32.webp"
				/>
			</head>

			<body>
				<ThemeProviders>
					<Header />
					<main className="m-10 flex justify-center md:m-20">{children}</main>
				</ThemeProviders>
			</body>
		</html>
	);
};

export default RootLayout;
