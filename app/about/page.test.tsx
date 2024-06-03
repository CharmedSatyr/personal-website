import { render, screen } from "@testing-library/react";

import About from "app/about/page";

describe("About", () => {
	it("renders a heading", () => {
		render(<About />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});

	it("renders three paragraphs", () => {
		render(<About />);

		const paragraphs = screen.getAllByRole("paragraph");

		expect(paragraphs.length).toBe(3);
	});

	it("renders one link", () => {
		render(<About />);

		const links = screen.getAllByRole("link");

		expect(links.length).toBe(1);
	});

	it("should match the last snapshot", () => {
		const { container } = render(<About />);

		expect(container).toMatchSnapshot();
	});
});
