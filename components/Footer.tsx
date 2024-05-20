import ThemeSwitch from "components/ThemeSwitch";

const Footer = () => {
	return (
		<footer className="flex items-center justify-center space-x-2 px-8 py-4">
			<div>{`Copyright © ${new Date().getFullYear()}`}</div>
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
