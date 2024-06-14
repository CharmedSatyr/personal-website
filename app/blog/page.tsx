import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { blogDir } from "@/app/blog/constants";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

const getBlogs = () => {
	const files = fs.readdirSync(path.join(blogDir));

	return files.map((filename) => {
		const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

		const { data: frontMatter } = matter(fileContent);

		return {
			meta: frontMatter,
			slug: filename.replace(".mdx", ""),
		};
	});
};

const Blog = () => {
	const blogs = getBlogs();

	return (
		<>
			<PageTitle title="Blog" />

			<section>
				{blogs.map((blog) => (
					<Link
						className="flex items-end justify-start gap-4"
						href={"/blog/" + blog.slug}
						passHref
						key={blog.slug}
					>
						<time className="text-lg md:text-xl">{blog.meta.date}</time>

						<h3 className="hyperlink text-lg md:text-xl">{blog.meta.title}</h3>
					</Link>
				))}
			</section>
		</>
	);
};

export default Blog;
