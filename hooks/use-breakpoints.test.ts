import useBreakpoints from "@/hooks/use-breakpoints";
import { renderHook } from "@testing-library/react";

describe("useBreakpoints", () => {
	it("should throw an error if no config is available", () => {
		const errorSpy = jest.spyOn(console, "error").mockImplementation(() => {});

		expect(() => renderHook(() => useBreakpoints(null))).toThrow();

		errorSpy.mockRestore();
	});

	it("should return screen breakpoints based on the config", () => {
		const config = {
			theme: {
				screens: {
					xs: "1px",
					sm: "2px",
					md: "3px",
					lg: "4px",
					xl: "5px",
					"2xl": "6px",
				},
			},
		};

		const { result } = renderHook(() => useBreakpoints(config));

		expect(result.current).toEqual({
			xs: 1,
			sm: 2,
			md: 3,
			lg: 4,
			xl: 5,
			"2xl": 6,
		});
	});
});
