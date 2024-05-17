import SectionContainer from "components/SectionContainer";
import Image from "components/Image";
import Link from "components/Link";

const Root = () => {
	return (
		<SectionContainer>
			<h1>
				I'm a software developer, game designer, and writer in Seattle, Washington.
				<Image
					alt="tree"
					className="-mt-4 inline pl-2"
					src="/static/images/tree.png"
					width={40}
					height={40}
					priority
				/>
			</h1>

			<p>
				See what I'm working on <Link href="/now">now</Link>.
			</p>

			<p>
				Send me a <Link href="/contact">message</Link>.
			</p>
		</SectionContainer>
	);
};

export default Root;
