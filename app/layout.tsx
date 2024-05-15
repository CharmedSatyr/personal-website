import "css/tailwind.css";

import { ThemeProviders } from "app/theme-providers";
import Header from "components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />

			<body className="bg-indigo-950 text-indigo-300">
				<ThemeProviders>
					<Header />
					<main className="m-20 flex justify-center">{children}</main>
				</ThemeProviders>
			</body>
		</html>
	);
}
