import genPageMetadata from "app/seo";
import Link from "components/Link";
import PageContainer from "components/PageContainer";

export const metadata = genPageMetadata({ title: "About" });

const About = () => {
	return (
		<PageContainer>
			<h1 className="mb-8">About</h1>

			<p>
				When my wife and I were dating, we read{" "}
				<Link href="https://www.gottman.com/eight-dates/">a book</Link> that prompted us to discuss
				two of our highest values. She said{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">Growth</span> and{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">Humor</span>. I said{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">Adventure</span> and{" "}
				<span className="text-accent-600 dark:text-dark-accent-300">Discovery</span>!
			</p>

			<p>
				I love learning, traveling, and a different point of view. I have visited 29 countries,
				lived in several, and prefer not to own too many things. I've worked in politics in
				Washington, D.C., taught English in South Korea, and managed software developers in Seattle.
				My favorite days involve sailing or open-fire cooking. I order the thing on the menu that
				I've never had, extra spicy.
			</p>

			<p>
				The people I admire most tend to lead multi-chapter lives. They are dynamic, mindful, and
				hard workers. They change not only because their circumstances change but because their
				relationships with themselves change. They keep moving not to run away from something or
				because they always want more; they keep moving because it's more interesting to do so.
			</p>

			{/*<h2>Uses</h2>

	<h2>Go-To Stack</h2>*/}
		</PageContainer>
	);
};

export default About;
