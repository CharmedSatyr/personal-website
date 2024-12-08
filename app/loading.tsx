import Skeleton from "@/components/skeleton";

const Loading = () => {
	return (
		<div className="flex flex-col">
			<div className="flex-start mb-8 flex flex-col gap-2">
				<Skeleton className="mb-2 h-12 w-44" />
				<Skeleton className="mb-2 h-8 w-56" />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton className="h-8 w-3/4" />
			</div>
			<div className="flex-start mb-8 flex flex-col gap-2">
				<Skeleton className="mb-2 h-12 w-36" />
				<Skeleton className="mb-2 h-8 w-72" />
				<Skeleton />
				<Skeleton />
				<Skeleton className="w-96" />
			</div>
			<div className="flex-start mb-8 flex flex-col gap-2">
				<Skeleton className="mb-2 h-12 w-44" />
				<Skeleton className="mb-2 h-8 w-56" />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton className="h-8 w-3/4" />
			</div>
			<div className="flex-start mb-8 flex flex-col gap-2">
				<Skeleton className="mb-2 h-12 w-36" />
				<Skeleton className="mb-2 h-8 w-72" />
				<Skeleton />
				<Skeleton />
				<Skeleton className="w-96" />
			</div>
		</div>
	);
};

export default Loading;
