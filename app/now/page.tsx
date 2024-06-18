import genPageMetadata from "@/app/seo";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";

export const metadata = genPageMetadata({ title: "Now" });

const Now = () => {
	return (
		<>
			<PageTitle>Now</PageTitle>

			<aside className="italic">
				This is my <Link href="https://nownownow.com/about">Now</Link> page.
			</aside>

			<ol className="list list-disc">
				<li className="mb-4 marker:animate-pulse">
					I am looking for work as a software developer.{" "}
					<Link href="/contact">Send me a message</Link> if you think I might be
					right for a project or role you're hiring for.
				</li>

				<li className="mb-4">
					In January, my amazing partner Inga{" "}
					<span role="img" aria-label="heart">
						♥️
					</span>{" "}
					and I got married in an unplanned ceremony in Las Vegas.
				</li>

				<li className="mb-4">
					Inga and I spent summer 2023 in Prague and are looking forward to
					attending the Paris 2024 Summer Olympics.
				</li>

				<li className="mb-4">
					I am writing an adventure module for{" "}
					<Link href="https://dnd.wizards.com/how-to-play">
						Dungeons & Dragons 5e
					</Link>{" "}
					and have some early prototypes for a digital game about shadows built
					in <Link href="https://learn.unity.com">Unity</Link>.
				</li>
			</ol>
		</>
	);
};

export default Now;
