import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const PageContainer = ({ children }: Props) => {
	return <section className="container min-h-96 max-w-3xl">{children}</section>;
};

export default PageContainer;
