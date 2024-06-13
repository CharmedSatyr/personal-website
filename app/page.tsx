import PageContainer from "components/PageContainer";
import Link from "components/Link";
import TreeImage from "components/TreeImage";

const Root = () => {
	return (
		<PageContainer>
			<h1 className="highlighted mb-8 text-3xl font-bold leading-tight md:text-5xl">
				I'm a software developer, game designer, and writer in Seattle.
				<TreeImage />
			</h1>

			<p>
				See what I'm up to <Link href="/now">now</Link>.
			</p>

			<p>
				Send me a <Link href="/contact">message</Link>.
			</p>
		</PageContainer>
	);
};

export default Root;
