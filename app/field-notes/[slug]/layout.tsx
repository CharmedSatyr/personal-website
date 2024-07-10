const Layout = ({ children }) => (
	<article className="prose-headings:title prose-img:image prose-figcaption:caption prose-p:text prose-a:hyperlink prose-ol:list prose-ol:text prose mb-20 dark:prose-invert prose-ol:list-decimal prose-img:mb-0 dark:prose-a:font-thin">
		{children}
	</article>
);

export default Layout;
