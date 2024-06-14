import About from "@/app/about/page";
import { render, screen } from "@testing-library/react";

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
});
