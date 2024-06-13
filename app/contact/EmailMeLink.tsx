"use client";

import { useState } from "react";

import ProveHuman from "app/contact/ProveHuman";
import { Mail } from "app/contact/social-icons";

const EmailMeLink = () => {
	const [clicked, setClicked] = useState(false);

	if (clicked) {
		return <ProveHuman />;
	}

	return (
		<button
			className="hyperlink"
			onClick={(e) => {
				// After initial click, let the mailto: work
				if (!clicked) {
					e.preventDefault();
				}

				setClicked(true);
			}}
		>
			<Mail className="inline h-8 w-8" /> Send me an email
		</button>
	);
};

export default EmailMeLink;
