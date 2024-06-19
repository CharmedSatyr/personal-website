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
			<button className="btn rounded p-2 font-bold outline outline-accent-600 dark:outline-accent-200">
				<Link
					className="py-3 no-underline dark:text-dark-accent-200"
					href={`mailto:${email}`}
				>
					Click to email
				</Link>
			</button>
		</>
	);
};

export default MailPopup;
