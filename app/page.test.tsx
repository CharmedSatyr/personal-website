import Page from "@/app/page";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

describe("Page", () => {
	it("renders all animated words with correct text", () => {
		render(<Page />);

		expect(screen.getByText("I'm")).toBeInTheDocument();
		expect(screen.getByText("Joseph")).toBeInTheDocument();
		expect(screen.getByText(",")).toBeInTheDocument();
		expect(screen.getByText("a")).toBeInTheDocument();
		expect(screen.getByText("software")).toBeInTheDocument();
		expect(screen.getByText("developer,")).toBeInTheDocument();
		expect(screen.getByText("game designer,")).toBeInTheDocument();
		expect(screen.getByText("and writer")).toBeInTheDocument();
		expect(screen.getByText("in Seattle.")).toBeInTheDocument();
	});

	it("renders profile and tree images", () => {
		render(<Page />);

		const images = screen.getAllByRole("img");

		expect(images[0]).toHaveAttribute("alt", "Joseph circle portrait");
		expect(images[1]).toHaveAttribute("alt", "light tree");
		expect(images[1]).toHaveAttribute(
			"class",
			expect.stringContaining("dark:hidden"),
		);
		expect(images[2]).toHaveAttribute("alt", "dark tree");
		expect(images[2]).toHaveAttribute(
			"class",
			expect.stringContaining("dark:inline-block"),
		);
	});

	it("renders links to /now and /contact", () => {
		render(<Page />);

		expect(screen.getByRole("link", { name: /now/i })).toHaveAttribute(
			"href",
			"/now",
		);
		expect(screen.getByRole("link", { name: /message/i })).toHaveAttribute(
			"href",
			"/contact",
		);
	});
});
