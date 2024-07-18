import FieldNotes from "@/app/field-notes/page";
import { render, screen } from "@testing-library/react";

describe("Field Notes", () => {
	it("should not deviate unexpectedly from the last snapshot", () => {
		const { container } = render(<FieldNotes />);

		expect(container).toMatchSnapshot();
	});

	it("renders a heading", () => {
		render(<FieldNotes />);

		expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
	});

	it("renders a link", () => {
		render(<FieldNotes />);

		expect(screen.getAllByRole("link")).toHaveLength(1);
	});
});
