"use client";

import { EnvelopeIcon } from "@heroicons/react/24/solid";

interface Props {
	triggerChange: () => void;
}

const EmailMeLink = ({ triggerChange }: Props) => {
	return (
		<button className="hyperlink" onClick={() => triggerChange()}>
			<EnvelopeIcon className="inline size-6 text-accent hover:scale-105 dark:text-dark-accent" />{" "}
			Send me an email
		</button>
	);
};

export default EmailMeLink;
