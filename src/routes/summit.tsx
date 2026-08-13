import { createFileRoute } from "@tanstack/react-router";
import { EVENT_HUB_URL, EVENTBRITE_URL, PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/summit")({
	head: () => ({
		meta: [
			{ title: "Pitch Competition 2026 — HBS Entrepreneurship Club" },
			{
				name: "description",
				content:
					"2026 Pitch Competition · The Pitch Competition · November 22, 2026 · Klarman Hall, Harvard Business School.",
			},
			{ property: "og:title", content: "Pitch Competition 2026" },
			{
				property: "og:description",
				content:
					"A full day pitch competition for founders, operators, and investors to build, refine, and present the next great company.",
			},
		],
	}),
	component: Summit,
});

const SPONSOR_EMAILS = ["marshad@mba2027.hbs.edu", "slam@mba2027.hbs.edu", "cali@mba2027.hbs.edu"];

type Session = {
	time: string;
	title: string;
	details: string;
	track?: string;
};

type ProgramBlock = {
	n: string;
	name: string;
	arc: string;
	window: string;
	timeRange: string;
	sessions: Session[];
};

const BLOCKS: ProgramBlock[] = [
	{
		n: "01",
		name: "The Formation",
		arc: "Morning",
		window: "Building the Teams",
		timeRange: "8:00 AM – 10:00 AM",
		sessions: [
			{
				time: "8:00 AM",
				title: "Registration and Breakfast",
				details: "Open networking and breakfast.",
			},
			{
				time: "9:00 AM",
				title: "Opening Remarks & Rules",
				details: "Introduction to the pitch competition rules.",
			},
			{
				time: "9:30 AM",
				title: "Team Formation",
				details: "Icebreakers and matching founders with operators.",
			},
		],
	},
	{
		n: "02",
		name: "The Preparation",
		arc: "Late Morning",
		window: "Refining the Pitch",
		timeRange: "10:00 AM – 1:00 PM",
		sessions: [
			{
				time: "10:00 AM",
				title: "Business Model Workshops",
				details: "Mentor-led sessions on refining models.",
			},
			{
				time: "11:30 AM",
				title: "Pitch Practice",
				details: "Dry runs with early feedback from mentors.",
			},
			{ time: "12:30 PM", title: "Working Lunch", details: "Finalizing the deck and rehearsing." },
		],
	},
	{
		n: "03",
		name: "The Pitch",
		arc: "Afternoon",
		window: "Presenting to the Judges",
		timeRange: "1:00 PM – 4:00 PM",
		sessions: [
			{
				time: "1:00 PM",
				title: "Preliminary Pitches",
				details: "Teams pitch to rotating judging panels in breakout rooms.",
			},
			{
				time: "3:00 PM",
				title: "Finalist Selection",
				details: "Judges deliberate to select the top 5 teams.",
			},
		],
	},
	{
		n: "04",
		name: "The Reveal",
		arc: "Late Afternoon",
		window: "Awards and Closing",
		timeRange: "4:00 PM – 6:00 PM",
		sessions: [
			{
				time: "4:00 PM",
				title: "Final Presentations",
				details: "Top 5 teams present on the main stage.",
			},
			{
				time: "5:00 PM",
				title: "Awards Ceremony",
				details: "Winners announced, prizes distributed.",
			},
			{
				time: "5:30 PM",
				title: "Closing Reception",
				details: "Networking with judges and participants.",
			},
		],
	},
];

const STATS = [
	{ n: "04", label: "Competition Phases" },
	{ n: "10+", label: "Mentors & Judges" },
	{ n: "01", label: "Winning Pitch" },
];

const ARC = ["Formation", "Preparation", "The Pitch", "The Reveal"];

function Summit() {
	return (
		<>
			<PageHeader
				eyebrow="Flagship Event · 2026"
				title={
					<>
						Pitch Competition
						<br />
						<span className="text-crimson">November 22, 2026</span>
					</>
				}
				lede="A full day pitch competition for founders, operators, and investors to build, refine, and present the next great company."
			/>

			{/* Event facts + CTA */}
			<section>
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<div className="grid gap-12 lg:grid-cols-12 lg:items-start">
						<div className="lg:col-span-5">
							<div className="grid max-w-md gap-0">
								<Row label="Date" value="Sunday, November 22, 2026" />
								<Row label="Venue" value="Klarman Hall · Harvard Business School" />
								<Row label="City" value="Boston, MA" />
								<Row label="Hours" value="8:00 AM – 7:30 PM" />
							</div>
						</div>
						<div className="lg:col-span-7">
							<div className="section-label">The 2026 Theme</div>
							<div className="section-rule" />
							<h2 className="mt-6 font-serif text-3xl tracking-tight md:text-4xl">
								The Pitch Competition
							</h2>
							<p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
								Through rapid team formation, intensive mentor-led workshops, and high-stakes
								presentations, the day focuses entirely on building and pitching the next big idea
								to top investors.
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
					</div>
				</div>
			</section>

			{/* Day at a glance */}
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
					<p className="mt-4 text-sm text-muted-foreground">
						8:00 AM – 7:30 PM · Four program blocks across one full day
					</p>
				</div>
				<div className="mx-auto grid max-w-6xl gap-px border-t border-border bg-border md:grid-cols-3">
					{STATS.map((item) => (
						<div key={item.label} className="bg-background px-8 py-12 md:py-14">
							<div className="font-mono text-xs font-medium text-crimson">{item.n}</div>
							<div className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">
								{item.label}
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Full agenda */}
			<section className="border-t border-border" id="agenda">
				<div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
					<div className="section-label">Conference Agenda</div>
					<div className="section-rule" />
					<h2 className="mt-6 font-serif text-3xl tracking-tight md:text-4xl">The full program</h2>
					<p className="mt-4 max-w-2xl text-muted-foreground">
						Speaker lineup to be announced. Confirmed speakers will be featured across all tracks.
					</p>
				</div>

				{BLOCKS.map((block) => (
					<div key={block.n} className="border-t border-border">
						<div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
							{/* Block header */}
							<div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
								<div>
									<div className="flex items-baseline gap-3">
										<span className="font-mono text-xs font-medium text-crimson">
											{block.n} / 04
										</span>
										<span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
											{block.arc}
										</span>
									</div>
									<h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
										{block.name}
									</h3>
									<p className="mt-2 text-base text-muted-foreground">{block.window}</p>
								</div>
								<div className="font-mono text-sm font-medium text-crimson">{block.timeRange}</div>
							</div>

							{/* Sessions */}
							<ul className="mt-2 divide-y divide-border">
								{block.sessions.map((session) => (
									<li
										key={`${block.n}-${session.time}-${session.title}`}
										className="grid gap-3 py-7 sm:grid-cols-[7.5rem_1fr] sm:gap-8 md:grid-cols-[8.5rem_1fr]"
									>
										<div className="font-mono text-sm font-medium tabular-nums text-crimson">
											{session.time}
										</div>
										<div>
											{session.track ? (
												<div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
													{session.track}
												</div>
											) : null}
											<div className="font-serif text-xl tracking-tight md:text-2xl">
												{session.title}
											</div>
											<p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
												{session.details}
											</p>
										</div>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</section>

			{/* Sponsorship */}
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
					<div className="mt-12 overflow-x-auto">
						<table className="w-full text-left text-sm border-collapse">
							<thead>
								<tr className="border-b border-border bg-muted/50">
									<th className="p-4 font-semibold">Benefits</th>
									<th className="p-4 font-semibold text-center">
										Advocate
										<br />
										<span className="font-mono font-normal text-muted-foreground">$10,000</span>
									</th>
									<th className="p-4 font-semibold text-center">
										Catalyst
										<br />
										<span className="font-mono font-normal text-muted-foreground">$15,000</span>
									</th>
									<th className="p-4 font-semibold text-center text-crimson">
										Vanguard
										<br />
										<span className="font-mono font-normal">$20,000</span>
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-border">
								{[
									{ benefit: "Company branding on marketing material", tiers: [true, true, true] },
									{ benefit: "Recognition during opening remarks", tiers: [true, true, true] },
									{ benefit: "Complimentary conference tickets", tiers: [true, true, true] },
									{ benefit: "Logo feature during interim sessions", tiers: [true, true, true] },
									{ benefit: "Full day booth in main auditorium", tiers: [true, true, true] },
									{ benefit: "Dedicated social media post", tiers: [false, true, true] },
									{ benefit: "Access to delegate resume rolodex", tiers: [false, true, true] },
									{ benefit: "Logo on attendee name tag", tiers: [false, false, true] },
									{
										benefit: "Dedicated acknowledgement during breakout",
										tiers: [false, false, true],
									},
									{
										benefit: "Seat on judging panel / Propose pitch theme",
										tiers: [false, false, true],
									},
								].map((row) => (
									<tr key={row.benefit} className="hover:bg-muted/30">
										<td className="p-4">{row.benefit}</td>
										{row.tiers.map((hasBenefit, j) => (
											// biome-ignore lint/suspicious/noArrayIndexKey: Static array data
											<td key={`${row.benefit}-${j}`} className="p-4 text-center">
												{hasBenefit ? (
													<span className="text-crimson font-bold">✓</span>
												) : (
													<span className="text-muted-foreground/30">—</span>
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* Bottom CTA */}
			<section className="border-t border-border">
				<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
					<div>
						<div className="font-serif text-2xl tracking-tight md:text-3xl">
							Join us on November 22
						</div>
						<p className="mt-2 text-sm text-muted-foreground">
							Klarman Hall · Harvard Business School · Boston, MA
						</p>
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

function Row({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex justify-between gap-4 border-b border-border py-4 text-sm">
			<span className="font-medium uppercase tracking-[0.08em] text-muted-foreground">{label}</span>
			<span className="text-right font-medium">{value}</span>
		</div>
	);
}
