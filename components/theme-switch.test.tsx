import { useTheme } from "next-themes";

import ThemeSwitch from "@/components/theme-switch";
import { Mode } from "@/constants/mode";
import { fireEvent, render, screen } from "@testing-library/react";

jest.mock("next-themes", () => ({
	useTheme: jest.fn(),
}));

describe("ThemeSwitch", () => {
	const setTheme = jest.fn();

	beforeEach(() => {
		jest.clearAllMocks();
	});

	it("renders the ThemeSwitch button", () => {
		(useTheme as jest.Mock).mockReturnValue({
			theme: Mode.dark,
			setTheme: setTheme,
		});

		render(<ThemeSwitch />);

		const button = screen.getByTestId("theme-switch-button");

		expect(button).toBeInTheDocument();
		expect(button).toHaveAttribute("aria-label", "Theme Switch");
	});

	it("displays the correct icon for the dark theme", async () => {
		(useTheme as jest.Mock).mockReturnValue({
			theme: Mode.dark,
			setTheme: setTheme,
		});

		render(<ThemeSwitch />);

		const moonIcon = screen.getByTitle("Use Light Mode");

		expect(moonIcon).toBeInTheDocument();
	});

	it("displays the correct icon for the light theme", () => {
		(useTheme as jest.Mock).mockReturnValue({
			theme: Mode.light,
			setTheme: setTheme,
		});

		render(<ThemeSwitch />);

		const sunIcon = screen.getByTitle("Use Dark Mode");

		expect(sunIcon).toBeInTheDocument();
	});

	it("toggles the theme when clicked", () => {
		(useTheme as jest.Mock).mockReturnValue({
			theme: Mode.dark,
			setTheme: setTheme,
		});

		render(<ThemeSwitch />);

		const button = screen.getByTestId("theme-switch-button");

		fireEvent.click(button);

		expect(setTheme).toHaveBeenCalledWith(Mode.light);
	});

	it("toggles back to dark theme when clicked again", () => {
		(useTheme as jest.Mock).mockReturnValue({
			theme: Mode.light,
			setTheme: setTheme,
		});

		render(<ThemeSwitch />);

		const button = screen.getByTestId("theme-switch-button");

		fireEvent.click(button);

		expect(setTheme).toHaveBeenCalledWith(Mode.dark);
	});
});
