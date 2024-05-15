import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
	return <section className="container max-w-3xl">{children}</section>;
};

export default SectionContainer;
