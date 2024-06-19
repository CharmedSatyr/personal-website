import dotenv from "dotenv";

import EmailManager from "@/app/contact/email-manager";
import genPageMetadata from "@/app/seo";
import Link from "@/components/link";
import PageTitle from "@/components/page-title";
import { LinkedIn } from "@/components/social-icons";
import siteMetadata from "@/data/site-metadata";

dotenv.config();

export const metadata = genPageMetadata({ title: "Contact" });

const Contact = () => {
	return (
		<>
			<PageTitle>Contact</PageTitle>

			<ol>
				<li className="mb-8 text-lg">
					<Link href={siteMetadata.linkedin}>
						<LinkedIn className="inline h-8 w-8 text-accent-600 dark:text-dark-accent-300" />{" "}
						Connect on LinkedIn
					</Link>
				</li>

				<li className="text-lg">
					<EmailManager />
				</li>
			</ol>
		</>
	);
};

export default Contact;
