import genPageMetadata from "app/seo";
import PageContainer from "components/PageContainer";

export const metadata = genPageMetadata({ title: "About" });

const About = () => {
	return (
		<PageContainer>
			<h1 className="mb-8">About</h1>

			<p>In Progress...</p>
			{/*
			<h2>a</h2>

			<h2>Interests</h2>
			<p>
				I love to travel. I've visited 29 countries. I spent 6 weeks in an apartment in Prague last
				summer, and this summer I have tickets for the Paris Olympics.
			</p>

			<h2>Uses</h2>

			<h2>Go-To Stack</h2>

			<p></p>
		*/}
		</PageContainer>
	);
};

export default About;
