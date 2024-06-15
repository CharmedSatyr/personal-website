import greatWall from "public/static/images/great-wall";
import joseph from "public/static/images/joseph";

import genPageMetadata from "@/app/seo";
import Image from "@/components/Image";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import siteMetadata from "@/data/site-metadata";

export const metadata = genPageMetadata({ title: "About" });

const About = () => {
	return (
		<>
			<PageTitle>About</PageTitle>

			<h2 className="title">Bird's eye view</h2>
			<ul className="list list-disc marker:mr-0 marker:pr-0">
				<li className="mb-3">
					<strong>Southerner in exile.</strong> Family in Mississippi,
					Tennessee, South Carolina, Virginia. More hillbilly than redneck. I
					left on purpose but enjoy visiting.
				</li>
				<li className="mb-3">
					<strong>Adventure, discovery, creativity.</strong> Risk-taker. I try
					not to get too attached and love a new perspective. Happiest when
					making things.
				</li>
				<li className="mb-3">
					<strong>Xenophile.</strong> 29 countries visited. Some years spent
					abroad. London, Busan, Chiang Mai, Prague. I get to know places
					through local cuisine.
				</li>
				<li className="mb-3">
					<strong>Slow thinker.</strong> Philosophy, public policy, literary
					criticism, game design. Iteration is key. All my work gets done in
					editing.
				</li>
				<li className="mb-3">
					<strong>D&D class: Wizard.</strong> Magical, with little claim to
					cunning or physical prowess. I have to study to learn spells, unlike
					sorcerers or warlocks.
				</li>
			</ul>
			<div className="flex flex-col items-center justify-between justify-items-center md:flex-row">
				<Image
					className="m-2 w-5/6 max-w-sm flex-initial rounded-sm border border-primary-800 dark:border-dark-primary-200 md:w-2/6"
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

			<h2 className="title mt-6">Mindset</h2>
			<p>
				The people I admire most lead multi-chapter lives. They are hard
				workers, mindful, and dynamic. They are motivated by their work itself
				rather than by specific outcomes. They change not only because their
				circumstances change but because their relationships with themselves
				change.
			</p>

			<h2 className="title">Work</h2>
			<p>
				I've worked in politics in Washington, D.C., taught English in South
				Korea, and managed software developers in Seattle. I see my future at
				the intersection of writing, code, and game design. Find me on{" "}
				<Link href={siteMetadata.linkedin}>LinkedIn</Link>.
			</p>
			<p>
				I engage with software development as a craft rather than science or
				art. I want to write code that is useful, respects users, and delivers
				business value. My development practice is constant iteration
				constrained by practical objectives.
			</p>
		</>
	);
};

export default About;
