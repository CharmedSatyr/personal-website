import { PropsWithChildren } from "react";

const PageTitle = ({ children }: PropsWithChildren) => {
	return <h1 className="title">{children}</h1>;
};

export default PageTitle;
