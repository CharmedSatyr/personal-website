"use client";

import { Mail } from "@/components/icons/social";

interface Props {
	triggerChange: () => void;
}

const EmailMeLink = ({ triggerChange }: Props) => {
	return (
		<button className="hyperlink" onClick={() => triggerChange()}>
			<Mail className="inline h-6 w-6 text-accent-600 dark:text-dark-accent-300" />{" "}
			Send me an email
		</button>
	);
};

export default EmailMeLink;
