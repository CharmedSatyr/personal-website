import dotenv from "dotenv";

import genPageMetadata from "app/seo";
import ProveHuman from "app/contact/ProveHuman";
import SectionContainer from "components/SectionContainer";

dotenv.config();

export const metadata = genPageMetadata({ title: "Contact" });

const Contact = () => {
	return (
		<SectionContainer>
			<h1 className="mb-8">Contact</h1>

			<ProveHuman />
		</SectionContainer>
	);
};

export default Contact;
