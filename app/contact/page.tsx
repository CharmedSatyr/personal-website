import dotenv from "dotenv";

import genPageMetadata from "app/seo";
import ProveHuman from "app/contact/ProveHuman";
import PageContainer from "components/PageContainer";

dotenv.config();

export const metadata = genPageMetadata({ title: "Contact" });

const Contact = () => {
	return (
		<PageContainer>
			<h1 className="mb-8">Contact</h1>

			<ProveHuman />
		</PageContainer>
	);
};

export default Contact;
