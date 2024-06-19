import Bee from "@/components/bee";
import ThemeSwitch from "@/components/theme-switch";
import siteMetadata from "@/data/site-metadata";

const Footer = () => {
	return (
		<footer className="flex w-screen items-center justify-center space-x-2 text-nowrap px-8 py-4 text-sm dark:text-dark-primary-400">
			<section>
				{`© ${new Date().getFullYear()}`} {siteMetadata.author}
			</section>

			<Bee height={15} width={15} />

			<div>Updated {process.env.lastUpdated}</div>

			<Bee height={15} width={15} />

			<ThemeSwitch />
		</footer>
	);
};

export default Footer;
