import Image from "@/components/image";

const TreeImage = () => {
	return (
		<>
			<Image
				alt="tree"
				className="-mt-3 inline dark:hidden"
				src={`/static/images/tree-contrast.webp`}
				width={45}
				height={45}
				priority
			/>
			<Image
				alt="tree"
				className="-mt-3 hidden inline dark:inline-block"
				src={`/static/images/tree.webp`}
				width={45}
				height={45}
				priority
			/>
		</>
	);
};

export default TreeImage;
