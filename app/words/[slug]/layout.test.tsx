import Layout from "@/app/words/[slug]/layout";
import { render, screen } from "@testing-library/react";

describe("Layout", () => {
	it("should render without crashing", () => {
		render(
			<Layout>
				<div>Content</div>
			</Layout>,
		);

		expect(screen.getByText("Content")).toBeInTheDocument();
	});
});
