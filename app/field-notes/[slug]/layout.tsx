const Layout = ({ children }) => (
	<article className="prose-headings:highlighted prose-p:text prose-a:hyperlink prose-ol:ordered-list prose-ol:text prose dark:prose-invert">
		{children}
	</article>
);

export default Layout;
