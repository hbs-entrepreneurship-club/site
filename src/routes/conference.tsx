import { createFileRoute } from "@tanstack/react-router";
import { EVENT_HUB_URL, EVENTBRITE_URL, PageHeader } from "@/components/site-chrome";
import { CONFIRMED_SPEAKERS } from "@/lib/conference-itinerary";

export const Route = createFileRoute("/conference")({
	head: () => ({
		meta: [
			{ title: "Entrepreneurship Conference 2026 — HBS Entrepreneurship Club" },
			{
				name: "description",
				content:
					"2026 Entrepreneurship Conference · From Ideas to Institutions · November 22, 2026 · Klarman Hall, Aldrich Hall, and Batten Hall, Harvard Business School.",
			},
			{ property: "og:title", content: "Entrepreneurship Conference 2026" },
			{
				property: "og:description",
				content:
					"A full day for founders, operators, and investors. November 22, 2026 at Harvard Business School.",
			},
		],
	}),
	component: Conference,
});

const SPONSOR_EMAILS = ["marshad@mba2027.hbs.edu", "slam@mba2027.hbs.edu", "cali@mba2027.hbs.edu"];

const ARC = ["The Spark", "The Build", "The Scale", "The Institution"];

function Conference() {
	return (
		<>
			<PageHeader
				eyebrow="Flagship Event · 2026"
				title={
					<>
						Entrepreneurship Conference
						<br />
						<span className="text-crimson">November 22, 2026</span>
					</>
				}
				lede="A full day gathering for founders, operators, and investors who believe the best companies are still being built."
			/>

			<section>
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<div className="grid gap-12 lg:grid-cols-12 lg:items-start">
						<div className="lg:col-span-5">
							<div className="grid max-w-md gap-0">
								<Row label="Date" value="Sunday, November 22, 2026" />
								<Row label="Campus" value="Harvard Business School" />
								<Row label="City" value="Boston, MA" />
								<Row label="Hours" value="8:00 AM – 7:30 PM" />
							</div>
						</div>
						<div className="lg:col-span-7">
							<div className="section-label">The 2026 Theme</div>
							<div className="section-rule" />
							<h2 className="mt-6 font-serif text-3xl tracking-tight md:text-4xl">
								From Ideas to Institutions
							</h2>
							<p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
								The day traces company building from the first insight to the discipline it takes to
								endure.
							</p>
							<div className="mt-10 flex flex-wrap gap-3">
								<a
									href={EVENTBRITE_URL}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
								>
									Get tickets →
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-border">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<div className="section-label">The Day at a Glance</div>
					<div className="section-rule" />
					<p className="mt-6 font-serif text-2xl tracking-tight md:text-3xl">
						{ARC.map((step, i) => (
							<span key={step}>
								{i > 0 ? (
									<span className="mx-2 text-muted-foreground/50 md:mx-3" aria-hidden>
										→
									</span>
								) : null}
								<span className={i === 0 ? "text-crimson" : undefined}>{step}</span>
							</span>
						))}
					</p>
					<p className="mt-4 text-sm text-muted-foreground">8:00 AM – 7:30 PM</p>
				</div>
			</section>

			<section className="border-t border-border bg-card" id="speakers">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<div className="section-label">Speakers</div>
					<div className="section-rule" />
					<h2 className="mt-6 font-serif text-3xl tracking-tight md:text-4xl">On the program</h2>
					<ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{CONFIRMED_SPEAKERS.map((speaker) => (
							<li key={speaker.name} className="conf-card overflow-hidden">
								{speaker.image ? (
									<img
										src={speaker.image}
										alt={speaker.name}
										className="aspect-square w-full object-cover object-[center_20%]"
									/>
								) : null}
								<div className="px-5 py-4">
									<div className="font-serif text-xl tracking-tight">{speaker.name}</div>
									<div className="mt-2 flex items-center gap-2">
										{speaker.logo ? (
											<img
												src={speaker.logo}
												alt=""
												className="h-5 w-5 rounded-sm object-contain"
											/>
										) : null}
										<div className="text-sm text-muted-foreground">
											{speaker.company ?? speaker.role}
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className="border-t border-border bg-card">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<div className="grid gap-10 lg:grid-cols-12">
						<div className="lg:col-span-5">
							<div className="section-label">Sponsorship</div>
							<div className="section-rule" />
							<h2 className="mt-6 font-serif text-3xl tracking-tight">
								Partner with the conference
							</h2>
						</div>
						<div className="lg:col-span-7">
							<p className="text-base leading-relaxed text-muted-foreground md:text-lg">
								For sponsorship inquiries, reach the conference chairs:
							</p>
							<ul className="mt-6 space-y-2">
								{SPONSOR_EMAILS.map((email) => (
									<li key={email}>
										<a
											href={`mailto:${email}?subject=Entrepreneurship%20Conference%202026%20Sponsorship`}
											className="font-mono text-sm text-crimson transition hover:text-crimson-deep"
										>
											{email}
										</a>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="border-t border-border">
				<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
					<div>
						<div className="font-serif text-2xl tracking-tight md:text-3xl">
							Join us on November 22
						</div>
						<p className="mt-2 text-sm text-muted-foreground">
							Harvard Business School · Boston, MA
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
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
