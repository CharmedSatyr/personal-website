"use client";

import { useState } from "react";

import NavLinks from "@/components/nav-links";
import StaticFooter from "@/components/static-footer";

const FooterNav = ({ showNav }) => {
	if (!showNav) {
		return null;
	}
	return (
		<div className="pt-4">
			<div className="flex justify-center">
				<NavLinks />
			</div>
			<StaticFooter />
		</div>
	);
};

const CollapsibleFooterNav = () => {
	const [showNav, setShowNav] = useState(false);

	const height = showNav ? "h-56" : "h-12";
	const text = showNav ? "Close Navigation" : "Open Navigation";

	return (
		<div
			className={`${height} sticky bottom-0 w-full transform border-t border-primary-400 bg-primary-50 text-right drop-shadow transition-all duration-300 ease-in-out dark:border-primary-800 dark:bg-primary-950`}
		>
			<button
				onClick={() => setShowNav(!showNav)}
				className="m-2 rounded border border-primary-400 px-2 py-px text-right text-accent-600 dark:border-primary-800 dark:text-dark-accent-300"
			>
				{text}
			</button>

			<FooterNav showNav={showNav} />
		</div>
	);
};

export default CollapsibleFooterNav;
