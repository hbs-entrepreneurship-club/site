import { createFileRoute } from "@tanstack/react-router";
import { EVENT_HUB_URL, EVENTBRITE_URL, PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/summit")({
	head: () => ({
		meta: [
			{ title: "Entrepreneurship Conference 2026 — HBS Entrepreneurship Club" },
			{
				name: "description",
				content: "Entrepreneurship Conference · November 22, 2026 · Harvard Business School.",
			},
			{ property: "og:title", content: "Entrepreneurship Conference 2026" },
			{
				property: "og:description",
				content: "November 22, 2026 at Harvard Business School.",
			},
		],
	}),
	component: Summit,
});

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
			/>

			<section>
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="grid max-w-xl gap-0">
						<Row label="Date" value="Sunday, November 22, 2026" />
						<Row label="Venue" value="Harvard Business School" />
						<Row label="City" value="Boston, MA" />
					</div>

					<div className="mt-12 flex flex-wrap gap-3">
						<a
							href={EVENTBRITE_URL}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
						>
							Get tickets →
						</a>
						<a
							href={EVENT_HUB_URL}
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded border border-border bg-card px-6 py-3 text-sm font-medium transition hover:border-crimson/40 hover:text-crimson"
						>
							HBS event page
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

function Row({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex justify-between gap-4 border-b border-border py-4 text-sm">
			<span className="font-medium uppercase tracking-[0.08em] text-muted-foreground">{label}</span>
			<span className="text-right font-medium">{value}</span>
		</div>
	);
}
