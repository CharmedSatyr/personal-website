"use client";

import { useEffect, useState } from "react";

import Link from "@/components/Link";

const MailPopup = () => {
	const [domain, setDomain] = useState("");
	const [user, setUser] = useState("");

	useEffect(() => {
		setUser(process.env.NEXT_PUBLIC_USERNAME);
		setDomain(process.env.NEXT_PUBLIC_DOMAIN);
	}, []);

	return (
		<>
			<button className="btn mt-4 rounded p-2 font-bold outline outline-accent-600 dark:outline-accent-200">
				<Link
					className="py-3 no-underline dark:text-dark-accent-200"
					href={`mailto:${user}@${domain}`}
				>
					Click to email
				</Link>
			</button>

			<div className="mt-4">
				<Link href="https://keys.openpgp.org/vks/v1/by-fingerprint/4BFDEC92BE41B3E455B8595206DC90228603707A">
					OpenPGP Key
				</Link>
			</div>
		</>
	);
};

export default MailPopup;
