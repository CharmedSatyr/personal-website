import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const ArticleContainer = ({ children }: Props) => {
	return (
		<article className="container prose min-h-96 max-w-3xl">{children}</article>
	);
};

export default ArticleContainer;
