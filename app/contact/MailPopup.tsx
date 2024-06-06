"use client";

import { useEffect, useState } from "react";

import Link from "components/Link";
import { useRouter } from "next/navigation";

const MailPopup = ({ proof = "" }: { proof: string }) => {
	const router = useRouter();
	const [domain, setDomain] = useState("");
	const [popup, setPopup] = useState(false);
	const [user, setUser] = useState("");

	const isValid = proof === process.env.NEXT_PUBLIC_PROOF;

	useEffect(() => {
		if (!isValid && (user !== "" || domain !== "")) {
			setUser("");
			setDomain("");
			return;
		}

		if (isValid) {
			setUser(process.env.NEXT_PUBLIC_USERNAME);
			setDomain(process.env.NEXT_PUBLIC_DOMAIN);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isValid]);

	useEffect(() => {
		if (isValid && user && domain && !popup) {
			setPopup(true);
			router.push(`mailto:${user}@${domain}`);
		}
	}, [domain, isValid, user, popup]);

	if (!isValid) {
		return null;
	}

	return (
		<button className="btn rounded p-2 text-xl font-bold outline outline-accent-600 dark:outline-accent-200 md:text-2xl">
			<Link
				className="py-3 no-underline dark:text-dark-accent-200"
				href={`mailto:${user}@${domain}`}
			>
				OK, that was easy
			</Link>
		</button>
	);
};

export default MailPopup;
