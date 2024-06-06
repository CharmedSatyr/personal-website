/* eslint-disable jsx-a11y/anchor-has-content */
import Link from "next/link";
import type { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
	const isInternalLink = href && href.startsWith("/");
	const isAnchorLink = href && href.startsWith("#");
	const isMailToLink = href && href.startsWith("mailto:");

	if (isInternalLink) {
		return <Link href={href} {...rest} />;
	}

	if (isAnchorLink || isMailToLink) {
		return <a href={href} {...rest} />;
	}

	return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
