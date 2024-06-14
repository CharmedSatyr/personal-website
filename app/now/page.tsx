import genPageMetadata from "@/app/seo";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

export const metadata = genPageMetadata({ title: "Now" });

const Now = () => {
	return (
		<>
			<PageTitle title="Now" />

			<aside className="italic">
				This is my <Link href="https://nownownow.com/about">Now</Link> page.
			</aside>

			<ol className="list-decimal">
				<li>
					In January, my amazing partner Inga{" "}
					<span role="img" aria-label="heart">
						♥️
					</span>{" "}
					and I got married in an unplanned ceremony in Las Vegas.
				</li>
				<li>
					I am looking for work as a software developer.{" "}
					<Link href="/contact">Send me a message</Link> if you think I might be
					right for a project or role you're hiring for.
				</li>
				<li>
					I am writing an adventure module for{" "}
					<Link href="https://dnd.wizards.com/how-to-play">
						Dungeons & Dragons 5e
					</Link>
					.
				</li>
				<li>
					I have an idea for a digital game and some early prototypes built in{" "}
					<Link href="https://learn.unity.com">Unity</Link>.
				</li>
			</ol>
		</>
	);
};

export default Now;
