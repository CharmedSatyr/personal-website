import useWindowSize from "@/hooks/useWindowSize";
import { act, renderHook, waitFor } from "@testing-library/react";

describe("useWindowSize", () => {
	it("should return the `window.innerWidth`", async () => {
		Object.defineProperty(window, "innerWidth", {
			value: 150,
		});

		window.dispatchEvent(new Event("resize"));

		const { result } = renderHook(useWindowSize);
		expect(result.current).toBe(150);

		act(() => {
			Object.defineProperty(window, "innerWidth", {
				value: 300,
			});
			window.dispatchEvent(new Event("resize"));
		});

		await waitFor(() => {
			expect(result.current).toBe(300);
		});
	});
});
