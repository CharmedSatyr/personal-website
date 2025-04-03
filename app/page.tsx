import Link from "next/link";

import ProfileWithBorder from "@/components/profile-with-border";
import TreeImage from "@/components/tree-image";

const words = [
	{ text: "I'm", delay: 0 },
	{ text: "Joseph", delay: 0, accent: true },
	{ component: <ProfileWithBorder />, delay: 0 },
	{ text: ",", delay: 1000 },
	{ text: "a", delay: 1000 },
	{ text: "software", delay: 1000 },
	{ text: "developer,", delay: 1000 },
	{ text: "game designer,", delay: 1500 },
	{ text: "and writer", delay: 2000 },
	{ text: "in Seattle.", delay: 2500 },
	{ component: <TreeImage />, delay: 2500 },
];

type AnimatedWordProps = {
	accent?: boolean;
	component?: React.ReactNode;
	delay: number;
	text?: string;
};

const AnimatedWord = ({
	accent,
	component,
	delay,
	text,
}: AnimatedWordProps) => (
	<span
		className={`animate-slide-in-up inline-block ${
			delay ? `delay-${delay}` : ""
		} ${accent ? "dark:from-dark-secondary text-accent dark:bg-linear-to-r dark:to-red-300 dark:bg-clip-text dark:text-transparent" : ""}`}
	>
		{component ?? `${text}\u00A0`}
	</span>
);

const Page = () => {
	return (
		<div className="py-8">
			<h1 className="title slide-container">
				{words.map((word, index) => (
					<AnimatedWord key={index} {...word} />
				))}
			</h1>

			<p className="animate-slide-in-up delay-2500">
				See what I'm up to{" "}
				<Link className="hyperlink" href="/now">
					now
				</Link>
				.
			</p>

			<p className="animate-slide-in-up delay-2500">
				Send me a{" "}
				<Link className="hyperlink" href="/contact">
					message
				</Link>
				.
			</p>
		</div>
	);
};

export default Page;
