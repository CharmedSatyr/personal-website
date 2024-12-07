import Skeleton from "@/components/skeleton";

const Loading = () => {
	return (
		<div className="flex flex-col">
			<div className="flex-start mb-8 flex flex-col gap-3">
				<Skeleton className="h-14 w-40 md:h-16 md:w-44" />
				<Skeleton className="h-12 w-52 md:w-56" />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton className="h-10 w-3/4" />
			</div>
			<div className="flex-start flex flex-col gap-3">
				<Skeleton className="h-14 w-48 md:h-16 md:w-36" />
				<Skeleton className="h-12 w-64 md:w-72" />
				<Skeleton />
				<Skeleton />
				<Skeleton className="w-96" />
			</div>
			<div className="flex-start mb-8 flex flex-col gap-3">
				<Skeleton className="h-14 w-40 md:h-16 md:w-44" />
				<Skeleton className="h-12 w-52 md:w-56" />
				<Skeleton />
				<Skeleton />
				<Skeleton />
				<Skeleton className="h-10 w-3/4" />
			</div>
			<div className="flex-start flex flex-col gap-3">
				<Skeleton className="h-14 w-48 md:h-16 md:w-36" />
				<Skeleton className="h-12 w-64 md:w-72" />
				<Skeleton />
				<Skeleton />
				<Skeleton className="w-96" />
			</div>
		</div>
	);
};

export default Loading;
