import dotenv from "dotenv";

import Image from "@/components/Image";
import Link from "@/components/Link";

dotenv.config();

interface RecentlyPlayedGame {
	appid: number;
	name: string;
}

interface RecentlyPlayed {
	response: {
		total_count: number;
		games: RecentlyPlayedGame[];
	};
}

const getRecentlyPlayed = async (): Promise<RecentlyPlayed> => {
	const url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?format=json&key=${process.env.STEAM_API_KEY}&steamid=${process.env.STEAM_USER_ID}`;

	const res = await fetch(url);

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

interface GameMetadata {
	[appid: string]: {
		success: boolean;
		data: {
			type: string;
			name: string;
			short_description: string;
			header_image: string;
		};
	};
}

const getGameMetadata = async (appid: string): Promise<GameMetadata> => {
	const res = await fetch(
		`https://store.steampowered.com/api/appdetails?appids=${appid}&key=${process.env.STEAM_API_KEY}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch metadata");
	}

	return res.json();
};

const getRecentGameMetadata = async () => {
	try {
		const data = await getRecentlyPlayed();
		const recentlyPlayed = data.response.games.map((g) => g.appid.toString());

		const recentGameMetadata = recentlyPlayed.map(async (appid: string) => {
			const metadata = await getGameMetadata(appid);

			const name: string = metadata[appid].data.name;
			const image: string = metadata[appid].data.header_image;
			const description: string = metadata[appid].data.short_description;

			return { appid, description, image, name };
		});

		return await Promise.all(recentGameMetadata);
	} catch (e) {
		return [];
	}
};

const RecentlyPlayed = async () => {
	const items = (await getRecentGameMetadata()).map((game) => {
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

	if (!items.length) {
		return null;
	}

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
