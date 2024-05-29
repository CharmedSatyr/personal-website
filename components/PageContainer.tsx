import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PageContainer = ({ children }: Props) => {
	return <section className="container max-w-2xl">{children}</section>;
};

export default PageContainer;
