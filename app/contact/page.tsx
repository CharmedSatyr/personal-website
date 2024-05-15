"use client";

import SectionContainer from "components/SectionContainer";
import { useState } from "react";
import dotenv from "dotenv";
import Link from "components/Link";

dotenv.config();

export default () => {
	const [proof, setProof] = useState("");

	return (
		<SectionContainer>
			<h1 className="mb-8 text-6xl font-bold text-indigo-200">Contact</h1>

			<form>
				<label className="text-2xl">
					Wait a minute... Are you a human? Please type my first name if you are. (It's spelled out
					just above.)
					<input
						className="focus:shadow-outline my-8 mb-10 block appearance-none rounded bg-white px-3 py-2 text-gray-700"
						onChange={(e) => setProof(e.target.value)}
						type="text"
						required
					/>
				</label>

				<MailLink proof={proof} />
			</form>
		</SectionContainer>
	);
};

const MailLink = ({ proof }: { proof: string }) => {
	if (
		proof.length < process.env.NEXT_PUBLIC_PROOF.length ||
		proof !== process.env.NEXT_PUBLIC_PROOF
	) {
		return null;
	}

	return (
		<Link href="mailto:email@email.com" className="btn rounded p-2 text-2xl font-bold outline">
			OK, that was easy.
		</Link>
	);
};
