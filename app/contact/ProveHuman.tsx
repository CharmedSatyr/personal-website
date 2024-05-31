"use client";

import { useEffect, useRef, useState } from "react";

import Link from "components/Link";

const ProveHuman = () => {
	const [proof, setProof] = useState("");

	return (
		<form className="max-w-xs cursor-default text-left md:max-w-lg">
			<label>
				Wait a minute... Are you a human? Please type my first name. (It's spelled out just above.)
				<input
					className="focus:shadow-outline mb-10 mt-8 block w-full appearance-none rounded py-2 md:px-3"
					onChange={(e) => setProof(e.target.value)}
					type="text"
					required
				/>
			</label>

			<MailPopup proof={proof} />
		</form>
	);
};

const MailPopup = ({ proof = "" }: { proof: string }) => {
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
			window.location.href = `mailto:${user}@${domain}`;
		}
	}, [domain, isValid, user, popup]);

	if (!isValid) {
		return null;
	}

	return (
		<Link
			href={`mailto:${user}@${domain}`}
			className="btn rounded p-2 text-xl font-bold no-underline outline outline-accent-600 dark:text-dark-accent-200 dark:outline-accent-200 md:text-2xl"
		>
			OK, that was easy
		</Link>
	);
};

export default ProveHuman;
