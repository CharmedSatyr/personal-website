type Props = {
	className?: string;
};
const Skeleton = ({ className = "h-10 w-full" }: Props) => (
	<div
		className={`animate-pulse rounded-xl bg-secondary dark:bg-dark-primary-950 ${className}`}
		role="status"
	/>
);

export default Skeleton;
