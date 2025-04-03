"use client";

import { SVGProps, useState } from "react";

import StaticFooter from "@/components/footer/static-footer";
import NavLinks from "@/components/nav-links";
import {
	ChevronDoubleDownIcon,
	ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";

import SocialsContainer from "../socials-container";

const FooterNav = ({ showNav }) => {
	if (!showNav) {
		return null;
	}

	return (
		<div className="flex h-full flex-col items-center justify-between pt-4">
			<div className="mb-4 md:hidden">
				<SocialsContainer />
			</div>
			<NavLinks />
			<StaticFooter />
		</div>
	);
};

const CollapsibleFooterNav = () => {
	const [showNav, setShowNav] = useState(false);

	const height = showNav ? "h-60" : "h-12";
	const text = showNav ? "Close Navigation" : "Open Navigation";

	const Chevron = (props: SVGProps<SVGSVGElement>) =>
		showNav ? (
			<ChevronDoubleDownIcon {...props} />
		) : (
			<ChevronDoubleUpIcon {...props} />
		);

	return (
		<div className="sticky bottom-0 mt-12 h-fit w-full">
			<div
				className={`${height} border-primary-400 bg-primary-50 dark:border-primary-800 dark:bg-primary-950 absolute bottom-0 flex w-full transform flex-col border-t drop-shadow-sm transition-all duration-300 ease-in-out`}
			>
				<div className="my-2">
					<button
						data-testid="footer-menu-button"
						onClick={() => setShowNav(!showNav)}
						className="dark:hover:bg-primary-900 border-primary-400 hover:bg-primary-100 dark:border-primary-800 float-right mr-2 cursor-pointer rounded-sm border px-2 py-px"
					>
						<div className="absolute top-1 -ml-4">
							<div className="border-primary-400 bg-primary-50 text-accent dark:border-primary-800 dark:bg-primary-950 dark:text-dark-accent rounded-full border">
								<Chevron className="dark:text-dark-accent size-3.5" />
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
