type Props = {
	className?: string;
};

// TODO: This fallback is confusing.
const Skeleton = ({ className = "h-8 w-full" }: Props) => (
	<div
		className={`bg-secondary dark:bg-dark-primary-950 animate-pulse rounded-xl ${className}`}
		role="status"
	/>
);

export default Skeleton;
