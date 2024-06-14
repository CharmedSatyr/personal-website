import joseph from "public/static/images/joseph";

import genPageMetadata from "@/app/seo";
import Image from "@/components/Image";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

export const metadata = genPageMetadata({ title: "About" });

const About = () => {
	return (
		<>
			<PageTitle>About</PageTitle>

			<Image
				className="mx-auto mb-4 w-3/6 max-w-sm rounded-sm border border-primary-800 dark:border-dark-primary-200 md:float-left md:mb-2 md:mr-3 md:mt-1"
				alt="Looking out a window at Karlštejn Castle, Czech Republic."
				src="/static/images/joseph.webp"
				height={450}
				width={600}
				priority
				placeholder="blur"
				blurDataURL={joseph}
			/>

			<p>
				When my wife and I were dating, we read{" "}
				<Link href="https://www.gottman.com/eight-dates/">a book</Link> that
				prompted us to discuss two of our highest values. She said{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">
					Growth
				</span>{" "}
				and{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">Humor</span>
				. I said{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">
					Adventure
				</span>{" "}
				and{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">
					Discovery
				</span>
				!
			</p>

			<p>
				I love learning, traveling, and a different point of view. I have
				visited 29 countries, lived in several, and prefer not to own too many
				things. I've worked in politics in Washington, D.C., taught English in
				South Korea, and managed software developers in Seattle. I have a
				master's degree in Philosophy and Public Policy. My favorite days
				involve sailing or open-fire cooking. I order the thing on the menu that
				I've never had, extra spicy.
			</p>

			<p>
				The people I admire most tend to lead multi-chapter lives. They are hard
				workers, mindful, and dynamic. They are motivated by process rather than
				outcomes. They change not only because their circumstances change but
				because their relationships with themselves change.
			</p>
		</>
	);
};

export default About;
