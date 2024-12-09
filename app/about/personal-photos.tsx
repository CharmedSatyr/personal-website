import greatWall from "public/static/images/great-wall";
import karlstejn from "public/static/images/karlstejn";

import Image from "@/components/image";

const PersonalPhotos = () => {
	return (
		<div className="mb-6 flex flex-col items-center justify-between justify-items-center md:flex-row">
			<figure className="m-2 w-3/6 max-w-sm flex-initial md:w-2/6">
				<Image
					className="image"
					alt="Looking out a window at Karlštejn Castle, Czech Republic."
					src="/static/images/karlstejn.webp"
					height={450}
					width={600}
					priority
					placeholder="blur"
					blurDataURL={karlstejn}
				/>
				<figcaption className="caption">
					Karlštejn Castle, Czech Republic
				</figcaption>
			</figure>
			<figure className="m-2 max-w-xs flex-initial">
				<Image
					className="image"
					alt="Standing in front of the Great Wall of China."
					src="/static/images/great-wall.webp"
					height={450}
					width={600}
					priority
					placeholder="blur"
					blurDataURL={greatWall}
				/>
				<figcaption className="caption">
					The Great Wall near Beijing, China
				</figcaption>
			</figure>
		</div>
	);
};

export default PersonalPhotos;
