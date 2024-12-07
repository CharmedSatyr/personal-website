import {
	GameMetadataResponse,
	Props,
	RecentlyPlayedResponse,
} from "@/app/games/recently-played.types";
import Image from "@/components/image";
import Link from "@/components/link";
import { SteamApi } from "@/constants/api";

const getRecentlyPlayed = async (): Promise<RecentlyPlayedResponse> => {
	const url =
		SteamApi.recentlyPlayed +
		`?format=json&key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_USER_ID}`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

const getGameMetadata = async (
	appid: string,
): Promise<GameMetadataResponse> => {
	const res = await fetch(
		SteamApi.appDetails + `?appids=${appid}&key=${process.env.STEAM_API_KEY}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch metadata");
	}

	return res.json();
};

const getRecentGameMetadata = async (adds: string[]) => {
	try {
		const data = await getRecentlyPlayed();
		const recentlyPlayed = data.response.games.map((g) => g.appid.toString());

		const recentGameMetadata = [...adds, ...recentlyPlayed].map(
			async (appid: string) => {
				const metadata = await getGameMetadata(appid);

				const name: string = metadata[appid].data.name;
				const image: string = metadata[appid].data.header_image;
				const description: string = metadata[appid].data.short_description;

				return { appid, description, image, name };
			},
		);

		return await Promise.all(recentGameMetadata);
	} catch (e) {
		return [];
	}
};

const RecentlyPlayed = async (props: Props) => {
	const items = (await getRecentGameMetadata(props.adds)).map((game) => (
		<li key={game.name} className="my-6 list-none">
			<Link
				href={`https://store.steampowered.com/app/${game.appid}`}
				className="flex flex-col items-center lg:flex-row"
			>
				<Image
					alt={game.name}
					width={400}
					className="inline object-contain lg:w-6/12"
					height={400}
					src={game.image}
				/>
				<p className="mb-0 lg:ml-2 lg:w-6/12">
					<span className="hyperlink external">{game.name}</span>{" "}
					{game.description}
				</p>
			</Link>
		</li>
	));

	if (!items.length) {
		return null;
	}

	return (
		<div>
			<h2 className="title">Recently Played</h2>
			<aside className="italic">
				Titles I've dipped into within the past two weeks.
			</aside>

			<ul className="list list-disc">{items}</ul>
		</div>
	);
};

export default RecentlyPlayed;
