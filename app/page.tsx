import SectionContainer from "components/SectionContainer";
import Image from "components/Image";
import Link from "components/Link";

export default () => {
	return (
		<SectionContainer>
			<h1 className="mb-16 text-6xl font-bold leading-tight text-indigo-200">
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

			<p className="my-12 text-2xl">
				{" "}
				See what I'm working on <Link href="/now">now</Link>.
			</p>

			<p className="my-12 text-2xl">
				Send me a <Link href="/contact">message</Link>.
			</p>
		</SectionContainer>
	);
};
