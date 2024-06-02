import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page", () => {
	it("renders a heading", () => {
		render(<Page />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});

	it("renders two paragraphs", () => {
		render(<Page />);

		const paragraphs = screen.getAllByRole("paragraph");

		expect(paragraphs.length).toBe(2);
	});
});
