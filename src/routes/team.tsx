import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";
import { initials, leadership, type Person } from "@/lib/people";

export const Route = createFileRoute("/team")({
	head: () => ({
		meta: [
			{ title: "Team — HBS Entrepreneurship Conference 2026" },
			{
				name: "description",
				content:
					"Meet the Entrepreneurship Club officers, conference co-chairs and committee leads organizing From Ideas to Institutions at Harvard Business School.",
			},
			{ property: "og:title", content: "Team — HBS Entrepreneurship Conference 2026" },
			{
				property: "og:description",
				content:
					"Meet the Entrepreneurship Club officers, conference co-chairs and committee leads organizing From Ideas to Institutions at Harvard Business School.",
			},
		],
	}),
	component: Team,
});

function Team() {
	return (
		<>
			<PageHeader
				eyebrow="Team"
				title={
					<>
						The people behind
						<br />
						the conference
					</>
				}
				lede="Students of the Entrepreneurship Club at Harvard Business School, building the room where ideas become institutions."
			/>
			<div className="mx-auto max-w-7xl space-y-20 px-5 py-20 md:px-8">
				{leadership.map((group) => (
					<section key={group.title}>
						<div className="mb-8 flex items-center gap-4">
							<h2 className="font-display text-2xl tracking-[0.15em] text-foreground uppercase sm:text-3xl">
								{group.title}
							</h2>
							<div className="h-px flex-1 bg-border" />
						</div>
						<ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
							{group.people.map((person) => (
								<li key={`${person.name}-${person.role}`}>
									<PersonCard person={person} />
								</li>
							))}
						</ul>
					</section>
				))}
			</div>
		</>
	);
}

function PersonCard({ person }: { person: Person }) {
	const inner = (
		<div className="group flex h-full flex-col gap-5 rounded-lg border border-border bg-card p-6 transition hover:border-lime">
			<div className="h-28 w-28 overflow-hidden rounded-full ring-1 ring-border">
				{person.image ? (
					<img
						src={person.image}
						alt={person.name}
						loading="lazy"
						className="h-full w-full object-cover"
					/>
				) : (
					<div className="flex h-full w-full items-center justify-center bg-secondary font-serif text-3xl text-lime">
						{initials(person.name)}
					</div>
				)}
			</div>
			<div>
				<p className="font-serif text-xl leading-tight">{person.name}</p>
				<p className="mt-1.5 text-xs font-bold tracking-wider text-periwinkle uppercase">
					{person.role}
				</p>
			</div>
			{person.linkedin ? (
				<p className="mt-auto text-xs font-semibold text-muted-foreground opacity-0 transition group-hover:opacity-100">
					LinkedIn →
				</p>
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
