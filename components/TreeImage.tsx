"use client";

import { useTheme } from "next-themes";

import Image from "components/Image";
import { Mode } from "constants/mode";
import { useEffect, useState } from "react";

const TreeImage = () => {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<Image
			alt="tree"
			className="-mt-4 inline"
			src={`/static/images/${theme === Mode.dark ? "tree" : "tree-contrast"}.webp`}
			width={50}
			height={50}
		/>
	);
};

export default TreeImage;
