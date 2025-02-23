import Image from "@/components/image";
import tree from "@/public/static/images/tree.webp";
import treeContrast from "@/public/static/images/tree-contrast.webp";

const TreeImage = () => {
	return (
		<>
			<Image
				alt="tree"
				className="-mt-3 inline dark:hidden"
				src={treeContrast}
				priority
			/>
			<Image
				alt="tree"
				className="-mt-3 hidden inline dark:inline-block"
				src={tree}
				priority
			/>
		</>
	);
};

export default TreeImage;
