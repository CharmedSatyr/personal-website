import FieldNotes from "@/app/field-notes/page";
import { render } from "@testing-library/react";

describe("Field Notes", () => {
	it("should not deviate unexpectedly from the last snapshot", () => {
		const { container } = render(<FieldNotes />);

		expect(container).toMatchSnapshot();
	});
});
