import { render, screen } from "@testing-library/react";

import Now from "app/now/page";

describe("Now", () => {
	it("renders a heading", () => {
		render(<Now />);

		const heading = screen.getByRole("heading", { level: 1 });

		expect(heading).toBeInTheDocument();
	});

	it("renders four list items", () => {
		render(<Now />);

		const listItem = screen.getAllByRole("listitem");

		expect(listItem.length).toBe(4);
	});

	it("renders four links", () => {
		render(<Now />);

		const links = screen.getAllByRole("link");

		expect(links.length).toBe(4);
	});

	it("should match the last snapshot", () => {
		const { container } = render(<Now />);

		expect(container).toMatchSnapshot();
	});
});
