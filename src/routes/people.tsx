import { createFileRoute } from "@tanstack/react-router";
import { initials, leadership, type Person } from "@/lib/people";

export const Route = createFileRoute("/people")({
	head: () => ({
		meta: [
			{ title: "People — HBS Entrepreneurship Club" },
			{
				name: "description",
				content: "Leadership of the HBS Entrepreneurship Club.",
			},
			{ property: "og:title", content: "People — HBS Entrepreneurship Club" },
			{
				property: "og:description",
				content: "The team behind the club.",
			},
		],
	}),
	component: People,
});

function People() {
	return (
		<section>
			<div className="mx-auto max-w-6xl space-y-20 px-6 py-20">
				{leadership.map((group) => (
					<div key={group.title}>
						<div className="mb-10">
							<div className="section-label">{group.title}</div>
							<div className="section-rule" />
						</div>
						<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
							{group.people.map((p) => (
								<PersonCard key={`${p.name}-${p.role}`} person={p} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function PersonCard({ person }: { person: Person }) {
	const inner = (
		<div className="group flex h-full flex-col gap-4 conf-card p-6 transition hover:border-crimson/50">
			<div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-secondary font-serif text-3xl font-semibold text-crimson ring-1 ring-border">
				{person.image ? (
					<img src={person.image} alt={person.name} className="h-full w-full object-cover" />
				) : (
					initials(person.name)
				)}
			</div>
			<div>
				<div className="font-serif text-xl leading-tight">{person.name}</div>
				<div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-crimson">
					{person.role}
				</div>
			</div>
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
			) : null}
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
