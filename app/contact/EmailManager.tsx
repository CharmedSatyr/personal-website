"use client";

import { useState } from "react";

import EmailMeLink from "@/app/contact/EmailMeLink";
import MailPopup from "@/app/contact/MailPopup";
import ProveHuman from "@/app/contact/ProveHuman";

enum EmailState {
	emailMe = "emailMe",
	proveHuman = "proveHuman",
	mailPopup = "mailPopup",
}

const EmailManager = () => {
	const [state, setState] = useState(EmailState.emailMe);

	const emailComponents = {
		emailMe: (
			<EmailMeLink triggerChange={() => setState(EmailState.proveHuman)} />
		),
		proveHuman: (
			<ProveHuman triggerChange={() => setState(EmailState.mailPopup)} />
		),
		mailPopup: <MailPopup />,
	};

	return emailComponents[state];
};

export default EmailManager;
