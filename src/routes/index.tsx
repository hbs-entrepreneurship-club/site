import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENTBRITE_URL } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "HBS Entrepreneurship Club" },
			{
				name: "description",
				content:
					"The Entrepreneurship Club at Harvard Business School. Home of the annual Entrepreneurship Conference.",
			},
			{ property: "og:title", content: "HBS Entrepreneurship Club" },
			{
				property: "og:description",
				content: "Founders at Harvard Business School.",
			},
		],
	}),
	component: Home,
});

function Home() {
	return (
		<>
			<section>
				<div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
					<div className="accent-bar max-w-4xl">
						<div className="eyebrow mb-8">Harvard Business School</div>
						<h1 className="font-serif text-5xl font-medium tracking-tight md:text-6xl lg:text-[5rem] lg:leading-[1.05]">
							Founders taking the space between things.
						</h1>
						<div className="mt-12 flex flex-wrap items-center gap-3">
							<a
								href={EVENTBRITE_URL}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
							>
								Conference · Nov 22 <span aria-hidden>→</span>
							</a>
							<Link
								to="/join"
								className="inline-flex items-center gap-2 rounded border border-border bg-card px-6 py-3 text-sm font-medium transition hover:border-crimson/40 hover:text-crimson"
							>
								Join the club
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-border">
				<div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3">
					{[
						{ n: "01", label: "Community" },
						{ n: "02", label: "Conference" },
						{ n: "03", label: "Network" },
					].map((item) => (
						<div key={item.n} className="bg-background px-8 py-14">
							<div className="font-mono text-xs font-medium text-crimson">{item.n}</div>
							<div className="mt-4 font-serif text-3xl tracking-tight">{item.label}</div>
						</div>
					))}
				</div>
			</section>

			<section className="border-t border-border bg-card">
				<div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 px-6 py-16 md:flex-row md:items-end">
					<div>
						<div className="eyebrow mb-4">Next event</div>
						<div className="font-serif text-3xl tracking-tight md:text-4xl">
							Entrepreneurship Conference
						</div>
						<div className="mt-3 text-sm font-semibold text-crimson">November 22, 2026</div>
						<div className="mt-1 text-sm text-muted-foreground">Harvard Business School</div>
					</div>
					<a
						href={EVENTBRITE_URL}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
					>
						Get tickets →
					</a>
				</div>
			</section>
		</>
	);
}
