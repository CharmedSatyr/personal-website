import {
	AlsoUse,
	Environment,
	GameEngines,
	GoTo,
	Productivity,
} from "@/app/code/my-stack";
import { render, screen } from "@testing-library/react";

jest.mock("tech-stack-icons", () => ({
	__esModule: true,
	default: (props: Record<string, string>) => (
		<svg {...props}>
			<title>{props.name}</title>
		</svg>
	),
}));

describe("TechSections", () => {
	it("renders the GoTo section with correct tools and links", () => {
		render(<GoTo />);
		const tools = [
			{ name: "React", url: "https://react.dev/" },
			{ name: "Redux", url: "https://redux.js.org/" },
			{ name: "TypeScript", url: "https://www.typescriptlang.org/" },
			{ name: "Node.js", url: "https://nodejs.org/en" },
			{ name: "Next.js", url: "https://nextjs.org/" },
			{ name: "Koa", url: "https://koajs.com/" },
			{ name: "Tailwind CSS", url: "https://tailwindcss.com/" },
			{ name: "PostgreSQL", url: "https://www.postgresql.org/" },
			{ name: "Vercel", url: "https://www.vercel.com/" },
		];
		tools.forEach(({ name, url }) => {
			const link = screen.getByRole("link", { name: new RegExp(name) });
			expect(link).toHaveAttribute("href", url);
			expect(link).toBeInTheDocument();
		});
	});

	it("renders the AlsoUse section with correct tools and links", () => {
		render(<AlsoUse />);
		const tools = [
			{ name: "Rust", url: "https://www.rust-lang.org/" },
			{
				name: "C#",
				url: "https://dotnet.microsoft.com/en-us/languages/csharp",
			},
			{ name: "MDX", url: "https://mdxjs.com/" },
			{ name: "Apache Kafka", url: "https://kafka.apache.org/" },
			{ name: "Elasticsearch", url: "https://www.elastic.co/elasticsearch" },
			{ name: "MongoDB", url: "https://www.mongodb.com/" },
			{ name: "Docker", url: "https://www.docker.com/" },
			{ name: "Caddy", url: "https://caddyserver.com/" },
			{ name: "Nginx", url: "https://nginx.org/" },
			{ name: "Netlify", url: "https://www.netlify.com/" },
			{ name: "Vultr", url: "https://www.vultr.com" },
			{ name: "AWS", url: "https://aws.amazon.com" },
		];
		tools.forEach(({ name, url }) => {
			const link = screen.getByRole("link", { name: new RegExp(name) });
			expect(link).toHaveAttribute("href", url);
			expect(link).toBeInTheDocument();
		});
	});

	it("renders the GameEngines section with correct tools and links", () => {
		render(<GameEngines />);
		const engines = [
			{ name: "Godot", url: "https://godotengine.org/" },
			{ name: "Unity", url: "https://unity.com/" },
		];
		engines.forEach(({ name, url }) => {
			const link = screen.getByRole("link", { name: new RegExp(name) });
			expect(link).toHaveAttribute("href", url);
			expect(link).toBeInTheDocument();
		});
	});

	it("renders the Environment section with correct tools and links", () => {
		render(<Environment />);
		const environments = [
			{ name: "Vim", url: "https://www.vim.org/" },
			{ name: "Visual Studio Code", url: "https://code.visualstudio.com/" },
			{ name: "Debian", url: "https://www.debian.org/" },
			{ name: "Oh My Zsh", url: "https://ohmyz.sh/" },
		];
		environments.forEach(({ name, url }) => {
			const link = screen.getByRole("link", { name: new RegExp(name) });
			expect(link).toHaveAttribute("href", url);
			expect(link).toBeInTheDocument();
		});
	});

	it("renders the Productivity section with correct tools and links", () => {
		render(<Productivity />);
		const tools = [
			{ name: "Nextcloud", url: "https://nextcloud.com/" },
			{ name: "Obsidian", url: "https://obsidian.md/" },
			{ name: "Firefox", url: "https://www.mozilla.org/en-US/firefox/new/" },
			{ name: "Signal", url: "https://signal.org/" },
			{ name: "LibreOffice", url: "https://www.libreoffice.org/" },
		];
		tools.forEach(({ name, url }) => {
			const link = screen.getByRole("link", { name: new RegExp(name) });
			expect(link).toHaveAttribute("href", url);
			expect(link).toBeInTheDocument();
		});
	});

	it("matches snapshots for all sections", () => {
		expect(render(<GoTo />).container).toMatchSnapshot();
		expect(render(<AlsoUse />).container).toMatchSnapshot();
		expect(render(<GameEngines />).container).toMatchSnapshot();
		expect(render(<Environment />).container).toMatchSnapshot();
		expect(render(<Productivity />).container).toMatchSnapshot();
	});
});
