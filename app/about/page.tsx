import genPageMetadata from "app/seo";
import Image from "components/Image";
import Link from "components/Link";
import PageContainer from "components/PageContainer";

export const metadata = genPageMetadata({ title: "About" });

const About = () => {
	return (
		<PageContainer>
			<h1 className="mb-8 ml-6">About</h1>

			<div className="space-between flex flex-col md:flex-row">
				<div className="mx-auto mb-6 max-w-sm rounded-md border border-primary-800 dark:border-dark-primary-200 md:my-auto md:-ml-40 md:mt-2">
					<Image
						alt="Joseph looking out a castle window."
						src={"/static/images/joseph.webp"}
						height={900}
						width={1200}
					/>
				</div>

				<div className="md:ml-6 md:max-w-lg">
					<p className="text-justify text-lg">
						When my wife and I were dating, we read{" "}
						<Link href="https://www.gottman.com/eight-dates/">a book</Link> that prompted us to
						discuss two of our highest values. She said{" "}
						<span className="text-accent-600 dark:text-dark-accent-300">Growth</span> and{" "}
						<span className="text-accent-600 dark:text-dark-accent-300">Humor</span>. I said{" "}
						<span className="text-accent-600 dark:text-dark-accent-300">Adventure</span> and{" "}
						<span className="text-accent-600 dark:text-dark-accent-300">Discovery</span>!
					</p>

					<p className="text-justify text-lg">
						I love learning, traveling, and a different point of view. I have visited 29 countries,
						lived in several, and prefer not to own too many things. I've worked in politics in
						Washington, D.C., taught English in South Korea, and managed software developers in
						Seattle. My favorite days involve sailing or open-fire cooking. I order the thing on the
						menu that I've never had, extra spicy.
					</p>

					<p className="text-justify text-lg">
						The people I admire most tend to lead multi-chapter lives. They are and hard workers,
						mindful, and dynamic. They change not only because their circumstances change but
						because their relationships with themselves change. They keep moving not to run away
						from something or because they always want more; they keep moving because it's more
						interesting to do so.
					</p>
				</div>
				{/*<h2>Uses</h2>

	<h2>Go-To Stack</h2>*/}
			</div>
		</PageContainer>
	);
};

export default About;
