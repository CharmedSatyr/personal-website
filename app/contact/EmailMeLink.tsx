"use client";

import { Mail } from "@/app/contact/social-icons";

interface Props {
	triggerChange: () => void;
}

const EmailMeLink = ({ triggerChange }: Props) => {
	return (
		<button className="hyperlink" onClick={() => triggerChange()}>
			<Mail className="inline h-8 w-8 text-accent-600 dark:text-dark-accent-300" />{" "}
			Send me an email
		</button>
	);
};

export default EmailMeLink;
