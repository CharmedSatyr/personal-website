/* eslint-disable jsx-a11y/anchor-has-content */
import { AnchorHTMLAttributes } from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";

const CustomLink = ({
	href,
	...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
	const isInternalLink = href?.startsWith("/");
	const isAnchorLink = href?.startsWith("#");

	if (isInternalLink) {
		return <Link className="hyperlink" href={href} {...rest} />;
	}

	if (isAnchorLink) {
		return <a className="hyperlink" href={href} {...rest} />;
	}

	return (
		<a
			className="hyperlink external"
			target="_blank"
			rel="noopener noreferrer"
			href={href}
			{...rest}
		/>
	);
};

export default CustomLink;
