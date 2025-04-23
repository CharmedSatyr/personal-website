"use client";

import { Suspense } from "react";
import { useTheme } from "next-themes";

import { Mode } from "@/constants/mode";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
	const { theme = Mode.dark, setTheme } = useTheme();

	return (
		<button
			data-testid="theme-switch-button"
			className="text-accent dark:text-dark-accent h-5 w-5"
			aria-label="Theme Switch"
			type="button"
			onClick={() => setTheme(theme === Mode.dark ? Mode.light : Mode.dark)}
		>
			<Suspense>
				{theme === Mode.light ? (
					<MoonIcon title="Use Dark Mode" />
				) : (
					<SunIcon title="Use Light Mode" />
				)}
			</Suspense>
		</button>
	);
};

export default ThemeSwitch;
