import Footer from "@/components/footer/collapsible-footer-nav";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("CollapsibleFooterNav", () => {
	afterEach(() => jest.clearAllMocks());

	it("renders a collapsible footer", () => {
		render(<Footer />);

		const navigation = screen.queryByRole("navigation");
		const copyright = screen.queryByText("© 2024 Joseph Wolfe");
		const colophon = screen.queryByRole("link", { name: "Colophon" });
		const themeSwitch = screen.queryByTestId("theme-switch-button");

		expect(navigation).not.toBeInTheDocument();
		expect(copyright).not.toBeInTheDocument();
		expect(colophon).not.toBeInTheDocument();
		expect(themeSwitch).not.toBeInTheDocument();

		const menuButton = screen.getByTestId("footer-menu-button");

		expect(menuButton).toBeInTheDocument();
	});

	it("opens the closed collapsible footer on pressing the menu button", async () => {
		const user = userEvent.setup();

		render(<Footer />);

		const menuButton = screen.getByTestId("footer-menu-button");

		// Open
		await user.click(menuButton);

		const navigation = screen.getByRole("navigation");
		const copyright = screen.getByText("© 2025 Joseph Wolfe");
		const colophon = screen.getByRole("link", { name: "Colophon" });
		const themeSwitch = screen.getByTestId("theme-switch-button");

		expect(navigation).toBeInTheDocument();
		expect(copyright).toBeInTheDocument();
		expect(colophon).toBeInTheDocument();
		expect(themeSwitch).toBeInTheDocument();
	});

	it("closes the open collapsible footer on pressing the menu button", async () => {
		const user = userEvent.setup();

		render(<Footer />);

		const menuButton = screen.getByTestId("footer-menu-button");

		// Open
		await user.click(menuButton);

		// Close
		await user.click(menuButton);

		const navigation = screen.queryByRole("navigation");
		const copyright = screen.queryByText("© 2024 Joseph Wolfe");
		const colophon = screen.queryByRole("link", { name: "Colophon" });
		const themeSwitch = screen.queryByTestId("theme-switch-button");

		expect(navigation).not.toBeInTheDocument();
		expect(copyright).not.toBeInTheDocument();
		expect(colophon).not.toBeInTheDocument();
		expect(themeSwitch).not.toBeInTheDocument();
	});
});
