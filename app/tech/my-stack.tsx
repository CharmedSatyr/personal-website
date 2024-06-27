import StackIcon from "tech-stack-icons";

import {
	Debian,
	Godot,
	Kafka,
	Koa,
	Mdx,
	Nextcloud,
	Obsidian,
	Unity,
} from "@/components/icons/tech";
import Link from "@/components/link";

export const GoTo = () => {
	return (
		<section className="mb-12 mt-8 flex flex-wrap justify-center gap-6">
			<Link
				href="https://react.dev/"
				className="flex items-center justify-around"
			>
				<StackIcon name="reactjs" className="mr-1 size-12" /> React
			</Link>

			<Link href="https://redux.js.org/" className="flex items-center">
				<StackIcon name="redux" className="mr-1 size-12" /> Redux
			</Link>

			<Link
				href="https://www.typescriptlang.org/"
				className="flex items-center justify-around"
			>
				<StackIcon name="typescript" className="mr-1 size-12" /> TypeScript
			</Link>

			<Link
				href="https://nodejs.org/en"
				className="flex items-center justify-around"
			>
				<StackIcon name="nodejs" className="mr-1 inline size-12" /> Node.js
			</Link>

			<Link
				href="https://nextjs.org/"
				className="flex items-center justify-around"
			>
				<StackIcon name="nextjs2" className="mr-1 size-12 dark:dark:invert" />{" "}
				Next.js
			</Link>

			<Link
				href="https://koajs.com/"
				className="flex items-center justify-around"
			>
				<Koa className="mr-1 size-12 dark:invert" /> Koa
			</Link>

			<Link
				href="https://tailwindcss.com/"
				className="flex items-center justify-around"
			>
				<StackIcon name="tailwindcss" className="mr-1 size-12" /> Tailwind CSS
			</Link>

			<Link
				href="https://www.postgresql.org/"
				className="flex items-center justify-around"
			>
				<StackIcon name="postgresql" className="mr-1 size-12" /> PostgreSQL
			</Link>
		</section>
	);
};

export const AlsoUse = () => {
	return (
		<section className="mb-12 mt-8 flex flex-wrap justify-center gap-6">
			<Link
				href="https://www.rust-lang.org/"
				className="flex items-center justify-around"
			>
				<StackIcon name="rust" className="mr-1 size-8 dark:invert" /> Rust
			</Link>

			<Link
				href="https://dotnet.microsoft.com/en-us/languages/csharp"
				className="flex items-center justify-around"
			>
				<StackIcon name="csharp" className="mr-1 size-8" /> C#
			</Link>

			<Link
				href="https://kafka.apache.org/"
				className="flex items-center justify-around"
			>
				<Kafka className="mr-1 size-8 dark:invert" /> Apache Kafka
			</Link>

			<Link
				href="https://mdxjs.com/"
				className="flex items-center justify-around"
			>
				<Mdx className="mr-1 size-8 dark:invert" /> MDX
			</Link>

			<Link
				href="https://www.docker.com/"
				className="flex items-center justify-around"
			>
				<StackIcon name="docker" className="mr-1 size-8" /> Docker
			</Link>

			<Link
				href="https://www.mongodb.com/"
				className="flex items-center justify-around"
			>
				<StackIcon name="mongodb" className="mr-1 size-8" /> MongoDB
			</Link>
		</section>
	);
};

export const GameEngines = () => {
	return (
		<section className="mb-12 mt-8 flex flex-wrap justify-center gap-6">
			<Link
				href="https://godotengine.org/"
				className="flex items-center justify-around"
			>
				<Godot className="mr-1 size-8 dark:invert" /> Godot
			</Link>

			<Link
				href="https://unity.com/"
				className="flex items-center justify-around"
			>
				<Unity className="mr-1 size-8 dark:invert" /> Unity
			</Link>
		</section>
	);
};

export const Tools = () => {
	return (
		<section className="mb-12 mt-8 flex flex-wrap justify-center gap-6">
			<Link
				href="https://www.vim.org/"
				className="flex items-center justify-around"
			>
				<StackIcon name="vim" className="mr-1 size-8" /> Vim
			</Link>

			<Link
				href="https://code.visualstudio.com/"
				className="flex items-center justify-around"
			>
				<StackIcon name="vscode" className="mr-1 size-8" /> Visual Studio Code
			</Link>

			<Link
				href="https://www.debian.org/"
				className="flex items-center justify-around"
			>
				<Debian className="mr-1 size-8 dark:invert" /> Debian
			</Link>
		</section>
	);
};

export const Productivity = () => {
	return (
		<section className="mb-12 mt-8 flex flex-wrap justify-center gap-6">
			<Link
				href="https://nextcloud.com/"
				className="flex items-center justify-around"
			>
				<Nextcloud className="mr-1 size-8 dark:invert" /> Nextcloud
			</Link>

			<Link
				href="https://obsidian.md/"
				className="flex items-center justify-around"
			>
				<Obsidian className="mr-1 size-8 dark:invert" /> Obsidian
			</Link>
		</section>
	);
};
