"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Link from "@/components/link";

const MailPopup = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");

	useEffect(() => {
		setEmail(
			process.env.NEXT_PUBLIC_USERNAME + "@" + process.env.NEXT_PUBLIC_DOMAIN,
		);
	}, []);

	useEffect(() => {
		if (email) {
			router.push(`mailto:${email}`);
		}
	}, [email, router]);

	return (
		<>
			<button className="btn outline-accent dark:outline-dark-accent rounded-sm p-2 outline">
				<Link className="hyperlink py-3 no-underline" href={`mailto:${email}`}>
					Click to email
				</Link>
			</button>
		</>
	);
};

export default MailPopup;
