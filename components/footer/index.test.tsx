import Footer from "@/components/footer";
import { render, screen } from "@testing-library/react";

jest.mock(
	"@/components/footer/collapsible-footer-nav",
	() =>
		function CollapsibleFooterNav() {
			return <div>Collapsible</div>;
		},
);
jest.mock(
	"@/components/footer/static-footer",
	() =>
		function StaticFooter() {
			return <div>Static</div>;
		},
);

describe("Footer", () => {
	it("should render with the expected classes", () => {
		render(<Footer />);

		expect(screen.getByText("Collapsible").parentElement).toHaveClass(
			"block w-full md:hidden",
		);
		expect(screen.getByText("Static").parentElement).toHaveClass(
			"mt-12 hidden w-full md:block",
		);
	});
});
