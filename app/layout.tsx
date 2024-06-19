import { Metadata } from "next";
import { Asul, Poppins } from "next/font/google";
import dotenv from "dotenv";

import ThemeProviders from "@/app/theme-providers";
import Header from "@/components/custom-header";
import Footer from "@/components/footers";
import siteMetadata from "@/data/site-metadata";

import "@/css/tailwind.css";

dotenv.config();

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
	weight: ["200", "600"],
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
				className={`${sans.variable} ${serif.variable} text flex h-screen flex-col items-center bg-primary-50 dark:bg-primary-950`}
			>
				<ThemeProviders>
					<Header />

					<main className="mb-auto w-10/12 pt-20 sm:w-9/12 md:w-8/12 lg:w-7/12 lg:pt-32 xl:w-5/12 2xl:w-4/12">
						{children}
					</main>

					<Footer />
				</ThemeProviders>
			</body>
		</html>
	);
};

export default RootLayout;
