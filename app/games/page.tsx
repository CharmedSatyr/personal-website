import RecentlyPlayed from "@/app/games/RecentlyPlayed";
import genPageMetadata from "@/app/seo";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

export const metadata = genPageMetadata({ title: "Games" });

const Games = () => {
	return (
		<>
			<PageTitle>Games</PageTitle>

			<p>
				I'm passionate about games as interactive creative media, learning
				tools, and laboratories for understanding human behavior.
			</p>

			<h2 className="title">Involvement</h2>
			<p>
				In 2023, I completed a Certificate in Game Design from the University of
				Washington. I've developed a few experiments on{" "}
				<Link href="https://charmedsatyr.itch.io/">itch.io</Link> and have
				participated in four game jams. I am active in the{" "}
				<Link href="https://www.seattleindies.org/">Seattle Indies</Link>,{" "}
				<Link href="https://duckfeed.tv/">Duckfeed.tv</Link>, and{" "}
				<Link href="https://lexyslotd.com">modding</Link> communities.
			</p>

			<p>
				I average one digital game per week and take notes on everything I play.
				I often enjoy single-player digital games with strong narratives,
				exploration and survival mechanics, role-playing, turn-based tactics, or
				immersive sim elements.
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
				Years ago, I made over 200 gameplay and tutorial videos for{" "}
				<Link href="https://www.youtube.com/user/wenwrendogaming">YouTube</Link>{" "}
				and had a blast doing voice work for{" "}
				<Link href="https://www.youtube.com/watch?v=8Nckf8AeBig&t=31s">
					Skyrim Book Club
				</Link>
				.
			</p>

			<RecentlyPlayed />
		</>
	);
};

export default Games;
