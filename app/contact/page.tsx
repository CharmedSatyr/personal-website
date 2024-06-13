import dotenv from "dotenv";

import genPageMetadata from "app/seo";
import EmailMeLink from "app/contact/EmailMeLink";
import { LinkedIn } from "app/contact/social-icons";
import Link from "components/Link";
import PageTitle from "components/PageTitle";
import siteMetadata from "data/site-metadata";

dotenv.config();

export const metadata = genPageMetadata({ title: "Contact" });

const Contact = () => {
	return (
		<>
			<PageTitle title="Contact" />
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
		</>
	);
};

export default Contact;
