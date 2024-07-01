import Footer from "@/components/footer";
import useBreakpoints from "@/hooks/useBreakpoints";
import useWindowSize from "@/hooks/useWindowSize";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

jest.mock("@/hooks/useBreakpoints");
jest.mock("@/hooks/useWindowSize");

describe("Footer", () => {
	afterEach(() => jest.clearAllMocks());

	it("renders a static footer if the window is the same size or larger than the `md` breakpoint", () => {
		(useBreakpoints as jest.Mock).mockReturnValue({ md: 1 });
		(useWindowSize as jest.Mock).mockReturnValue(1);

		render(<Footer />);

		const copyright = screen.getByText("© 2024 Joseph Wolfe");
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

	it("renders a collapsible footer if the component is window is smaller than the `md` breakpoint", () => {
		(useBreakpoints as jest.Mock).mockReturnValue({ md: 2 });
		(useWindowSize as jest.Mock).mockReturnValue(1);

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
		(useBreakpoints as jest.Mock).mockReturnValue({ md: 2 });
		(useWindowSize as jest.Mock).mockReturnValue(1);
		const user = userEvent.setup();

		render(<Footer />);

		const menuButton = screen.getByTestId("footer-menu-button");

		// Open
		await user.click(menuButton);

		const navigation = screen.getByRole("navigation");
		const copyright = screen.getByText("© 2024 Joseph Wolfe");
		const colophon = screen.getByRole("link", { name: "Colophon" });
		const themeSwitch = screen.getByTestId("theme-switch-button");

		expect(navigation).toBeInTheDocument();
		expect(copyright).toBeInTheDocument();
		expect(colophon).toBeInTheDocument();
		expect(themeSwitch).toBeInTheDocument();
	});

	it("closes the open collapsible footer on pressing the menu button", async () => {
		(useBreakpoints as jest.Mock).mockReturnValue({ md: 2 });
		(useWindowSize as jest.Mock).mockReturnValue(1);
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
