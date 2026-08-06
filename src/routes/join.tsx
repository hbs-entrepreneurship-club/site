import { createFileRoute } from "@tanstack/react-router";
import { CLUB_EMAIL, PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/join")({
	head: () => ({
		meta: [
			{ title: "Join — HBS Entrepreneurship Club" },
			{
				name: "description",
				content: "Join the HBS Entrepreneurship Club.",
			},
			{ property: "og:title", content: "Join — HBS Entrepreneurship Club" },
			{
				property: "og:description",
				content: "Join the club.",
			},
		],
	}),
	component: Join,
});

function Join() {
	return (
		<>
			<PageHeader eyebrow="Join" title={<>If you're building, we want you in.</>} />

			<section>
				<div className="mx-auto max-w-6xl px-6 py-20">
					<div className="conf-card max-w-lg border-l-[3px] border-l-crimson p-8">
						<ol className="space-y-5">
							{["Email us what you're building.", "We'll add you to the roster.", "Show up."].map(
								(step, i) => (
									<li key={step} className="flex gap-4">
										<span className="font-mono text-sm font-medium text-crimson">
											{String(i + 1).padStart(2, "0")}
										</span>
										<span className="text-base">{step}</span>
									</li>
								),
							)}
						</ol>
						<a
							href={`mailto:${CLUB_EMAIL}?subject=Joining%20the%20HBS%20Entrepreneurship%20Club`}
							className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
						>
							Email to join →
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
