import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";
import { initials, leadership, type Person } from "@/lib/people";

export const Route = createFileRoute("/people")({
	head: () => ({
		meta: [
			{ title: "People — HBS Entrepreneurship Club" },
			{
				name: "description",
				content: "Meet the officers and conference chairs running the HBS Entrepreneurship Club.",
			},
			{ property: "og:title", content: "People — HBS Entrepreneurship Club" },
			{
				property: "og:description",
				content: "The student officers and chairs behind the club.",
			},
		],
	}),
	component: People,
});

const ROLE_NOTES: Record<string, string> = {
	Officers:
		"Run the club end to end — strategy, membership, partnerships, and the calendar. Your first point of contact for anything club-related.",
	"Conference Chairs":
		"Own the annual Entrepreneurship Conference: programming, speakers, sponsors, logistics, and the on-the-day experience.",
};

function People() {
	return (
		<>
			<PageHeader
				eyebrow="People"
				title={<>The team behind the club.</>}
				lede="A small student team runs the club each year, with a wider bench of members organizing events, programming the Conference, and keeping the door open for new founders. The 2026–2027 leadership is below."
			/>

			<section>
				<div className="mx-auto max-w-6xl px-6 py-20 space-y-16">
					{leadership.map((group) => (
						<div key={group.title}>
							<div className="mb-8 grid gap-6 md:grid-cols-12 md:items-end">
								<div className="md:col-span-4">
									<h2 className="font-mono text-xs uppercase tracking-[0.2em] text-crimson">
										{group.title}
									</h2>
									<div className="mt-3 h-px w-16 bg-crimson" />
								</div>
								{ROLE_NOTES[group.title] ? (
									<p className="text-muted-foreground md:col-span-8">{ROLE_NOTES[group.title]}</p>
								) : null}
							</div>
							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
								{group.people.map((p) => (
									<PersonCard key={p.name} person={p} />
								))}
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="border-t border-border bg-card/40">
				<div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<div className="eyebrow mb-3">Get involved</div>
						<h2 className="font-serif text-3xl md:text-4xl">Want to help run the club?</h2>
					</div>
					<div className="lg:col-span-7 text-lg text-muted-foreground">
						<p>
							We bring on members each term to help with the Conference, founder dinners, the
							resource library, and programming. If you want a role, tell us what you’d like to own
							and we’ll find a place for you.
						</p>
						<p className="mt-4">Email the officers and mention which group you’d like to join.</p>
					</div>
				</div>
			</section>
		</>
	);
}

function PersonCard({ person }: { person: Person }) {
	const inner = (
		<div className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-crimson/60 hover:shadow-md">
			<div className="flex h-28 w-28 items-center justify-center rounded-full bg-crimson/10 font-serif text-4xl font-semibold text-crimson ring-2 ring-crimson/20">
				{person.image ? (
					<img
						src={person.image}
						alt={person.name}
						className="h-full w-full rounded-full object-cover"
					/>
				) : (
					initials(person.name)
				)}
			</div>
			<div>
				<div className="font-serif text-xl leading-tight">{person.name}</div>
				<div className="mt-1 font-mono text-xs uppercase tracking-widest text-crimson">
					{person.role}
				</div>
			</div>
			{person.bio ? (
				<p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
			) : null}
			{person.linkedin ? (
				<div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-crimson opacity-0 transition group-hover:opacity-100">
					<svg
						className="h-3.5 w-3.5"
						fill="currentColor"
						viewBox="0 0 24 24"
						aria-label="LinkedIn"
					>
						<title>LinkedIn</title>
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
					LinkedIn →
				</div>
			) : (
				<div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
					LinkedIn — coming soon
				</div>
			)}
		</div>
	);
	if (person.linkedin) {
		return (
			<a href={person.linkedin} target="_blank" rel="noreferrer" className="block h-full">
				{inner}
			</a>
		);
	}
	return inner;
}
