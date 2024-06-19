import greatWall from "public/static/images/great-wall";
import joseph from "public/static/images/joseph";

import Image from "@/components/Image";

const PersonalPhotos = () => {
	return (
		<div className="mb-6 flex flex-col items-center justify-between justify-items-center md:flex-row">
			<Image
				className="m-2 w-3/6 max-w-sm flex-initial rounded-sm border border-primary-800 dark:border-dark-primary-200 md:w-2/6"
				alt="Looking out a window at Karlštejn Castle, Czech Republic."
				src="/static/images/joseph.webp"
				height={450}
				width={600}
				priority
				placeholder="blur"
				blurDataURL={joseph}
			/>
			<Image
				className="m-2 max-w-xs flex-initial rounded-sm border border-primary-800 dark:border-dark-primary-200"
				alt="Standing in front of the Great Wall of China."
				src="/static/images/great-wall.webp"
				height={450}
				width={600}
				priority
				placeholder="blur"
				blurDataURL={greatWall}
			/>
		</div>
	);
};

export default PersonalPhotos;
