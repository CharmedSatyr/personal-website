"use client";

import { useEffect, useState } from "react";

const expected = process.env.NEXT_PUBLIC_PROOF;
if (!expected) throw new Error("NEXT_PUBLIC_PROOF is not set");

const ProveHuman = ({ triggerChange }: { triggerChange: () => void }) => {
	const [proof, setProof] = useState("");

	useEffect(() => {
		if (proof.toLowerCase() !== expected.toLowerCase()) {
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
					className="focus:shadow-outline focus:border-secondary-700 border-primary-300 bg-primary-50 text-primary-950 dark:border-dark-accent mt-8 mb-10 block w-full appearance-none rounded-sm border-2 px-2 py-2 shadow-inner focus:outline-hidden md:px-3"
					onChange={(e) => setProof(e.target.value)}
					type="text"
					required
				/>
			</label>
		</form>
	);
};

export default ProveHuman;
