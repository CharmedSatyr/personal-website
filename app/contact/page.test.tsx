import { useRouter } from "next/navigation";

import Contact from "@/app/contact/page";
import { fireEvent, render, screen, within } from "@testing-library/react";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

describe("Contact", () => {
	const push = jest.fn();

	beforeEach(() =>
		(useRouter as jest.Mock).mockReturnValue({
			push,
			requestSubmit: jest.fn(),
		}),
	);

	afterEach(() => jest.clearAllMocks());

	it("should not deviate unexpectedly from the last snapshot", () => {
		const { container } = render(<Contact />);

		expect(container).toMatchSnapshot();
	});

	it("renders a heading", () => {
		render(<Contact />);

		expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
	});

	it("renders five links", () => {
		render(<Contact />);

		expect(screen.getAllByRole("link")).toHaveLength(5);
	});

	it("renders a button", () => {
		render(<Contact />);

		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	it("does not initially render a text box", () => {
		render(<Contact />);

		expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
	});

	it("should show a challenge if the bottom link is clicked", async () => {
		render(<Contact />);

		fireEvent.click(screen.getByRole("button"));

		expect(screen.getByRole("textbox")).toBeInTheDocument();
	});

	it("should do nothing if the challenge is not completed correctly", () => {
		render(<Contact />);

		expect(screen.getAllByRole("button").length).toBe(1);

		fireEvent.click(screen.getByRole("button"));

		const input = screen.getByRole("textbox");

		fireEvent.change(input, { target: { value: "Ralph" } });

		expect(push).not.toHaveBeenCalled();
		expect(screen.queryByRole("button")).not.toBeInTheDocument();
	});

	it("should trigger a `mailto:` link if the challenge is completed correctly", () => {
		render(<Contact />);

		expect(screen.getAllByRole("button").length).toBe(1);

		fireEvent.click(screen.getByRole("button"));

		const input = screen.getByRole("textbox");

		fireEvent.change(input, { target: { value: "Joseph" } });

		expect(push).toHaveBeenCalledWith(expect.stringContaining("mailto:"));
	});

	it("should show a button that triggers a `mailto:` link if the challenge is completed correctly", async () => {
		render(<Contact />);

		fireEvent.click(screen.getByRole("button"));

		const input = screen.getByRole("textbox");

		expect(screen.queryByRole("button")).not.toBeInTheDocument();

		fireEvent.change(input, { target: { value: "Joseph" } });

		expect(push).toHaveBeenCalledTimes(1);

		const button = screen.getByRole("button");

		const emailLink = within(button).getByRole("link");

		expect(emailLink).toHaveProperty(
			"href",
			expect.stringContaining("mailto:"),
		);
	});
});
