import { createFileRoute } from "@tanstack/react-router";
import { LogoMarquee } from "@/components/logo-marquee";
import { PassLink } from "@/components/site-chrome";
import { SpeakerGrid } from "@/components/speaker-card";
import { PROGRAM, STATS } from "@/lib/speakers";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "From Ideas to Institutions — HBS Entrepreneurship Conference 2026" },
			{
				name: "description",
				content:
					"The Annual Entrepreneurship Conference at Harvard Business School. November 22, 2026, Klarman Hall. 40+ speakers, 15+ panels, 3 keynotes. Get your pass.",
			},
			{
				property: "og:title",
				content: "From Ideas to Institutions — HBS Entrepreneurship Conference 2026",
			},
			{
				property: "og:description",
				content:
					"The Annual Entrepreneurship Conference at Harvard Business School. November 22, 2026, Klarman Hall. 40+ speakers, 15+ panels, 3 keynotes. Get your pass.",
			},
		],
	}),
	component: Home,
});

function Home() {
	return (
		<>
			<section className="relative isolate overflow-hidden">
				<img
					src="/venue/klarman-hall.jpg"
					alt="Klarman Hall auditorium at Harvard Business School"
					className="absolute inset-0 -z-20 h-full w-full object-cover"
				/>
				<div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />
				<div className="absolute inset-0 -z-10 glow-bg" />
				<div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pt-28 pb-16 md:px-8 md:pb-24">
					<h1 className="font-display text-[17vw] leading-[0.88] text-foreground uppercase drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)] sm:text-[14vw] md:text-[9.5rem] lg:text-[11rem]">
						From Ideas to
						<br />
						Institutions
					</h1>
					<p className="mt-8 max-w-3xl text-lg leading-snug font-extrabold tracking-wide uppercase sm:text-2xl md:text-3xl">
						The Annual Entrepreneurship Conference at Harvard Business School
					</p>
					<div className="mt-8 flex flex-col gap-8 border-t border-foreground/40 pt-8 md:flex-row md:items-end md:justify-between">
						<div>
							<p className="text-2xl font-light tracking-wide uppercase sm:text-3xl">
								November 22, 2026
							</p>
							<p className="text-2xl font-light tracking-wide text-muted-foreground uppercase sm:text-3xl">
								Klarman Hall
							</p>
							<p className="mt-4 max-w-xl font-serif text-lg text-foreground/90">
								Be in the room with ideas that become tomorrow's breakthroughs.{" "}
								<strong className="font-semibold">40+ speakers. 3 keynotes. 15+ panels.</strong>{" "}
								Leaders ranging from seed-stage AI founders to scaled organization CEOs.
							</p>
						</div>
						<div className="flex flex-col items-start gap-3">
							<PassLink className="px-8 py-4 text-base" />
							<span className="rounded bg-lime/15 px-3 py-1 text-xs font-bold tracking-wider text-lime uppercase">
								Early bird discount ends 9/30 midnight
							</span>
						</div>
					</div>
				</div>
			</section>

			<LogoMarquee />

			<section id="speakers" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
				<div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
					<div>
						<p className="text-xs font-bold tracking-[0.3em] text-lime uppercase">Speakers</p>
						<h2 className="mt-3 font-display text-5xl leading-none uppercase sm:text-7xl">
							On the program
						</h2>
					</div>
					<p className="max-w-sm text-sm text-muted-foreground">
						First confirmed speakers. More founders, operators and investors announced weekly.
					</p>
				</div>
				<SpeakerGrid />
			</section>

			<section className="relative isolate overflow-hidden border-y border-border">
				<div className="absolute inset-0 -z-10 glow-bg opacity-80" />
				<div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-20 md:grid-cols-4 md:px-8">
					{STATS.map((stat) => (
						<div key={stat.label} className="p-6 text-center md:text-left">
							<p className="font-display text-6xl leading-none sm:text-8xl">{stat.value}</p>
							<p className="mt-3 text-sm font-bold tracking-[0.25em] text-muted-foreground uppercase">
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</section>

			<section id="program" className="bg-foreground text-background">
				<div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
					<p className="text-xs font-bold tracking-[0.3em] text-crimson uppercase">Program</p>
					<h2 className="mt-3 font-display text-5xl leading-none uppercase sm:text-7xl">
						The day at a glance
					</h2>
					<p className="mt-4 text-background/60">Sunday, November 22, 2026 · Klarman Hall</p>
					<ol className="mt-12 divide-y divide-background/10 border-y border-background/10">
						{PROGRAM.map((item) => (
							<li
								key={item.time}
								className="grid gap-2 py-6 md:grid-cols-[16rem_1fr] md:items-baseline"
							>
								<p className="font-display text-2xl tracking-wide text-crimson uppercase sm:text-3xl">
									{item.time}
								</p>
								<p className="font-serif text-2xl sm:text-3xl">{item.label}</p>
							</li>
						))}
					</ol>
					<div className="mt-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
						<p className="max-w-xl text-sm text-background/60">
							Detailed session-by-session program — keynotes, panels and breaks — will be posted as
							it's finalized. Grab your pass now to lock in early-bird pricing.
						</p>
						<a
							href="https://www.eventbrite.com/e/hbs-entrepreneurship-conference-tickets-1994640530521"
							target="_blank"
							rel="noreferrer"
							className="rounded-md border border-background/40 px-5 py-2.5 text-sm font-bold tracking-wider uppercase transition hover:bg-background hover:text-foreground"
						>
							Get tickets →
						</a>
					</div>
				</div>
			</section>

			<section className="relative isolate overflow-hidden">
				<div className="absolute inset-0 -z-10 glow-bg" />
				<div className="mx-auto max-w-7xl px-5 py-28 text-center md:px-8">
					<p className="font-display text-5xl leading-none uppercase sm:text-7xl md:text-8xl">
						Join us on
						<br />
						November 22
					</p>
					<p className="mt-4 text-muted-foreground">
						Klarman Hall · Harvard Business School · Boston, MA
					</p>
					<div className="mt-10 flex justify-center">
						<PassLink className="px-8 py-4 text-base" />
					</div>
				</div>
			</section>
		</>
	);
}
