import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { generateStaticParams } from "@/app/field-notes/[slug]/page";
import { render } from "@testing-library/react";

jest.mock("fs");
jest.mock("path", () => ({
	join: jest.fn(),
}));
jest.mock("gray-matter", jest.fn);
jest.mock("next-mdx-remote/rsc", () => ({
	MDXRemote: (props: { source: string }) => <div>{props.source}</div>,
}));

describe("generateStaticParams", () => {
	it("generates slug params from filenames", async () => {
		(fs.readdirSync as jest.Mock).mockReturnValue(["test-post.mdx"]);
		(path.join as jest.Mock).mockImplementation((...args) => args.join("/"));

		const result = await generateStaticParams();

		expect(result).toEqual([{ slug: "test-post" }]);
	});
});

describe("Post", () => {
	it("renders content using MDXRemote", async () => {
		const content = "Hello, world!";
		const slug = "test-post";

		(fs.readFileSync as jest.Mock).mockReturnValue(
			"fake frontmatter and content",
		);

		(matter as unknown as jest.Mock).mockReturnValue({
			data: { title: "Test Post" },
			content,
		});

		(path.join as jest.Mock).mockImplementation((...args) => args.join("/"));

		const { default: Post } = await import("../[slug]/page");

		const params = { slug };

		const { container } = render(await Post({ params }));

		expect(container.textContent).toContain(content);
	});
});
