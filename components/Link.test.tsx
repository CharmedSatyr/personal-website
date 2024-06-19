import Link from "@/components/custom-link";
import { render, screen } from "@testing-library/react";

describe("Link", () => {
	it("should render an internal link as expected", () => {
		const props = { href: "/test" };
		render(<Link {...props} />);

		const link = screen.getByRole("link");

		expect(link).toBeInTheDocument();
		expect(link).toHaveProperty("href", "http://localhost/test");
		expect(link).toHaveProperty("target", "");
		expect(link).toHaveProperty("rel", "");
	});

	it("should render anchor links as expected", () => {
		const props = { href: "#test" };
		render(<Link {...props} />);

		const link = screen.getByRole("link");

		expect(link).toBeInTheDocument();
		expect(link).toHaveProperty("href", "http://localhost/#test");
		expect(link).toHaveProperty("target", "");
		expect(link).toHaveProperty("rel", "");
	});

	it("should render `mailto:` links as expected", () => {
		const props = { href: "mailto:test@test.com" };
		render(<Link {...props} />);

		const link = screen.getByRole("link");

		expect(link).toBeInTheDocument();
		expect(link).toHaveProperty("href", "mailto:test@test.com");
		expect(link).toHaveProperty("target", "_blank");
		expect(link).toHaveProperty("rel", "noopener noreferrer");
	});

	it("should render external links as expected", () => {
		const props = { href: "https://test.com" };
		render(<Link {...props} />);

		const link = screen.getByRole("link");

		expect(link).toBeInTheDocument();
		expect(link).toHaveProperty("href", "https://test.com/");
		expect(link).toHaveProperty("target", "_blank");
		expect(link).toHaveProperty("rel", "noopener noreferrer");
	});
});
