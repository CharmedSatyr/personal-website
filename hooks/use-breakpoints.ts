import resolveConfig from "tailwindcss/resolveConfig";
const resolvedConfig = resolveConfig(tailwindConfig as Config);
import * as tailwindConfig from "tailwind.config";
import { Config } from "tailwindcss";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
interface Breakpoints {
	xs: number;
	sm: number;
	md: number;
	lg: number;
	xl: number;
	"2xl": number;
}

const useBreakpoints = (config = resolvedConfig): Breakpoints => {
	if (!config) {
		throw new Error("Config required to use breakpoints");
	}

	const screens: Breakpoints = {
		xs: undefined,
		sm: undefined,
		md: undefined,
		lg: undefined,
		xl: undefined,
		"2xl": undefined,
	};

	for (const [key, value] of Object.entries<Breakpoint>(config.theme.screens)) {
		screens[key] = Number(value.replace("px", ""));
	}

	return screens;
};

export default useBreakpoints;
