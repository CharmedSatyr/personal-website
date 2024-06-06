"use client";

import { useState } from "react";

import MailPopup from "app/contact/MailPopup";

const ProveHuman = () => {
	const [proof, setProof] = useState("");

	return (
		<form className="max-w-xs cursor-default text-left md:max-w-lg">
			<label>
				Wait a minute... Are you a human? Please type my first name. (It's spelled out just above.)
				<input
					className="focus:shadow-outline mb-10 mt-8 block w-full appearance-none rounded py-2 md:px-3"
					onChange={(e) => setProof(e.target.value)}
					type="text"
					required
				/>
			</label>

			<MailPopup proof={proof} />
		</form>
	);
};

export default ProveHuman;
