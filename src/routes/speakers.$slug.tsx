import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { EVENTBRITE_URL } from "@/components/site-chrome";
import { SpeakerPromo } from "@/components/speaker-promo";
import { getSpeaker } from "@/lib/speakers";

export const Route = createFileRoute("/speakers/$slug")({
	loader: ({ params }) => {
		const speaker = getSpeaker(params.slug);
		if (!speaker) throw notFound();
		return { speaker };
	},
	head: ({ loaderData }) => {
		const speaker = loaderData?.speaker;
		if (!speaker) return {};
		const title = `${speaker.name} — HBS Entrepreneurship Conference 2026`;
		const description = `${speaker.name}, ${speaker.role} at ${speaker.company}, speaks at From Ideas to Institutions on November 22, 2026 at Harvard Business School.`;
		return {
			meta: [
				{ title },
				{ name: "description", content: description },
				{ property: "og:title", content: title },
				{ property: "og:description", content: description },
			],
		};
	},
	component: SpeakerPage,
});

function SpeakerPage() {
	const { speaker } = Route.useLoaderData();

	return (
		<section className="relative isolate overflow-hidden">
			<div className="absolute inset-0 -z-10 glow-bg opacity-60" />
			<div className="mx-auto max-w-7xl px-5 pt-16 pb-24 md:px-8">
				<Link
					to="/speakers"
					className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase transition hover:text-lime"
				>
					<ArrowLeft className="h-4 w-4" /> All speakers
				</Link>
				<div className="mt-10 grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
					<div>
						<p className="text-xs font-bold tracking-[0.3em] text-lime uppercase">Speaker</p>
						<h1 className="mt-4 font-serif text-6xl leading-[0.95] text-periwinkle sm:text-7xl lg:text-8xl">
							{speaker.name}
						</h1>
						<p className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
							{speaker.role}
							<br />
							of {speaker.company}
						</p>
						{speaker.logo ? (
							<div className="mt-6 flex h-10 items-center">
								<img
									src={speaker.logo}
									alt={speaker.company}
									className="h-8 w-auto object-contain object-left"
								/>
							</div>
						) : null}
						<div className="mt-10 max-w-xl border-t border-border pt-8">
							<p className="font-serif text-lg leading-relaxed text-foreground/85">{speaker.bio}</p>
							<a
								href={speaker.sourceUrl}
								target="_blank"
								rel="noreferrer"
								className="mt-4 inline-block text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase underline-offset-4 hover:text-lime hover:underline"
							>
								Source →
							</a>
						</div>
						<a
							href={EVENTBRITE_URL}
							target="_blank"
							rel="noreferrer"
							className="mt-10 inline-flex items-center gap-2 rounded-md bg-lime px-6 py-3 text-sm font-bold tracking-wider text-primary-foreground uppercase transition hover:brightness-110"
						>
							Get your pass →
						</a>
					</div>
					<SpeakerPromo speaker={speaker} />
				</div>
			</div>
		</section>
	);
}
