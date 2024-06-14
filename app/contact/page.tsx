import dotenv from "dotenv";

import EmailMeLink from "@/app/contact/EmailMeLink";
import { LinkedIn } from "@/app/contact/social-icons";
import genPageMetadata from "@/app/seo";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import siteMetadata from "@/data/site-metadata";

dotenv.config();

export const metadata = genPageMetadata({ title: "Contact" });

const Contact = () => {
	return (
		<>
			<PageTitle>Contact</PageTitle>

			<ol>
				<li>
					<Link href={siteMetadata.linkedin}>
						<LinkedIn className="inline h-8 w-8 text-accent-600 dark:text-dark-accent-300" />{" "}
						Connect on LinkedIn
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
