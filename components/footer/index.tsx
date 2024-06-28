"use client";
import { useEffect, useState } from "react";

import CollapsibleFooterNav from "@/components/footer/collapsible-footer-nav";
import StaticFooter from "@/components/footer/static-footer";
import useBreakpoints from "@/hooks/useBreakpoints";
import { useWindowSize } from "@/hooks/useWindowSize";

const ResponsiveFooter = () => {
	const [mounted, setMounted] = useState<boolean>();
	const { md } = useBreakpoints();
	const windowSize = useWindowSize();

	useEffect(() => setMounted(true), []);

	if (mounted && windowSize < md) {
		return <CollapsibleFooterNav />;
	}

	return (
		<div className="mt-12">
			<StaticFooter />
		</div>
	);
};

export default ResponsiveFooter;
