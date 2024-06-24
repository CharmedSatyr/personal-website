import RecentlyPlayed from "@/app/games/recently-played";
import {
	GameMetadataResponse,
	Props,
	RecentlyPlayedResponse,
} from "@/app/games/recently-played.types";
import { SteamApi } from "@/constants/api";
import { render, screen } from "@testing-library/react";

describe("recently-played", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	const defaultProps: Props = { adds: [] };

	const recentlyPlayedSuccess: RecentlyPlayedResponse = {
		response: { total_count: 1, games: [{ appid: 123, name: "Test Game" }] },
	};

	const gameMetadataSuccess: GameMetadataResponse = {
		"123": {
			success: true,
			data: {
				type: "game",
				name: "Test Game",
				short_description: "A game that exists in a test",
				header_image: "https://img.com/test",
			},
		},
	};

	it("should display recently played games on success", async () => {
		(fetch as jest.Mock)
			.mockResolvedValueOnce({
				ok: true,
				json: jest.fn().mockResolvedValueOnce(recentlyPlayedSuccess),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: jest.fn().mockResolvedValue(gameMetadataSuccess),
			});

		render(await RecentlyPlayed(defaultProps));

		expect(fetch).toHaveBeenCalledTimes(2);
		expect(fetch).toHaveBeenCalledWith(
			expect.stringContaining(SteamApi.recentlyPlayed),
		);
		expect(fetch).toHaveBeenCalledWith(
			expect.stringContaining(SteamApi.appDetails),
		);

		expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
		expect(screen.getByRole("list")).toBeInTheDocument();
		expect(screen.getByRole("img")).toBeInTheDocument();
		expect(screen.getByRole("paragraph")).toBeInTheDocument();
	});

	it("should display adds from props", async () => {
		const props: Props = { adds: ["321"] };

		const addMetadata = {
			"321": {
				success: true,
				data: {
					type: "game",
					name: "Another test Game",
					short_description: "Another game that exists in a test",
					header_image: "https://img.com/test2",
				},
			},
		};

		(fetch as jest.Mock)
			.mockResolvedValueOnce({
				ok: true,
				json: jest.fn().mockResolvedValueOnce(recentlyPlayedSuccess),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: jest.fn().mockResolvedValue(addMetadata),
			})
			.mockResolvedValueOnce({
				ok: true,
				json: jest.fn().mockResolvedValue(gameMetadataSuccess),
			});

		render(await RecentlyPlayed(props));

		expect(fetch).toHaveBeenCalledTimes(3);
		expect(fetch).toHaveBeenCalledWith(
			expect.stringContaining(SteamApi.recentlyPlayed),
		);
		expect(fetch).toHaveBeenCalledWith(
			expect.stringContaining(SteamApi.appDetails),
		);

		expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
		expect(screen.getByRole("list")).toBeInTheDocument();
		expect(screen.getAllByRole("img").length).toBe(2);
		expect(screen.getAllByRole("paragraph").length).toBe(2);
	});

	it("should render nothing if there are no recently played games", async () => {
		const recentlyPlayedEmpty: RecentlyPlayedResponse = {
			response: { total_count: 0, games: [] },
		};

		(fetch as jest.Mock).mockResolvedValueOnce({
			ok: true,
			json: jest.fn().mockResolvedValueOnce(recentlyPlayedEmpty),
		});

		const { container } = render(await RecentlyPlayed(defaultProps));

		expect(fetch).toHaveBeenCalledTimes(1);

		expect(container).toBeEmptyDOMElement();
	});

	it("should render nothing if `getRecentlyPlayed` fails", async () => {
		(fetch as jest.Mock).mockRejectedValueOnce({});

		const { container } = render(await RecentlyPlayed(defaultProps));

		expect(fetch).toHaveBeenCalledTimes(1);

		expect(container).toBeEmptyDOMElement();
	});

	it("should render nothing if `getRecentlyPlayed` response is malformed", async () => {
		(fetch as jest.Mock).mockResolvedValueOnce({ ok: false });

		const { container } = render(await RecentlyPlayed(defaultProps));

		expect(fetch).toHaveBeenCalledTimes(1);

		expect(container).toBeEmptyDOMElement();
	});

	it("should render nothing if `getGameMetadata` fails", async () => {
		(fetch as jest.Mock)
			.mockResolvedValueOnce({
				ok: true,
				json: jest.fn().mockResolvedValueOnce(recentlyPlayedSuccess),
			})
			.mockRejectedValueOnce({});

		const { container } = render(await RecentlyPlayed(defaultProps));

		expect(fetch).toHaveBeenCalledTimes(2);

		expect(container).toBeEmptyDOMElement();
	});

	it("should render nothing if `getGameMetadata` response is malformed", async () => {
		(fetch as jest.Mock)
			.mockResolvedValueOnce({
				ok: true,
				json: jest.fn().mockResolvedValueOnce(recentlyPlayedSuccess),
			})
			.mockResolvedValueOnce({ ok: false });

		const { container } = render(await RecentlyPlayed(defaultProps));

		expect(fetch).toHaveBeenCalledTimes(2);

		expect(container).toBeEmptyDOMElement();
	});
});
