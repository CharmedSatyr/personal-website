"use client";

import { useEffect, useState } from "react";

import Link from "components/Link";

const ProveHuman = () => {
	const [proof, setProof] = useState("");

	return (
		<form>
			<label>
				Wait a minute... Are you a human? Please type my first name if you are.
				<br />
				(It's spelled out just above.)
				<input
					className="focus:shadow-outline mb-10 mt-8 block appearance-none rounded py-2 md:px-3"
					onChange={(e) => setProof(e.target.value)}
					type="text"
					required
				/>
			</label>

			<MailLink proof={proof} />
		</form>
	);
};

const MailLink = ({ proof = "" }: { proof: string }) => {
	const [user, setUser] = useState("");
	const [domain, setDomain] = useState("");

	const isValid = proof === process.env.NEXT_PUBLIC_PROOF;

	useEffect(() => {
		if (!isValid && (user !== "" || domain !== "")) {
			setUser("");
			setDomain("");
			return;
		}

		setUser(process.env.NEXT_PUBLIC_USERNAME);
		setDomain(process.env.NEXT_PUBLIC_DOMAIN);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isValid]);

	if (!isValid) {
		return null;
	}

	return (
		<Link
			href={`mailto:${user}@${domain}`}
			className="btn rounded p-2 text-xl font-bold no-underline outline outline-accent-600 dark:text-dark-accent-200 dark:outline-accent-200 md:text-2xl"
		>
			OK, that was easy.
		</Link>
	);
};

export default ProveHuman;
