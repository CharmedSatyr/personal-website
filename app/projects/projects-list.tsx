import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";

import { GitHub } from "@/components/icons/social";
import Link from "@/components/link";
import Skeleton from "@/components/skeleton";
import { projectsDir } from "@/constants/directories";

type FrontMatter = {
	date: string;
	repo: string;
	tags: string[];
	title: string;
	url: string;
};

const getProjects = async () => {
	const files = await fs.readdir(path.join(projectsDir));

	return Promise.all(
		files.map(async (filename) => {
			const fileContent = await fs.readFile(
				path.join(projectsDir, filename),
				"utf-8",
			);

			const { data: frontMatter, content } = matter(fileContent);

			return {
				meta: frontMatter as FrontMatter,
				slug: filename.replace(".mdx", ""),
				content,
			};
		}),
	);
};

const ProjectsList = async () => {
	const projects = await getProjects();

	return (
		<section>
			<ul>
				{projects
					.sort((a, b) => {
						const first =
							a.meta.date === "In Development"
								? new Date()
								: new Date(a.meta.date);
						const second =
							b.meta.date === "In Development"
								? new Date()
								: new Date(b.meta.date);

						if (first < second) {
							return 1;
						}

						if (first > second) {
							return -1;
						}

						return 0;
					})
					.map((project) => (
						<li key={project.slug}>
							<div className="mb-4 flex flex-wrap items-center justify-between">
								<div className="flex items-center gap-2">
									<h3 className="title text-bold inline">
										<Link href={project.meta.url}>{project.meta.title}</Link>
									</h3>
									<Link href={project.meta.repo}>
										<GitHub className="text-accent dark:text-dark-accent inline h-6 w-6 transition-transform hover:scale-105" />
									</Link>
								</div>

								<time className="inline italic">{project.meta.date}</time>
							</div>
							<div className="prose-a:hyperlink">
								<MDXRemote source={project.content} />
							</div>
							<div className="flex flex-wrap gap-1">
								{project.meta.tags.map((tag: string) => (
									<div
										className="border-primary-800 bg-primary-950 text-primary-100 w-fit rounded-sm border px-2 shadow-sm"
										key={tag}
									>
										{tag}
									</div>
								))}
							</div>
							<hr className="my-10" />
						</li>
					))}
			</ul>
		</section>
	);
};

export default ProjectsList;

export const ProjectsListFallback = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Skeleton className="h-8 w-36" />
						<Skeleton className="h-8 w-12" />
					</div>
					<Skeleton className="h-8 w-44" />
				</div>

				<div className="flex flex-col gap-2">
					<Skeleton className="h-8 w-full" />
					<Skeleton className="h-8 w-full" />
					<Skeleton className="h-8 w-3/4" />
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Skeleton className="h-8 w-36" />
						<Skeleton className="h-8 w-12" />
					</div>
					<Skeleton className="h-8 w-44" />
				</div>

				<div className="flex flex-col gap-2">
					<Skeleton className="h-8 w-full" />
					<Skeleton className="h-8 w-full" />
					<Skeleton className="h-8 w-3/4" />
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex justify-between">
					<div className="flex gap-4">
						<Skeleton className="h-8 w-36" />
						<Skeleton className="h-8 w-12" />
					</div>
					<Skeleton className="h-8 w-44" />
				</div>

				<div className="flex flex-col gap-2">
					<Skeleton className="h-8 w-full" />
					<Skeleton className="h-8 w-full" />
					<Skeleton className="h-8 w-3/4" />
				</div>
			</div>
		</div>
	);
};
