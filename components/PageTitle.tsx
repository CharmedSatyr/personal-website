interface Props {
	title: string;
}

const PageTitle = (props: Props) => {
	return <h1 className="highlighted mb-8 text-4xl font-bold">{props.title}</h1>;
};

export default PageTitle;
