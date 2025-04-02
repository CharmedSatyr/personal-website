import Image from "next/image";
import josephGlare from "public/static/images/joseph-glare.webp";

const ProfileWithBorder = () => {
	return (
		<div className={`relative -mb-4 inline-block h-16 w-16`}>
			<Image
				alt="Joseph circle portrait"
				className="h-full w-full rounded-full border-0 border-transparent object-cover"
				placeholder="blur"
				src={josephGlare}
			/>

			<svg
				className="absolute inset-0 h-[108%] w-[108%] -translate-x-[4%] -translate-y-[4%]"
				viewBox="0 0 140 140"
			>
				<circle
					cx="50%"
					cy="50%"
					r="46%"
					fill="none"
					stroke="currentColor"
					strokeWidth="4"
					strokeDasharray="408"
					strokeDashoffset="408"
					strokeLinecap="round"
					transform="rotate(-90, 70, 70)"
					className="text-secondary dark:text-dark-accent animate-draw"
				/>
			</svg>
		</div>
	);
};

export default ProfileWithBorder;
