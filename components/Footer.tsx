import Bee from "components/Bee";
import ThemeSwitch from "components/ThemeSwitch";
import siteMetadata from "data/site-metadata";

const Footer = () => {
	return (
		<footer className="flex w-screen items-center justify-center space-x-2 text-nowrap px-8 py-4 text-xs md:text-sm">
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
