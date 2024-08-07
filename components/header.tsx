import Link from "@/components/link";
import NavLinks from "@/components/nav-links";
import siteMetadata from "@/data/site-metadata";

const Header = () => {
	return (
		<header className="fixed left-0 right-0 top-0 flex w-screen items-center justify-between border-b border-primary-400 bg-primary-50 px-8 py-4 text-accent drop-shadow dark:border-primary-800 dark:bg-primary-950">
			<Link href="/">{siteMetadata.headerTitle}</Link>

			<div className="flex hidden items-center space-x-2 md:inline">
				<NavLinks />
			</div>
		</header>
	);
};

export default Header;
