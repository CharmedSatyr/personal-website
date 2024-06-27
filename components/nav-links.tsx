"use client";

import { usePathname } from "next/navigation";

import Link from "@/components/link";
import headerNavLinks from "@/data/header-nav-links";

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

export default NavLinks;
