import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — HBS Entrepreneurship Club" },
			{
				name: "description",
				content: "The Entrepreneurship Club at Harvard Business School.",
			},
			{ property: "og:title", content: "About — HBS Entrepreneurship Club" },
			{
				property: "og:description",
				content: "A community of founders at HBS.",
			},
		],
	}),
	component: About,
});

function About() {
	return (
		<>
			<PageHeader
				eyebrow="About"
				title={
					<>
						A community of founders
						<br />
						at Harvard Business School
					</>
				}
			/>

			<section>
				<div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
					<div className="grid gap-px bg-border sm:grid-cols-3">
						{[
							{ n: "01", title: "Connect" },
							{ n: "02", title: "Learn" },
							{ n: "03", title: "Build" },
						].map((item) => (
							<div key={item.n} className="bg-background px-8 py-12">
								<div className="text-xs font-bold tracking-[0.3em] text-lime uppercase">
									{item.n}
								</div>
								<div className="mt-3 font-display text-3xl tracking-tight uppercase">
									{item.title}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="border-t border-border bg-card">
				<div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 md:px-8">
					<div className="lg:col-span-5">
						<div className="text-xs font-bold tracking-[0.3em] text-lime uppercase">Etymology</div>
					</div>
					<div className="lg:col-span-7">
						<p className="font-serif text-3xl leading-snug tracking-tight md:text-4xl">
							<span className="text-lime">entre·prendre</span>
							<span className="text-muted-foreground"> — to take what lies in between.</span>
						</p>
					</div>
				</div>
			</section>

			<section className="border-t border-border">
				<div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8">
					<div className="font-display text-3xl tracking-tight uppercase md:text-4xl">Want in?</div>
					<Link
						to="/join"
						className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-extrabold tracking-wider text-primary-foreground uppercase shadow-[0_0_30px_-6px_var(--lime)] transition hover:brightness-105"
					>
						Join the club →
					</Link>
				</div>
			</section>
		</>
	);
}
