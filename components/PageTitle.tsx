interface Props {
	title: string;
}

const PageTitle = (props: Props) => {
	return (
		<h1 className="highlighted mb-8 text-3xl font-bold md:text-5xl">
			{props.title}
		</h1>
	);
};

export default PageTitle;
