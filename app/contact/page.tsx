import dotenv from "dotenv";

import genPageMetadata from "app/seo";
import EmailMeLink from "app/contact/EmailMeLink";
import { LinkedIn } from "app/contact/social-icons";
import Link from "components/Link";
import PageContainer from "components/PageContainer";
import siteMetadata from "data/site-metadata";

dotenv.config();

export const metadata = genPageMetadata({ title: "Contact" });

const Contact = () => {
	return (
		<PageContainer>
			<h1 className="highlighted mb-8 font-bold">Contact</h1>
			<ol className="w-max">
				<li>
					<Link href={siteMetadata.linkedin}>
						<LinkedIn className="inline h-8 w-8" /> Connect on LinkedIn
					</Link>
				</li>
				<li>
					<EmailMeLink />
				</li>
			</ol>
		</PageContainer>
	);
};

export default Contact;
