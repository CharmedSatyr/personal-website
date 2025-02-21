import Footer from "@/components/footer/static-footer";
import { render, screen } from "@testing-library/react";

describe("StaticFooter", () => {
	afterEach(() => jest.clearAllMocks());

	it("renders a static footer", () => {
		render(<Footer />);

		const copyright = screen.getByText("© 2025 Joseph Wolfe");
		const colophon = screen.getByRole("link", { name: "Colophon" });
		const themeSwitch = screen.getByTestId("theme-switch-button");

		expect(copyright).toBeInTheDocument();
		expect(colophon).toHaveAttribute("href", "/colophon");
		expect(themeSwitch).toBeInTheDocument();

		const menuButton = screen.queryByTestId("footer-menu-button");
		const navigation = screen.queryByRole("navigation");

		expect(menuButton).not.toBeInTheDocument();
		expect(navigation).not.toBeInTheDocument();
	});
});
