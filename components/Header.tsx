"use client";

import { usePathname } from "next/navigation";

import Link from "components/Link";
import ThemeSwitch from "components/ThemeSwitch";
import headerNavLinks from "data/header-nav-links";
import siteMetadata from "data/site-metadata";

const NavLinks = () => {
	const pathName = usePathname();

	if (!pathName || pathName === "/") {
		return null;
	}

	return (
		<nav>
			{headerNavLinks
				.filter((link) => link.href !== "/")
				.filter((link) => link.href !== pathName)
				.map((link) => (
					<Link className="text-indigo-300" key={link.title} href={link.href}>
						{link.title}
					</Link>
				))}
		</nav>
	);
};

const Header = () => {
	return (
		<header className="flex items-center justify-between px-8 py-4 text-xl md:text-2xl">
			<Link className="text-indigo-300" href="/">
				{siteMetadata.headerTitle}
			</Link>

			<div className="flex items-center space-x-4">
				<NavLinks />
				<ThemeSwitch />
			</div>
		</header>
	);
};

export default Header;
