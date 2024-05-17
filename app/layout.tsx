import "css/tailwind.css";

import ThemeProviders from "app/theme-providers";
import Header from "components/Header";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.webp" />

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
