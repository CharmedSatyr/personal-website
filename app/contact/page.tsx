import EmailManager from "@/app/contact/email-manager";
import genPageMetadata from "@/app/seo";
import Link from "@/components/custom-link";
import Lock from "@/components/lock";
import PageTitle from "@/components/page-title";
import { LinkedIn } from "@/components/social-icons";
import siteMetadata from "@/data/site-metadata";

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

				<li className="mb-8 text-lg">
					<EmailManager />
				</li>

				<li className="text-lg">
					<Link href="https://keys.openpgp.org/vks/v1/by-fingerprint/4BFDEC92BE41B3E455B8595206DC90228603707A">
						<Lock className="inline h-8 w-8 text-accent-600 dark:text-dark-accent-300" />{" "}
						OpenPGP Key
					</Link>
				</li>
			</ol>
		</>
	);
};

export default Contact;
