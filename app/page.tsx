import Link from "@/components/link";
import TreeImage from "@/components/tree-image";

const Root = () => {
	return (
		<>
			<h1 className="title text-left leading-tight">
				I'm a software developer, game designer, and writer in Seattle.
				<TreeImage />
			</h1>

			<p>
				See what I'm up to <Link href="/now">now</Link>.
			</p>

			<p>
				Send me a <Link href="/contact">message</Link>.
			</p>
		</>
	);
};

export default Root;
