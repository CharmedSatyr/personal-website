import genPageMetadata from "app/seo";
import PageContainer from "components/PageContainer";

export const metadata = genPageMetadata({ title: "About" });

const About = () => {
	return (
		<PageContainer>
			<h1 className="mb-8">About</h1>

			<p>
				I love to travel. I've visited 29 countries. I spent 6 weeks in an apartment in Prague last
				summer, and this summer I have tickets for the Paris Olympics.
			</p>
		</PageContainer>
	);
};

export default About;
