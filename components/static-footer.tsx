import Bee from "@/components/bee";
import Link from "@/components/link";
import ThemeSwitch from "@/components/theme-switch";
import siteMetadata from "@/data/site-metadata";

const StaticFooter = () => {
	return (
		<footer className="flex w-screen items-center justify-center space-x-2 text-nowrap px-8 py-4 text-sm dark:text-dark-primary-400">
			<section>
				{`© ${new Date().getFullYear()}`} {siteMetadata.author}
			</section>

			<Bee height={15} width={15} />

			<Link href="/colophon">Colophon</Link>

			<Bee height={15} width={15} />

			<ThemeSwitch />
		</footer>
	);
};

export default StaticFooter;
