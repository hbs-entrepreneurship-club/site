import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { PageHeader, SPONSOR_EMAIL } from "@/components/site-chrome";
import { STATS } from "@/lib/speakers";

export const Route = createFileRoute("/sponsors")({
	head: () => ({
		meta: [
			{ title: "Sponsors — HBS Entrepreneurship Conference 2026" },
			{
				name: "description",
				content:
					"Partner with the Annual Entrepreneurship Conference at Harvard Business School. Sponsor lineup coming soon — reach the conference chairs for sponsorship inquiries.",
			},
			{ property: "og:title", content: "Sponsors — HBS Entrepreneurship Conference 2026" },
			{
				property: "og:description",
				content:
					"Partner with the Annual Entrepreneurship Conference at Harvard Business School. Sponsor lineup coming soon — reach the conference chairs for sponsorship inquiries.",
			},
		],
	}),
	component: Sponsors,
});

const TIERS = [
	{ name: "Advocate", price: "$10,000", featured: false },
	{ name: "Catalyst", price: "$15,000", featured: false },
	{ name: "Vanguard", price: "$20,000", featured: true },
] as const;

const BENEFITS: { label: string; included: [boolean, boolean, boolean] }[] = [
	{ label: "Company branding on marketing material", included: [true, true, true] },
	{ label: "Recognition during opening remarks", included: [true, true, true] },
	{ label: "Complimentary conference tickets", included: [true, true, true] },
	{ label: "Logo feature during interim sessions", included: [true, true, true] },
	{ label: "Full day booth in main auditorium", included: [true, true, true] },
	{ label: "Dedicated social media post", included: [false, true, true] },
	{ label: "Access to delegate resume rolodex", included: [false, true, true] },
	{ label: "Logo on attendee name tag", included: [false, false, true] },
	{ label: "Dedicated acknowledgement during breakout sessions", included: [false, false, true] },
	{ label: "Office hours / panel with founders", included: [false, false, true] },
	{ label: "Sector exclusivity", included: [false, false, true] },
];

function Cell({ included }: { included: boolean }) {
	return included ? (
		<span className="text-2xl leading-none font-bold text-crimson" role="img" aria-label="Included">
			✓
		</span>
	) : (
		<span className="text-background/30" role="img" aria-label="Not included">
			—
		</span>
	);
}

function Sponsors() {
	return (
		<>
			<PageHeader
				eyebrow="Sponsors"
				title="Coming soon"
				lede="Our 2026 partner lineup will be announced here shortly."
			/>

			<section className="bg-foreground text-background">
				<div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
					<p className="text-xs font-bold tracking-[0.3em] text-crimson uppercase">
						Partner with us
					</p>
					<h2 className="mt-3 font-display text-5xl leading-none uppercase sm:text-6xl">
						Put your brand
						<br />
						in the room
					</h2>
					<ul className="mt-8 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
						{STATS.map((stat) => (
							<li key={stat.label}>
								<p className="font-display text-4xl">{stat.value}</p>
								<p className="text-xs font-bold tracking-wider text-background/60 uppercase">
									{stat.label}
								</p>
							</li>
						))}
					</ul>

					<div className="mt-16">
						<p className="text-xs font-bold tracking-[0.3em] text-crimson uppercase">
							Sponsorship packages
						</p>
						<h3 className="mt-3 font-display text-4xl leading-none uppercase sm:text-5xl">
							Three levels of partnership
						</h3>
						<div className="mt-8 overflow-x-auto">
							<table className="w-full min-w-[640px] border-collapse text-left">
								<thead>
									<tr>
										<th className="border-b-2 border-background/20 pr-4 pb-4 text-xs font-bold tracking-[0.25em] text-background/60 uppercase">
											Benefit
										</th>
										{TIERS.map((tier) => (
											<th
												key={tier.name}
												className={`border-b-2 border-background/20 px-3 pb-4 text-center ${tier.featured ? "text-crimson" : ""}`}
											>
												<p className="text-xs font-bold tracking-[0.25em] uppercase">{tier.name}</p>
												<p className="mt-1 font-display text-3xl sm:text-4xl">{tier.price}</p>
											</th>
										))}
									</tr>
								</thead>
								<tbody>
									{BENEFITS.map((row) => (
										<tr key={row.label} className="border-b border-background/10">
											<td className="py-3.5 pr-4 text-sm sm:text-base">{row.label}</td>
											{row.included.map((included, index) => (
												<td key={TIERS[index].name} className="px-3 py-3.5 text-center">
													<Cell included={included} />
												</td>
											))}
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					<div className="mt-16 rounded-lg border-2 border-crimson/30 bg-crimson/5 p-6 sm:p-10">
						<div className="flex items-center gap-4">
							<span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-crimson text-foreground">
								<Mail className="h-7 w-7" strokeWidth={2.25} />
							</span>
							<h3 className="font-display text-4xl leading-none text-crimson uppercase sm:text-6xl">
								Sponsorship inquiries
							</h3>
						</div>
						<div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
							<img
								src="/people/maha.jpeg"
								alt="Maha Arshad"
								className="h-32 w-32 shrink-0 rounded-full object-cover ring-4 ring-crimson/30"
							/>
							<div>
								<p className="font-display text-3xl leading-none uppercase sm:text-4xl">
									Maha Arshad
								</p>
								<p className="mt-1.5 text-base font-semibold text-background/70">
									Conference Co-Chair and CFO
								</p>
								<a
									href={`mailto:${SPONSOR_EMAIL}?subject=Entrepreneurship%20Conference%202026%20Sponsorship`}
									className="mt-4 inline-flex items-center gap-2 text-xl font-bold underline underline-offset-4 hover:text-crimson sm:text-2xl"
								>
									<Mail className="h-6 w-6" />
									{SPONSOR_EMAIL}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
