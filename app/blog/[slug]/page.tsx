import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

const postsPath = "data/blog";

export const generateStaticParams = async () => {
	const files = fs.readdirSync(path.join(postsPath));

	const paths = files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	return paths;
};

const getPost = ({ slug }: { slug: string }) => {
	const markdownFile = fs.readFileSync(path.join(postsPath, slug + ".mdx"), "utf-8");

	const { data: frontMatter, content } = matter(markdownFile);

	return {
		frontMatter,
		slug,
		content,
	};
};

export default function Post({ params }) {
	const props = getPost(params);

	return (
		<article className="prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert mx-auto">
			<h1>{props.frontMatter.title}</h1>

			<MDXRemote source={props.content} />
		</article>
	);
}
