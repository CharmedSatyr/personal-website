import type { MDXComponents } from "mdx/types";

import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	return {
		h1: ({ children }) => <PageTitle>{children}</PageTitle>,
		h2: ({ children }) => <h2 className="title">{children}</h2>,
		a: ({ href, children }) => <Link href={href}>{children}</Link>,
		...components,
	};
};
