import SectionContainer from "components/SectionContainer";
import Link from "components/Link";

const Now = () => {
	return (
		<SectionContainer>
			<h1 className="mb-8 text-4xl font-bold text-indigo-600 dark:text-indigo-200 md:text-6xl">
				Now
			</h1>

			<aside className="mb-8 text-xl italic md:text-2xl">
				This is my <Link href="https://nownownow.com/about">Now</Link> page, last updated
				2024-05-16.
			</aside>

			<ol className="list-decimal text-xl leading-relaxed md:text-2xl">
				<li className="my-8">
					In January, my amazing partner Inga{" "}
					<span role="img" aria-label="heart">
						♥️
					</span>{" "}
					and I got married in an unplanned ceremony in Las Vegas.
				</li>
				<li className="my-8">
					I am looking for work as a software developer.{" "}
					<Link href="/contact">Send me a message</Link> if you think I might be right for a project
					or role you're hiring for.
				</li>
				<li className="my-8">
					I am writing an adventure module for{" "}
					<Link href="https://dnd.wizards.com/how-to-play">Dungeons & Dragons 5e</Link>. When it's
					done, I think it would be fun to publish it on the{" "}
					<Link href="https://www.dmsguild.com">Dungeon Master's Guild</Link>.{" "}
					<Link href="/contact">Get in touch</Link> if you want to help playtest once a draft is
					ready.
				</li>
				<li className="my-8">
					I have an idea for a digital game and some early prototypes built in{" "}
					<Link href="https://learn.unity.com">Unity</Link>.
				</li>
			</ol>
		</SectionContainer>
	);
};

export default Now;
