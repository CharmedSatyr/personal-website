"use client";

import { useState } from "react";

import ProveHuman from "app/contact/ProveHuman";
import { Mail } from "app/contact/social-icons";

const MailComponent = ({ clicked }) => {
	if (clicked) {
		return <ProveHuman />;
	}

	return (
		<div className="fake-link">
			<Mail className="inline h-8 w-8" /> Send me an email
		</div>
	);
};

const MailLink = () => {
	const [clicked, setClicked] = useState(false);

	return (
		<button
			onClick={(e) => {
				// After initial click, let the mailto: work
				if (!clicked) {
					e.preventDefault();
				}

				setClicked(true);
			}}
		>
			<MailComponent clicked={clicked} />
		</button>
	);
};

export default MailLink;
