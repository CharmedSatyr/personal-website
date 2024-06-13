import { ReactNode } from "react";

interface Props {
	title: string;
	children: ReactNode;
}

const PageContainer = ({ title, children }: Props) => {
	return (
		<section className="container min-h-96 max-w-3xl">
			<h1 className="highlighted mb-8 text-3xl font-bold md:text-5xl">
				{title}
			</h1>

			{children}
		</section>
	);
};

export default PageContainer;
