import Image from "@/components/image";
import tree from "@/public/static/images/tree.webp";
import treeContrast from "@/public/static/images/tree-contrast.webp";

const TreeImage = () => {
	return (
		<>
			<Image
				alt="light tree"
				className="-mt-3 inline dark:hidden"
				src={treeContrast}
				priority
			/>
			<Image
				alt="dark tree"
				className="-mt-3 hidden dark:inline-block"
				src={tree}
				priority
			/>
		</>
	);
};

export default TreeImage;
