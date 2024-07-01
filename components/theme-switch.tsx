"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Mode } from "@/constants/mode";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const SwitchIcon = () => (theme === Mode.light ? <SunIcon /> : <MoonIcon />);

	if (!mounted) {
		return null;
	}

	return (
		<button
			data-testid="theme-switch-button"
			className="h-5 w-5 text-accent dark:text-dark-accent"
			aria-label="Theme Switch"
			type="button"
			onClick={() => setTheme(theme === Mode.dark ? Mode.light : Mode.dark)}
		>
			<SwitchIcon />
		</button>
	);
};

export default ThemeSwitch;
