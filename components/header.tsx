import Link from "@/components/link";
import NavLinks from "@/components/nav-links";
import siteMetadata from "@/data/site-metadata";

const Header = () => {
	return (
		<header className="border-primary-400 bg-primary-50 dark:border-primary-800 dark:bg-primary-950/90 fixed flex w-full items-center justify-between border-b px-8 py-4 drop-shadow-lg sm:mt-4 sm:w-11/12 sm:rounded-sm sm:border md:w-11/12 lg:w-9/12 2xl:w-7/12">
			<Link href="/">{siteMetadata.headerTitle}</Link>

			<div className="flex hidden items-center space-x-2 md:inline">
				<NavLinks />
			</div>
		</header>
	);
};

export default Header;
