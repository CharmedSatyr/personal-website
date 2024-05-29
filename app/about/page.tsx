import genPageMetadata from "app/seo";
import SectionContainer from "components/SectionContainer";

export const metadata = genPageMetadata({ title: "About" });

const About = () => {
	return (
		<SectionContainer>
			<h1 className="mb-8">About</h1>

			<p>
				I love to travel. I've visited 29 countries. I spent 6 weeks in an apartment in Prague last
				summer, and this summer I have tickets for the Paris Olympics.
			</p>
		</SectionContainer>
	);
};

export default About;
