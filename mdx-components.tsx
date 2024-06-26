import type { MDXComponents } from "mdx/types";

import Link from "@/components/link";
import PageTitle from "@/components/page-title";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	return {
		h1: ({ children }) => <PageTitle>{children}</PageTitle>,
		h2: ({ children }) => <h2 className="title">{children}</h2>,
		h3: ({ children }) => <h3 className="title">{children}</h3>,
		ul: ({ children }) => <ul className="list list-disc">{children}</ul>,
		ol: ({ children }) => <ol className="list list-decimal">{children}</ol>,
		a: ({ href, children }) => <Link href={href}>{children}</Link>,
		...components,
	};
};
