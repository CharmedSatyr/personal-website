import { render } from "@testing-library/react";

import TreeImage from "./tree-image";

describe("TreeImage", () => {
	it("should render without crashing", () => {
		const { container } = render(<TreeImage />);

		expect(container).toBeInTheDocument();
	});

	it("should match the last snapshot", () => {
		const { container } = render(<TreeImage />);

		expect(container).toMatchSnapshot();
	});
});
