import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENTBRITE_URL } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "HBS Entrepreneurship Club" },
			{
				name: "description",
				content:
					"A Harvard Business School club for founders building scrappy, cash-flow-positive businesses. Home of the annual Entrepreneurship Conference.",
			},
			{ property: "og:title", content: "HBS Entrepreneurship Club" },
			{
				property: "og:description",
				content: "Founders taking the space between things.",
			},
		],
	}),
	component: Home,
});

function Home() {
	return (
		<>
			<section className="relative overflow-hidden">
				<div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-12">
					<div className="lg:col-span-7">
						<div className="eyebrow mb-5">Harvard Business School</div>
						<h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
							For founders who <em className="italic text-blue">take the space</em>
							<br />
							between things.
						</h1>
						<p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
							A club for builders working on businesses where scarcity is inherent — scrappy,
							resourceful, cash-flow-positive. We celebrate the craft of creating value out of very
							little, and we trade what we learn so every member has better odds.
						</p>
						<div className="mt-10 flex flex-wrap items-center gap-4">
							<a
								href={EVENTBRITE_URL}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep"
							>
								Conference · Nov 22, 2026 <span aria-hidden>→</span>
							</a>
							<Link
								to="/about"
								className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium transition hover:bg-accent"
							>
								Learn more about the club
							</Link>
						</div>
					</div>
					<aside className="lg:col-span-5">
						<div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
							<div className="eyebrow mb-3">Etymology</div>
							<p className="font-serif text-2xl leading-snug">
								<span className="text-blue">entre·prendre</span> — to{" "}
								<span className="underline decoration-blue/40 decoration-2 underline-offset-4">
									take
								</span>{" "}
								what lies{" "}
								<span className="underline decoration-blue/40 decoration-2 underline-offset-4">
									in between
								</span>
								.
							</p>
							<p className="mt-4 text-sm text-muted-foreground">
								Find the gap. Persevere there. Build value that didn't exist before.
							</p>
						</div>
						<div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
							<div className="eyebrow mb-3">Next event</div>
							<div className="font-serif text-xl">Entrepreneurship Conference</div>
							<div className="mt-2 font-mono text-sm text-blue">Sunday, November 22, 2026</div>
							<div className="mt-1 font-mono text-xs text-muted-foreground">
								Harvard Business School · Boston, MA
							</div>
							<p className="mt-3 text-sm text-muted-foreground">
								A full-day gathering for founders, operators, and investors who believe in building
								the scrappy way.
							</p>
							<a
								href={EVENTBRITE_URL}
								target="_blank"
								rel="noreferrer"
								className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue hover:underline"
							>
								Get tickets <span aria-hidden>→</span>
							</a>
						</div>
					</aside>
				</div>
			</section>

			<section className="border-t border-border bg-ink text-paper">
				<div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center">
					<div>
						<div className="eyebrow mb-3" style={{ color: "oklch(0.85 0.14 85)" }}>
							Join the club
						</div>
						<h2 className="font-serif text-3xl md:text-4xl">
							If you're shipping, charging, and figuring it out as you go — this is your room.
						</h2>
					</div>
					<Link
						to="/join"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep"
					>
						Join the club →
					</Link>
				</div>
			</section>
		</>
	);
}
