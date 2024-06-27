"use client";

import CollapsibleFooterNav from "@/components/collapsible-footer-nav";
import StaticFooter from "@/components/static-footer";
import useBreakpoints from "@/hooks/useBreakpoints";
import { useWindowSize } from "@/hooks/useWindowSize";

const ResponsiveFooter = () => {
	const { md } = useBreakpoints();
	const windowSize = useWindowSize();

	if (windowSize < md) {
		return <CollapsibleFooterNav />;
	}

	return <StaticFooter />;
};

export default ResponsiveFooter;
