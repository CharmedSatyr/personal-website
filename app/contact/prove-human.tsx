"use client";

import { useEffect, useState } from "react";

const ProveHuman = ({ triggerChange }) => {
	const [proof, setProof] = useState("");

	useEffect(() => {
		if (proof.toLowerCase() !== process.env.NEXT_PUBLIC_PROOF.toLowerCase()) {
			return;
		}

		triggerChange();
	}, [proof, triggerChange]);

	return (
		<form className="max-w-xs cursor-default text-left md:max-w-lg">
			<label>
				Wait a minute... Are you a human? Please type my first name. (It's
				spelled out just above.)
				<input
					className="focus:shadow-outline focus:border-secondary-700 mb-10 mt-8 block w-full appearance-none rounded border-2 border-primary-300 bg-primary-50 py-2 text-primary-950 shadow-inner focus:outline-none dark:border-dark-accent md:px-3"
					onChange={(e) => setProof(e.target.value)}
					type="text"
					required
				/>
			</label>
		</form>
	);
};

export default ProveHuman;
