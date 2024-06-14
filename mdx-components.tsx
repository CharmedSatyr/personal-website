import type { MDXComponents } from "mdx/types";

import Link from "./components/Link";
import PageTitle from "./components/PageTitle";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
	return {
		h1: ({ children }) => <PageTitle>{children}</PageTitle>,
		ol: ({ children }) => (
			<ol className="list-decimal leading-relaxed marker:text-accent-600 dark:marker:text-dark-accent-300">
				{children}
			</ol>
		),
		a: ({ href, children }) => <Link href={href}>{children}</Link>,
		...components,
	};
};
