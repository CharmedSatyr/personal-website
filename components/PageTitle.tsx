interface Props {
	title: string;
}

const PageTitle = (props: Props) => {
	return <h1 className="title">{props.title}</h1>;
};

export default PageTitle;
