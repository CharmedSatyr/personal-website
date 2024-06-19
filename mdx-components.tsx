import type { MDXComponents } from "mdx/types";

import Link from "@/components/custom-link";
import PageTitle from "@/components/page-title";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	return {
		h1: ({ children }) => <PageTitle>{children}</PageTitle>,
		h2: ({ children }) => <h2 className="title">{children}</h2>,
		ul: ({ children }) => <ul className="list list-disc">{children}</ul>,
		a: ({ href, children }) => <Link href={href}>{children}</Link>,
		...components,
	};
};
