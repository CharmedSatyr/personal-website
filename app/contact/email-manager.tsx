"use client";

import { useState } from "react";

import EmailMeLink from "@/app/contact/email-me-link";
import MailPopup from "@/app/contact/mail-popup";
import ProveHuman from "@/app/contact/prove-human";

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
