import Link from "@/components/link";
import navLinks from "@/data/nav-links";

const NavLinks = () => (
	<nav className="grid w-3/4 grid-cols-2 gap-2 text-center sm:w-1/2 md:flex md:w-full md:space-x-4">
		{navLinks
			.filter((link) => link.href !== "/")
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

export default NavLinks;
