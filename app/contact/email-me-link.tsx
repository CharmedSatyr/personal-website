"use client";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

interface Props {
	triggerChange: () => void;
}

const EmailMeLink = ({ triggerChange }: Props) => {
	return (
		<button className="hyperlink" onClick={() => triggerChange()}>
			<EnvelopeIcon
				className="text-accent dark:text-dark-accent inline size-6 cursor-pointer hover:scale-105"
				title="Email"
			/>{" "}
			Send me an email
		</button>
	);
};

export default EmailMeLink;
