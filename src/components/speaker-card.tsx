import { Link } from "@tanstack/react-router";
import { SPEAKERS, type Speaker, speakerImageStyle } from "@/lib/speakers";

export function SpeakerCard({ speaker }: { speaker: Speaker }) {
	return (
		<li className="group overflow-hidden rounded-lg border border-border bg-card transition hover:border-lime">
			<Link to="/speakers/$slug" params={{ slug: speaker.slug }} className="block h-full">
				<div className="aspect-square overflow-hidden">
					<img
						src={speaker.image}
						alt={speaker.name}
						loading="lazy"
						className="h-full w-full object-cover transition duration-500 group-hover:brightness-110"
						style={speakerImageStyle(speaker.crop)}
					/>
				</div>
				<div className="p-4">
					<p className="font-serif text-lg leading-tight sm:text-xl">{speaker.name}</p>
					<p className="mt-1 text-sm text-muted-foreground">{speaker.role}</p>
					{speaker.logo ? (
						<div className="mt-3 flex h-7 items-center">
							<img
								src={speaker.logo}
								alt={speaker.company}
								className="h-6 w-auto max-w-full object-contain object-left"
							/>
						</div>
					) : null}
				</div>
			</Link>
		</li>
	);
}

export function SpeakerGrid() {
	return (
		<ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
			{SPEAKERS.map((speaker) => (
				<SpeakerCard key={speaker.slug} speaker={speaker} />
			))}
			<li className="flex items-center justify-center rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
				More speakers
				<br />
				coming soon
			</li>
		</ul>
	);
}
