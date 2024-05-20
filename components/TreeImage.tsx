"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Image from "components/Image";
import { Mode } from "constants/mode";

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
			className="-mt-3 inline"
			src={`/static/images/${theme === Mode.dark ? "tree" : "tree-contrast"}.webp`}
			width={45}
			height={45}
			priority
		/>
	);
};

export default TreeImage;
