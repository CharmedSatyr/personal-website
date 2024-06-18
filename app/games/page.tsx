import dotenv from "dotenv";

import genPageMetadata from "@/app/seo";
import Image from "@/components/Image";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

dotenv.config();

export const metadata = genPageMetadata({ title: "Games" });

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

const Games = async () => {
	const gameMetadata = await getRecentGameMetadata();

	const display = gameMetadata.map(async (g) => {
		const a = await g;
		return (
			<li key={a.name} className="my-6 list-none">
				<Link
					href={`https://store.steampowered.com/app/${a.appid}`}
					className="flex"
				>
					<Image
						alt={a.name}
						width={150}
						className="mr-2 inline"
						height={0}
						src={a.image}
					/>
					{a.description}
				</Link>
			</li>
		);
	});

	return (
		<>
			<PageTitle>Games (Under Construction)</PageTitle>

			<p>I'm passionate about games as an interactive creative medium.</p>

			<p>
				I average one digital game per week and take notes on everything I play.
				I often enjoy games with strong narratives, exploration and survival
				mechanics, role-playing, or immersive sim elements. See{" "}
				<Link href="https://discoelysium.com/">Disco Elysium</Link>,
				<Link href="https://www.mobiusdigitalgames.com/outer-wilds.html">
					Outer Wilds
				</Link>
				, The Elder Scrolls and Fallout (heavily modded), Silent Hill 2,
				Resident Evil 7, Baldur's Gate 3...
			</p>

			<p>
				I run or participate in a few tabletop roleplaying sessions a
				month—games like{" "}
				<Link href="https://www.dndbeyond.com/">Dungeons & Dragons</Link>,{" "}
				<Link href="https://www.thearcanelibrary.com/pages/shadowdark">
					Shadowdark
				</Link>
				, or{" "}
				<Link href="https://www.chaosium.com/call-of-cthulhu-rpg/">
					Call of Cthulu
				</Link>
				.
			</p>

			<p>
				In 2023, I completed a Certificate in Game Design from the University of
				Washington. I've experimented with a few small games on{" "}
				<Link href="https://charmedsatyr.itch.io/">itch.io</Link> and am active
				in the <Link href="https://www.seattleindies.org/">Seattle Indies</Link>
				.
			</p>

			<p>
				Previously, I made over 200 gameplay and tutorials videos for a
				<Link href="https://www.youtube.com/user/wenwrendogaming">
					YouTube channel
				</Link>
				, and I've contributed to gaming communities like{" "}
				<Link href="https://www.youtube.com/watch?v=8Nckf8AeBig">
					Skyrim Book Club
				</Link>
				.{" "}
			</p>

			<h2 className="title">Recently Played on Steam</h2>
			<ul className="list list-disc">{display}</ul>
		</>
	);
};

export default Games;
