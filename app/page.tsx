import SectionContainer from "components/SectionContainer";
import Link from "components/Link";
import TreeImage from "components/TreeImage";

const Root = () => {
	return (
		<SectionContainer>
			<h1>
				I'm a software developer, game designer, and writer in Seattle, Washington.
				<TreeImage />
			</h1>

			<p>
				See what I'm up to <Link href="/now">now</Link>.
			</p>

			<p>
				Send me a <Link href="/contact">message</Link>.
			</p>
		</SectionContainer>
	);
};

export default Root;
