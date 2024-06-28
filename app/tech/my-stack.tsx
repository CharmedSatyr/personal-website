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
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://react.dev/"
				className="flex items-center justify-between"
			>
				<StackIcon name="reactjs" className="mr-1 size-12" /> React
			</Link>

			<Link href="https://redux.js.org/" className="flex items-center">
				<StackIcon name="redux" className="mr-1 size-12" /> Redux
			</Link>

			<Link
				href="https://www.typescriptlang.org/"
				className="flex items-center justify-between"
			>
				<StackIcon name="typescript" className="mr-1 size-12" /> TypeScript
			</Link>

			<Link
				href="https://nodejs.org/en"
				className="flex items-center justify-between"
			>
				<StackIcon name="nodejs" className="mr-1 inline size-12" /> Node.js
			</Link>

			<Link
				href="https://nextjs.org/"
				className="flex items-center justify-between"
			>
				<StackIcon name="nextjs2" className="mr-1 size-12 dark:dark:invert" />{" "}
				Next.js
			</Link>

			<Link
				href="https://koajs.com/"
				className="flex items-center justify-between"
			>
				<Koa className="mr-1 size-12 dark:invert" /> Koa
			</Link>

			<Link
				href="https://tailwindcss.com/"
				className="flex items-center justify-between"
			>
				<StackIcon name="tailwindcss" className="mr-1 size-12" /> Tailwind CSS
			</Link>

			<Link
				href="https://www.postgresql.org/"
				className="flex items-center justify-between"
			>
				<StackIcon name="postgresql" className="mr-1 size-12" /> PostgreSQL
			</Link>
		</section>
	);
};

export const AlsoUse = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://www.rust-lang.org/"
				className="flex items-center justify-between"
			>
				<StackIcon name="rust" className="mr-1 size-6 dark:invert" /> Rust
			</Link>

			<Link
				href="https://dotnet.microsoft.com/en-us/languages/csharp"
				className="flex items-center justify-between"
			>
				<StackIcon name="csharp" className="mr-1 size-6" /> C#
			</Link>

			<Link
				href="https://kafka.apache.org/"
				className="flex items-center justify-between"
			>
				<Kafka className="size-6 dark:invert" /> Apache Kafka
			</Link>

			<Link
				href="https://mdxjs.com/"
				className="flex items-center justify-between"
			>
				<Mdx className="mr-1 size-6 dark:invert" /> MDX
			</Link>

			<Link
				href="https://www.docker.com/"
				className="flex items-center justify-between"
			>
				<StackIcon name="docker" className="mr-1 size-6" /> Docker
			</Link>

			<Link
				href="https://www.mongodb.com/"
				className="flex items-center justify-between"
			>
				<StackIcon name="mongodb" className="mr-1 size-6" /> MongoDB
			</Link>
		</section>
	);
};

export const GameEngines = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://godotengine.org/"
				className="flex items-center justify-between"
			>
				<Godot className="mr-1 size-6 text-[#478cbf]" fill="currentColor" />{" "}
				Godot
			</Link>

			<Link
				href="https://unity.com/"
				className="flex items-center justify-between"
			>
				<Unity className="mr-1 size-6 dark:invert" /> Unity
			</Link>
		</section>
	);
};

export const Tools = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://www.vim.org/"
				className="flex items-center justify-between"
			>
				<StackIcon name="vim" className="mr-1 size-6" /> Vim
			</Link>

			<Link
				href="https://code.visualstudio.com/"
				className="flex items-center justify-between"
			>
				<StackIcon name="vscode" className="mr-1 size-6" /> Visual Studio Code
			</Link>

			<Link
				href="https://www.debian.org/"
				className="flex items-center justify-between"
			>
				<Debian className="mr-1 size-6 text-[#a80030]" fill="currentColor" />{" "}
				Debian
			</Link>
		</section>
	);
};

export const Productivity = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://nextcloud.com/"
				className="flex items-center justify-between"
			>
				<Nextcloud className="mr-1 size-6 text-[#14a2f0]" fill="currentColor" />{" "}
				Nextcloud
			</Link>

			<Link
				href="https://obsidian.md/"
				className="flex items-center justify-between"
			>
				<Obsidian className="mr-1 size-6 text-[#a88bfa]" fill="currentColor" />{" "}
				Obsidian
			</Link>
		</section>
	);
};
