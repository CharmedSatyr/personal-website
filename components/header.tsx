"use client";

import { usePathname } from "next/navigation";

import Link from "@/components/link";
import headerNavLinks from "@/data/header-nav-links";
import siteMetadata from "@/data/site-metadata";

const NavLinks = () => {
	const pathName = usePathname();

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
					<Link key={link.title} href={link.href}>
						{link.title}
					</Link>
				))}
		</nav>
	);
};

const Header = () => {
	return (
		<header className="fixed left-0 right-0 top-0 flex w-screen items-center justify-between bg-primary-50 px-8 py-4 opacity-75 drop-shadow dark:bg-primary-950">
			<Link href="/">{siteMetadata.headerTitle}</Link>

			<div className="flex items-center space-x-2">
				<NavLinks />
			</div>
		</header>
	);
};

export default Header;
