import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import blogDir from "@/constants/blogDir";

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
			<PageTitle>Blog</PageTitle>

			<section>
				{blogs.map((blog) => (
					<Link
						className="flex items-end justify-start gap-4"
						href={"/blog/" + blog.slug}
						passHref
						key={blog.slug}
					>
						<time>{blog.meta.date}</time>

						<h3 className="hyperlink">{blog.meta.title}</h3>
					</Link>
				))}
			</section>
		</>
	);
};

export default Blog;
