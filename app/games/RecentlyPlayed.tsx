import dotenv from "dotenv";

import Image from "@/components/Image";
import Link from "@/components/Link";

dotenv.config();

async function getRecentlyPlayed() {
	const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?format=json&key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_USER_ID}`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

const getGameMetadata = async (appid: string) => {
	const res = await fetch(
		`https://store.steampowered.com/api/appdetails?appids=${appid}&key=${process.env.STEAM_API_KEY}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch metadata");
	}

	return res.json();
};

const getRecentGameMetadata = async () => {
	const data: { response: { games: { appid: string }[] } } =
		await getRecentlyPlayed();

	const recentlyPlayed: string[] = data.response.games.map((g) => g.appid);

	return recentlyPlayed.map(async (appid: string) => {
		const metadata = await getGameMetadata(appid);

		const name: string = metadata[appid].data.name;
		const image: string = metadata[appid].data.header_image;
		const description: string = metadata[appid].data.short_description;

		return { appid, description, image, name };
	});
};

const RecentlyPlayed = async () => {
	const gameMetadata = await getRecentGameMetadata();

	const items = gameMetadata.map(async (metadata) => {
		const game = await metadata;

		return (
			<li key={game.name} className="my-6 list-none">
				<Link
					href={`https://store.steampowered.com/app/${game.appid}`}
					className="flex flex-col items-center lg:flex-row"
				>
					<Image
						alt={game.name}
						width={400}
						className="inline object-contain lg:mr-2 lg:w-6/12"
						height={0}
						src={game.image}
					/>
					<p className="mb-0">{game.description}</p>
				</Link>
			</li>
		);
	});

	return (
		<div>
			<h2 className="title">Recently Played</h2>
			<aside className="italic">
				Data from the Steam API, but I play games elsewhere, too.
			</aside>

			<ul className="list list-disc">{items}</ul>
		</div>
	);
};

export default RecentlyPlayed;
