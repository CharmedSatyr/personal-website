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
		<div className="flex h-full flex-col items-center justify-between pt-4">
			<NavLinks />
			<StaticFooter />
		</div>
	);
};

const CollapsibleFooterNav = () => {
	const [showNav, setShowNav] = useState(true);

	const height = showNav ? "h-60" : "h-12";
	const text = showNav ? "Close Navigation" : "Open Navigation";
	const Chevron = () => (showNav ? <ChevronDoubleDown /> : <ChevronDoubleUp />);

	return (
		<div className="sticky bottom-0 h-fit w-full">
			<div
				className={`${height} absolute bottom-0 flex w-full transform flex-col border-t border-primary-400 bg-primary-50 drop-shadow transition-all duration-300 ease-in-out dark:border-primary-800 dark:bg-primary-950`}
			>
				{/* Button Container */}
				<div className="my-2">
					<button
						onClick={() => setShowNav(!showNav)}
						className="float-right mr-2 rounded border border-primary-400 px-2 py-px dark:border-primary-800"
					>
						<div className="absolute top-0 -ml-4">
							<div className="rounded-full border border-primary-400 bg-primary-50 text-accent-600 dark:border-primary-800 dark:bg-primary-950 dark:text-dark-accent-300">
								<Chevron />
							</div>
						</div>
						{text}
					</button>
				</div>

				<FooterNav showNav={showNav} />
			</div>
		</div>
	);
};

export default CollapsibleFooterNav;
