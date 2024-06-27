import Link from "@/components/link";
import ThemeSwitch from "@/components/theme-switch";
import siteMetadata from "@/data/site-metadata";
import { HeartIcon } from "@heroicons/react/24/solid";

const StaticFooter = () => {
	return (
		<footer className="flex w-screen items-center justify-center space-x-2 text-nowrap px-8 py-4 text-sm dark:text-primary-400 md:text-base">
			<section>
				{`© ${new Date().getFullYear()}`} {siteMetadata.author}
			</section>

			<HeartIcon className="size-2" />

			<Link href="/colophon">Colophon</Link>

			<HeartIcon className="size-2" />

			<ThemeSwitch />
		</footer>
	);
};

export default StaticFooter;
