import ThemeSwitch from "components/ThemeSwitch";
import siteMetadata from "data/site-metadata";

const Footer = () => {
	return (
		<footer className="flex items-center justify-center space-x-2 text-nowrap px-8 py-4 text-xs md:text-sm">
			<div>
				{`© ${new Date().getFullYear()}`} {siteMetadata.author}
			</div>
			<div> • </div>
			<div>Updated {process.env.lastUpdated}</div>
			<div> • </div>
			<div>
				<ThemeSwitch />
			</div>
		</footer>
	);
};

export default Footer;
