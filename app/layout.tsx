import { Suspense } from "react";
import { Metadata } from "next";
import { Asul, Poppins } from "next/font/google";

import ThemeProviders from "@/app/theme-providers";
import Analytics from "@/components/analytics";
import Footer from "@/components/footer";
import Header from "@/components/header";
import siteMetadata from "@/data/site-metadata";

import "@/css/tailwind.css";

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

const sans = Poppins({
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["200", "300", "400", "600"],
});

const serif = Asul({
	subsets: ["latin"],
	variable: "--font-serif",
	weight: ["400"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang={siteMetadata.locale} suppressHydrationWarning>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/static/favicons/favicon-32x32.webp"
			/>

			<body
				className={`${sans.variable} ${serif.variable} text bg-primary-50 dark:bg-primary-900 flex h-screen flex-col items-center`}
			>
				<ThemeProviders>
					<Header />

					<main className="mb-auto w-10/12 pt-24 sm:w-9/12 md:w-8/12 lg:w-7/12 lg:pt-28 xl:w-5/12 2xl:w-4/12">
						{children}
					</main>
					<Suspense>
						<Footer />
					</Suspense>
				</ThemeProviders>

				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
