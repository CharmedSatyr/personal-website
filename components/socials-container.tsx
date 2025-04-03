import Link from "next/link";

import { Bluesky, GitHub, Itchio, LinkedIn } from "@/components/icons/social";
import siteMetadata from "@/data/site-metadata";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";

const SocialsContainer = () => {
	return (
		<ol className="flex w-full flex-wrap justify-center gap-4">
			<li>
				<Link href={siteMetadata.bluesky}>
					<Bluesky className="text-accent dark:text-dark-accent inline size-5 hover:scale-105 md:size-6" />{" "}
				</Link>
			</li>
			<li>
				<Link href={siteMetadata.linkedin}>
					<LinkedIn className="text-accent dark:text-dark-accent inline size-5 hover:scale-105 md:size-6" />{" "}
				</Link>
			</li>

			<li>
				<Link href={siteMetadata.github}>
					<GitHub className="text-accent dark:text-dark-accent inline size-5 hover:scale-105 md:size-6" />{" "}
				</Link>
			</li>

			<li>
				<Link href={siteMetadata.itchio}>
					<Itchio className="text-accent dark:text-dark-accent inline size-5 hover:scale-105 md:size-6" />{" "}
				</Link>
			</li>

			<li>
				<Link href="/contact">
					<EnvelopeIcon className="text-accent dark:text-dark-accent inline size-5 hover:scale-105 md:size-6" />{" "}
				</Link>
			</li>

			<li>
				<Link href="https://keys.openpgp.org/vks/v1/by-fingerprint/4BFDEC92BE41B3E455B8595206DC90228603707A">
					<LockClosedIcon className="text-accent dark:text-dark-accent inline size-5 hover:scale-105 md:size-6" />{" "}
				</Link>
			</li>
		</ol>
	);
};

export default SocialsContainer;
