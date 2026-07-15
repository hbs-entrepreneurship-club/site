import { createFileRoute } from "@tanstack/react-router";
import { EVENT_HUB_URL, EVENTBRITE_URL, PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/summit")({
	head: () => ({
		meta: [
			{ title: "Entrepreneurship Conference 2026 — HBS Entrepreneurship Club" },
			{
				name: "description",
				content:
					"The HBS Entrepreneurship Conference returns November 22, 2026. A full-day gathering for founders, operators, and investors.",
			},
			{ property: "og:title", content: "Entrepreneurship Conference 2026" },
			{
				property: "og:description",
				content:
					"November 22, 2026 at Harvard Business School. Hosted by the HBS Entrepreneurship Club.",
			},
		],
	}),
	component: Summit,
});

const FAQ = [
	{
		q: "Who is it for?",
		a: "Current and aspiring founders, operators, and investors. Open to the public — HBS students and the broader Harvard community are especially welcome.",
	},
	{
		q: "Where is it?",
		a: "Harvard Business School campus, Boston. Specific rooms shared closer to the event.",
	},
	{
		q: "Where are the latest details?",
		a: "Eventbrite is the source of truth for speakers, schedule, pricing, and program changes.",
	},
];

function Summit() {
	return (
		<>
			<PageHeader
				eyebrow="Flagship Event"
				title={
					<>
						Entrepreneurship Conference
						<br />
						<span className="text-crimson">November 22, 2026</span>
					</>
				}
				lede="A full-day gathering for founders, operators, and investors at Harvard Business School."
			/>

			<section className="bg-card/40">
				<div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<div className="eyebrow mb-4">The basics</div>
						<div className="space-y-2 font-mono text-sm">
							<Row label="Date" value="Sunday, November 22, 2026" />
							<Row label="Venue" value="Harvard Business School" />
							<Row label="City" value="Boston, Massachusetts" />
							<Row label="Host" value="HBS Entrepreneurship Club" />
						</div>
					</div>
					<div className="lg:col-span-7">
						<p className="text-lg text-muted-foreground md:text-xl">
							Full programming, speakers, and tickets on Eventbrite.
						</p>
						<div className="mt-8 flex flex-wrap gap-3">
							<a
								href={EVENTBRITE_URL}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
							>
								Tickets & details on Eventbrite →
							</a>
							<a
								href={EVENT_HUB_URL}
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:bg-accent"
							>
								HBS event page
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-card/40">
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="eyebrow mb-4">FAQ</div>
					<h2 className="font-serif text-3xl md:text-4xl">A few quick answers.</h2>
					<dl className="mt-10 divide-y divide-border border-y border-border">
						{FAQ.map((item) => (
							<div key={item.q} className="grid gap-4 py-6 md:grid-cols-12">
								<dt className="font-serif text-xl md:col-span-5">{item.q}</dt>
								<dd className="text-muted-foreground md:col-span-7">{item.a}</dd>
							</div>
						))}
					</dl>
				</div>
			</section>

			<section className="border-t border-border bg-ink text-paper">
				<div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center">
					<div>
						<div className="eyebrow mb-3" style={{ color: "oklch(0.85 0.12 30)" }}>
							Save your seat
						</div>
						<h2 className="font-serif text-3xl md:text-4xl">
							Tickets and speaker list live on Eventbrite.
						</h2>
					</div>
					<a
						href={EVENTBRITE_URL}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
					>
						Get tickets →
					</a>
				</div>
			</section>
		</>
	);
}

function Row({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex justify-between gap-4 border-b border-dashed border-border py-2">
			<span className="text-muted-foreground">{label}</span>
			<span className="text-right">{value}</span>
		</div>
	);
}
