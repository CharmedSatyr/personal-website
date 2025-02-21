"use client";

import CollapsibleFooterNav from "@/components/footer/collapsible-footer-nav";
import StaticFooter from "@/components/footer/static-footer";

const ResponsiveFooter = () => {
	return (
		<>
			<div className="mt-12 hidden w-full md:block">
				<StaticFooter />
			</div>

			<div className="block w-full md:hidden">
				<CollapsibleFooterNav />
			</div>
		</>
	);
};

export default ResponsiveFooter;
