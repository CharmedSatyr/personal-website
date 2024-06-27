"use client";

import { useEffect, useState } from "react";
import useBreakpoints from "hooks/useBreakpoints";
import { useWindowSize } from "hooks/useWindowSize";

import CollapsibleFooterNav from "@/components/collapsible-footer-nav";
import StaticFooter from "@/components/static-footer";

const ResponsiveFooter = () => {
	const [isClient, setIsClient] = useState<boolean>(false);
	const { md } = useBreakpoints();
	const windowSize = useWindowSize();

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (isClient && windowSize < md) {
		return <CollapsibleFooterNav />;
	}

	return <StaticFooter />;
};

export default ResponsiveFooter;
