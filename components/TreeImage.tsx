"use client";

import { useTheme } from "next-themes";

import Image from "components/Image";
import { Mode } from "constants/mode";

const TreeImage = () => {
	const { theme } = useTheme();
	return (
		<Image
			alt="tree"
			className="-mt-4 inline"
			src={`/static/images/${theme === Mode.dark ? "tree" : "tree-contrast"}.webp`}
			width={50}
			height={50}
			priority
		/>
	);
};

export default TreeImage;
