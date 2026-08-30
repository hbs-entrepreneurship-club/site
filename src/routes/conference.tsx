import { createFileRoute } from "@tanstack/react-router";
import { EVENT_HUB_URL, EVENTBRITE_URL, PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/conference")({
	head: () => ({
		meta: [
			{ title: "Entrepreneurship Conference 2026 — HBS Entrepreneurship Club" },
			{
				name: "description",
				content:
					"2026 Entrepreneurship Conference · From Ideas to Institutions · November 22, 2026 · Klarman Hall, Harvard Business School.",
			},
			{ property: "og:title", content: "Entrepreneurship Conference 2026" },
			{
				property: "og:description",
				content:
					"A full day for founders, operators, and investors. November 22, 2026 at Klarman Hall, Harvard Business School.",
			},
		],
	}),
	component: Conference,
});

const SPONSOR_EMAILS = [
	"marshad@mba2027.hbs.edu",
	"slam@mba2027.hbs.edu",
	"cali@mba2027.hbs.edu",
];

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
		name: "The Spark",
		arc: "Morning",
		window: "Recognizing the Opportunity",
		timeRange: "8:00 AM – 1:00 PM",
		sessions: [
			{
				time: "8:00 AM",
				title: "Registration and Breakfast",
				details: "Open networking. Sponsor tables active. Conference program distributed.",
			},
			{
				time: "9:00 AM",
				title: "Keynote 1 — From Zero to One: The First Bold Decision",
				details:
					"A fireside conversation with a founder at the frontier of AI on the moment they committed to building, and what it took to turn a technical insight into a real company.",
			},
			{
				time: "10:05 AM",
				title: "Seeing the Gap",
				details:
					"Pattern recognition, contrarian thinking, and what separates a real insight from a bad idea.",
				track: "Ideation and Early Stage",
			},
			{
				time: "10:05 AM",
				title: "The VC Lens: What Gets Funded in 2026",
				details:
					"Leading investors on where capital is going, and what founders misunderstand about how VCs make decisions.",
				track: "Fundraising and Capital",
			},
			{
				time: "10:05 AM",
				title: "Building with AI: The New Software Stack",
				details:
					"How AI-native tools are changing what founders can build, how fast, and with how few people.",
				track: "Technology and AI",
			},
			{
				time: "12:00 PM",
				title: "Networking Lunch — Seated by Track",
				details: "Attendees seated by interest track with structured conversation prompts.",
			},
			{
				time: "12:00 PM",
				title: "Co-founder Matching Workshop",
				details: "Structured speed introductions for attendees seeking co-founders.",
			},
		],
	},
	{
		n: "02",
		name: "The Build",
		arc: "Late Morning",
		window: "From Idea to Traction",
		timeRange: "1:00 PM – 3:00 PM",
		sessions: [
			{
				time: "1:00 PM",
				title: "Keynote 2 — The Pivot, the Near-Death, the Second Wind",
				details:
					"A candid fireside with a founder who has built through real adversity, and why the most important lessons rarely come from the highlight reel.",
			},
			{
				time: "2:00 PM",
				title: "The First Hire, the First Sale, the First Dollar",
				details:
					"Founders on the unglamorous realities of getting to product-market fit, and what nearly killed the company before they figured it out.",
				track: "Operations and GTM",
			},
			{
				time: "2:00 PM",
				title: "Deep Tech and Hard Problems",
				details:
					"Founders in robotics, climate technology, biotech, and defense on building capital-intensive, long-horizon companies.",
				track: "Deep Tech and Climate",
			},
			{
				time: "2:00 PM",
				title: "Leadership at Scale: What Changes When You Grow",
				details:
					"The hardest leadership transitions, from 10 to 100 people, and how the best leaders navigated the shift.",
				track: "Leadership and Culture",
			},
			{
				time: "2:50 PM",
				title: "Afternoon Break and Sponsor Expo",
				details: "Open networking. Sponsor tables and recruiting booths active.",
			},
		],
	},
	{
		n: "03",
		name: "The Scale",
		arc: "Afternoon",
		window: "Building for Growth",
		timeRange: "3:10 PM – 5:00 PM",
		sessions: [
			{
				time: "3:10 PM",
				title: "Go-to-Market: Cracking the Revenue Code",
				details:
					"When to build a sales team and when to stay product-led, and what founders who cracked GTM would change.",
				track: "Sales and GTM",
			},
			{
				time: "3:10 PM",
				title: "Consumer Brands: Building Companies People Love",
				details:
					"How the best consumer founders built brands with real staying power in a crowded market.",
				track: "Consumer and Brand",
			},
			{
				time: "3:10 PM",
				title: "Entrepreneurship for Impact: Beyond Profit",
				details:
					"Founders and investors pursuing mission alongside scale, and where the models actually work.",
				track: "Social Impact",
			},
			{
				time: "4:00 PM",
				title: "Legal and Financial Foundations",
				details:
					"Cap tables, SAFEs, board composition, and the decisions that are easy to get wrong early and very hard to undo later.",
				track: "Finance and Legal",
			},
			{
				time: "4:00 PM",
				title: "Launch After HBS: Your First Company",
				details:
					"HBS alumni who left consulting, finance, or Big Tech to build, and what the network actually gave them.",
				track: "HBS Community",
			},
		],
	},
	{
		n: "04",
		name: "The Institution",
		arc: "Late Afternoon",
		window: "From Company to Institution",
		timeRange: "5:00 PM – 7:30 PM",
		sessions: [
			{
				time: "5:00 PM",
				title: "What Endures: Building Companies That Last a Generation",
				details:
					"Founders and investors on what separates companies with real staying power from those that fade: culture, governance, and mission clarity.",
				track: "Institution Building",
			},
			{
				time: "5:50 PM",
				title: "Closing Keynote — From Ideas to Institutions",
				details:
					"A founder or CEO who has built something that endures, on what they would tell this room about the decade ahead. Not a victory lap. A challenge.",
			},
			{
				time: "6:45 PM",
				title: "Closing Reception",
				details: "Open networking with speakers, sponsors, and all attendees. Drinks and light bites.",
			},
		],
	},
];

const STATS = [
	{ n: "04", label: "Program Blocks" },
	{ n: "15", label: "Panels and Keynotes" },
	{ n: "01", label: "Full Day of Building" },
];

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
								From Ideas to Institutions
							</h2>
							<p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
								Through keynote conversations and panel discussions, the day traces the full arc of
								company building—from the earliest spark of an idea to the discipline it takes to
								build something that endures.
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
							<div className="mt-3 font-serif text-2xl tracking-tight md:text-3xl">{item.label}</div>
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
							<h2 className="mt-6 font-serif text-3xl tracking-tight">Partner with the conference</h2>
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

			{/* Bottom CTA */}
			<section className="border-t border-border">
				<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
					<div>
						<div className="font-serif text-2xl tracking-tight md:text-3xl">Join us on November 22</div>
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
