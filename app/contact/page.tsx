import EmailManager from "@/app/contact/email-manager";
import genPageMetadata from "@/app/seo";
import { GitHub, LinkedIn } from "@/components/icons/social";
import Link from "@/components/link";
import PageTitle from "@/components/page-title";
import siteMetadata from "@/data/site-metadata";
import { LockClosedIcon } from "@heroicons/react/24/solid";

export const metadata = genPageMetadata({ title: "Contact" });

const Contact = () => {
	return (
		<>
			<PageTitle>Contact</PageTitle>

			<ol>
				<li className="mb-8">
					<Link href={siteMetadata.linkedin}>
						<LinkedIn className="inline h-6 w-6 text-accent hover:scale-105 dark:text-dark-accent" />{" "}
						Connect on LinkedIn
					</Link>
				</li>

				<li className="mb-8">
					<Link href={siteMetadata.github}>
						<GitHub className="inline h-6 w-6 text-accent hover:scale-105 dark:text-dark-accent" />{" "}
						Collaborate on GitHub
					</Link>
				</li>

				<li className="mb-8">
					<EmailManager />
				</li>

				<li>
					<Link href="https://keys.openpgp.org/vks/v1/by-fingerprint/4BFDEC92BE41B3E455B8595206DC90228603707A">
						<LockClosedIcon className="inline size-6 text-accent hover:scale-105 dark:text-dark-accent" />{" "}
						OpenPGP Key
					</Link>
				</li>
			</ol>
		</>
	);
};

export default Contact;
