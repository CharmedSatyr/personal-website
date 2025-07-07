import StackIcon from "tech-stack-icons";

import { Signal } from "@/components/icons/social";
import {
	Caddy,
	Debian,
	Godot,
	Kafka,
	Koa,
	LibreOffice,
	Mdx,
	Netlify,
	Nextcloud,
	Nginx,
	Obsidian,
	React,
	Unity,
	Vercel,
	Vultr,
	Zsh,
} from "@/components/icons/tech";
import Link from "@/components/link";

export const GoTo = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://react.dev/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="react" className="mr-1 size-12" /> React
			</Link>

			<Link
				href="https://redux.js.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="redux" className="mr-1 size-12" /> Redux
			</Link>

			<Link
				href="https://www.typescriptlang.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="typescript" className="mr-1 size-12" /> TypeScript
			</Link>

			<Link
				href="https://nodejs.org/en"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="nodejs" className="mr-1 inline size-12" /> Node.js
			</Link>

			<Link
				href="https://nextjs.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="nextjs2" className="mr-1 size-12 dark:dark:invert" />{" "}
				Next.js
			</Link>

			<Link
				href="https://koajs.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Koa className="mr-1 size-12 dark:invert" /> Koa
			</Link>

			<Link
				href="https://tailwindcss.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="tailwindcss" className="mr-1 size-12" /> Tailwind CSS
			</Link>

			<Link
				href="https://www.postgresql.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="postgresql" className="mr-1 size-12" /> PostgreSQL
			</Link>

			<Link
				href="https://www.vercel.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Vercel className="mr-1 size-6" fill="currentColor" /> Vercel
			</Link>
		</section>
	);
};

export const AlsoUse = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://www.rust-lang.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="rust" className="mr-1 size-6 dark:invert" /> Rust
			</Link>

			<Link
				href="https://dotnet.microsoft.com/en-us/languages/csharp"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="csharp" className="mr-1 size-6" /> C#
			</Link>

			<Link
				href="https://mdxjs.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Mdx className="mr-1 size-6 dark:invert" /> MDX
			</Link>

			<Link
				href="https://kafka.apache.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Kafka className="size-6 dark:invert" /> Apache Kafka
			</Link>

			<Link
				href="https://www.elastic.co/elasticsearch"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="elastic" className="mr-1 size-6" /> Elasticsearch
			</Link>

			<Link
				href="https://www.mongodb.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="mongodb" className="mr-1 size-6" /> MongoDB
			</Link>

			<Link
				href="https://www.docker.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="docker" className="mr-1 size-6" /> Docker
			</Link>

			<Link
				href="https://caddyserver.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Caddy className="mr-1 size-6 text-[#1F88C0]" fill="currentColor" />{" "}
				Caddy
			</Link>

			<Link
				href="https://nginx.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Nginx className="mr-1 size-6 text-[#009900]" fill="currentColor" />{" "}
				Nginx
			</Link>

			<Link
				href="https://www.netlify.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Netlify className="mr-1 size-6 text-[#32e6e2]" fill="currentColor" />{" "}
				Netlify
			</Link>

			<Link
				href="https://www.vultr.com"
				className="flex items-center justify-between hover:scale-105"
			>
				<Vultr className="mr-1 size-6 text-[#202fab]" fill="currentColor" />{" "}
				Vultr
			</Link>

			<Link
				href="https://aws.amazon.com"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="aws" className="mr-1 size-6 dark:invert" /> AWS
			</Link>
		</section>
	);
};

export const GameEngines = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://godotengine.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Godot className="mr-1 size-6 text-[#478cbf]" fill="currentColor" />{" "}
				Godot
			</Link>

			<Link
				href="https://unity.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Unity className="mr-1 size-6 dark:invert" /> Unity
			</Link>
		</section>
	);
};

export const Environment = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://www.vim.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="vim" className="mr-1 size-6" /> Vim
			</Link>

			<Link
				href="https://code.visualstudio.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="vscode" className="mr-1 size-6" /> Visual Studio Code
			</Link>

			<Link
				href="https://www.debian.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Debian className="mr-1 size-6 text-[#a80030]" fill="currentColor" />{" "}
				Debian
			</Link>

			<Link
				href="https://ohmyz.sh/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Zsh className="mr-1 size-6 text-[#c5d928]" fill="currentColor" /> Oh My
				Zsh
			</Link>
		</section>
	);
};

export const Productivity = () => {
	return (
		<section className="mb-16 flex flex-wrap justify-start gap-6">
			<Link
				href="https://nextcloud.com/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Nextcloud className="mr-1 size-6 text-[#14a2f0]" fill="currentColor" />{" "}
				Nextcloud
			</Link>

			<Link
				href="https://obsidian.md/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Obsidian className="mr-1 size-6 text-[#a88bfa]" fill="currentColor" />{" "}
				Obsidian
			</Link>

			<Link
				href="https://www.mozilla.org/en-US/firefox/new/"
				className="flex items-center justify-between hover:scale-105"
			>
				<StackIcon name="firefox" className="mr-1 size-6" /> Firefox
			</Link>

			<Link
				href="https://signal.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<Signal className="mr-1 size-6 text-[#3a76f0]" fill="currentColor" />{" "}
				Signal
			</Link>

			<Link
				href="https://www.libreoffice.org/"
				className="flex items-center justify-between hover:scale-105"
			>
				<LibreOffice
					className="mr-1 size-6 text-[#00a500]"
					fill="currentColor"
				/>{" "}
				LibreOffice
			</Link>
		</section>
	);
};
