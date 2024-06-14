import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import blogDir from "@/constants/blogDir";

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

	return <MDXRemote source={props.content} />;
};

export default Post;
