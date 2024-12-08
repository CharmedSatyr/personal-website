type Props = {
	className?: string;
};

// TODO: This fallback is confusing.
const Skeleton = ({ className = "h-8 w-full" }: Props) => (
	<div
		className={`animate-pulse rounded-xl bg-secondary dark:bg-dark-primary-950 ${className}`}
		role="status"
	/>
);

export default Skeleton;
