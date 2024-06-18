"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "@/components/Link";

const MailPopup = () => {
	const router = useRouter();
	const [domain, setDomain] = useState("");
	const [user, setUser] = useState("");

	useEffect(() => {
		setUser(process.env.NEXT_PUBLIC_USERNAME);
		setDomain(process.env.NEXT_PUBLIC_DOMAIN);
	}, []);

	useEffect(() => {
		if (user && domain) {
			router.push(`mailto:${user}@${domain}`);
		}
	}, [router, user, domain]);

	return (
		<button className="btn rounded p-2 font-bold outline outline-accent-600 dark:outline-accent-200">
			<Link
				className="py-3 no-underline dark:text-dark-accent-200"
				href={`mailto:${user}@${domain}`}
			>
				Click to email
			</Link>
		</button>
	);
};

export default MailPopup;
