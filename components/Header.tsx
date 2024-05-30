"use client";

import { usePathname } from "next/navigation";

import Link from "components/Link";
import headerNavLinks from "data/header-nav-links";
import siteMetadata from "data/site-metadata";

const sortNavLinksAlphaAsc = (a, b) => {
	if (a.title > b.title) {
		return 1;
	}

	if (a.title < b.title) {
		return -1;
	}

	return 0;
};

const NavLinks = () => {
	const pathName = usePathname();

	if (!pathName || pathName === "/") {
		return null;
	}

	return (
		<nav className="space-x-4">
			{headerNavLinks
				.filter((link) => link.href !== "/")
				.filter((link) => link.href !== pathName)
				.sort((a, b) => {
					if (a.title > b.title) {
						return 1;
					}

					if (a.title < b.title) {
						return -1;
					}

					return 0;
				})
				.map((link) => (
					<Link className="highlighted" key={link.title} href={link.href}>
						{link.title}
					</Link>
				))}
		</nav>
	);
};

const Header = () => {
	return (
		<header className="flex items-center justify-between px-8 py-4">
			<Link className="highlighted" href="/">
				{siteMetadata.headerTitle}
			</Link>

			<div className="flex items-center space-x-4">
				<NavLinks />
			</div>
		</header>
	);
};

export default Header;
