import Header from "@/components/header";
import navLinks from "@/data/nav-links";
import siteMetadata from "@/data/site-metadata";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
	afterEach(() => jest.clearAllMocks());

	it("should render without crashing", () => {
		render(<Header />);

		const header = screen.getByText(siteMetadata.title);

		expect(header).toBeInTheDocument();

		navLinks
			.filter((link) => link.href !== "/")
			.forEach((link) => {
				expect(
					screen.getByRole("link", { name: link.title }),
				).toBeInTheDocument();
			});
	});
});
