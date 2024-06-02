import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "app/page";

describe("Home", () => {
	it("renders a heading", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});

	it("renders two paragraphs", () => {
		render(<Home />);

		const paragraphs = screen.getAllByRole("paragraph");

		expect(paragraphs.length).toBe(2);
	});

	it("renders two links", () => {
		render(<Home />);

		const links = screen.getAllByRole("link");

		expect(links.length).toBe(2);
	});

	it("should match the last snapshot", () => {
		const { container } = render(<Home />);

		expect(container).toMatchSnapshot();
	});
});
