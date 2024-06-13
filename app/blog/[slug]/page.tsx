import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

import { blogDir } from "app/blog/page";

export const generateStaticParams = async () => {
	const files = fs.readdirSync(path.join(blogDir));

	const paths = files.map((filename) => ({
		slug: filename.replace(".mdx", ""),
	}));

	return paths;
};

const getPost = ({ slug }: { slug: string }) => {
	const markdownFile = fs.readFileSync(
		path.join(blogDir, slug + ".mdx"),
		"utf-8",
	);

	const { data: frontMatter, content } = matter(markdownFile);

	return {
		frontMatter,
		slug,
		content,
	};
};

const Post = ({ params }) => {
	const props = getPost(params);

	return (
		<>
			<h1 className="highlighted mb-8 text-3xl font-bold md:text-5xl">
				{props.frontMatter.title}
			</h1>

			<MDXRemote source={props.content} />
		</>
	);
};

export default Post;
