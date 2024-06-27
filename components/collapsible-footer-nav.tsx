"use client";

import { useState } from "react";

import {
	ChevronDoubleDown,
	ChevronDoubleUp,
} from "@/components/icons/chevrons";
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

	const height = showNav ? "h-36" : "h-12";
	const text = showNav ? "Close Navigation" : "Open Navigation";
	const Chevron = () => (showNav ? <ChevronDoubleDown /> : <ChevronDoubleUp />);

	return (
		<div className="sticky bottom-0 mt-40 h-36 w-full">
			<div
				className={`${height} absolute bottom-0 w-full transform border-t border-primary-400 bg-primary-50 text-right drop-shadow transition-all duration-300 ease-in-out dark:border-primary-800 dark:bg-primary-950`}
			>
				<button
					onClick={() => setShowNav(!showNav)}
					className="my-2 mr-8 rounded border border-primary-400 px-2 py-px text-right dark:border-primary-800"
				>
					<div className="absolute top-1 -ml-4">
						<div className="rounded-full border border-primary-400 bg-primary-50 text-accent-600 dark:border-primary-800 dark:bg-primary-950 dark:text-dark-accent-300">
							<Chevron />
						</div>
					</div>
					{text}
				</button>

				<FooterNav showNav={showNav} />
			</div>
		</div>
	);
};

export default CollapsibleFooterNav;
