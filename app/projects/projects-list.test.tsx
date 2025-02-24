import { promises as fs } from "fs";
import matter from "gray-matter";
import path from "path";

import ProjectsList, {
	ProjectsListFallback,
} from "@/app/projects/projects-list";
import { render, screen } from "@testing-library/react";

jest.mock("fs", () => ({
	promises: {
		readdir: jest.fn(),
		readFile: jest.fn(),
	},
}));

jest.mock("gray-matter", () => jest.fn());

jest.mock("next-mdx-remote/rsc", () => ({
	MDXRemote: ({ source }) => <div>{source}</div>,
}));

describe("ProjectsList", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it("renders the project list correctly", async () => {
		const mockFiles = ["project1.mdx", "project2.mdx"];
		const mockProjectData = [
			{
				data: {
					date: "2023-10-01",
					repo: "https://github.com/user/repo1",
					tags: ["React", "Next.js"],
					title: "Project One",
					url: "https://project-one.com",
				},
				content: "Project One Content",
			},
			{
				data: {
					date: "2023-09-15",
					repo: "https://github.com/user/repo2",
					tags: ["Unity", "FMOD"],
					title: "Project Two",
					url: "https://project-two.com",
				},
				content: "Project Two Content",
			},
		];

		(fs.readdir as jest.Mock).mockResolvedValue(mockFiles);
		(fs.readFile as jest.Mock).mockImplementation(async (filePath) => {
			const fileName = path.basename(filePath);
			const index = mockFiles.indexOf(fileName);
			return index !== -1 ? JSON.stringify(mockProjectData[index]) : "";
		});
		(matter as unknown as jest.Mock).mockImplementation((content) => {
			return JSON.parse(content);
		});

		render(await ProjectsList());

		expect(screen.getByText("Project One")).toBeInTheDocument();
		expect(screen.getByText("Project Two")).toBeInTheDocument();
		expect(screen.getByText("React")).toBeInTheDocument();
		expect(screen.getByText("Next.js")).toBeInTheDocument();
		expect(screen.getByText("Unity")).toBeInTheDocument();
		expect(screen.getByText("FMOD")).toBeInTheDocument();
	});

	it("sorts projects by date in descending order", async () => {
		const mockFiles = [
			"project1.mdx",
			"project2a.mdx",
			"project2b.mdx",
			"project3.mdx",
			"current-project.mdx",
		];
		const mockProjectData = [
			{
				data: {
					date: "January 10, 2025",
					repo: "https://github.com/user/repo3",
					tags: [],
					title: "Project Three",
				},
				content: "Content Three",
			},
			{
				data: {
					date: "2023-10-01",
					repo: "https://github.com/user/repo1",
					tags: [],
					title: "Project One",
				},
				content: "Content One",
			},
			{
				data: {
					date: "2024-09-15",
					repo: "https://github.com/user/repo2a",
					tags: [],
					title: "Project Two A",
				},
				content: "Content Two A",
			},
			{
				data: {
					date: "2024-09-15",
					repo: "https://github.com/user/repo2b",
					tags: [],
					title: "Project Two B",
				},
				content: "Content Two B",
			},
			{
				data: {
					date: "In Development",
					repo: "https://github.com/user/repocurrent",
					tags: [],
					title: "Current Project",
				},
				content: "Content Current",
			},
		];

		(fs.readdir as jest.Mock).mockResolvedValue(mockFiles);
		(fs.readFile as jest.Mock).mockImplementation(async (filePath) => {
			const fileName = path.basename(filePath);
			const index = mockFiles.indexOf(fileName);
			return index !== -1 ? JSON.stringify(mockProjectData[index]) : "";
		});
		(matter as unknown as jest.Mock).mockImplementation((content) => {
			return JSON.parse(content);
		});

		render(await ProjectsList());

		const sortedTitles = screen
			.getAllByRole("heading", { level: 3 })
			.map((el) => el.textContent);
		expect(sortedTitles).toEqual([
			"Current Project",
			"Project Three",
			"Project Two A",
			"Project Two B",
			"Project One",
		]);
	});

	it("should render the expected fallback", () => {
		expect(render(<ProjectsListFallback />).container).toMatchSnapshot();
	});
});
