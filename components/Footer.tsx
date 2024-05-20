const Footer = () => {
	return (
		<footer className="flex items-center justify-center px-8 py-4 text-xs md:text-sm">
			<div>{`Copyright © ${new Date().getFullYear()}`}</div>
		</footer>
	);
};

export default Footer;
