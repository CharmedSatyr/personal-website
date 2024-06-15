const Layout = ({ children }) => (
	<article className="prose-headings:title prose-p:text prose-a:hyperlink prose-ol:list prose-ol:text prose dark:prose-invert prose-ol:list-decimal">
		{children}
	</article>
);

export default Layout;
