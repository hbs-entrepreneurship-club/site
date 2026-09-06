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
				<div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
					<div className="max-w-lg rounded-lg border border-border bg-card p-8">
						<ol className="space-y-5">
							{["Email us what you're building.", "We'll add you to the roster.", "Show up."].map(
								(step, i) => (
									<li key={step} className="flex gap-4">
										<span className="text-sm font-bold tracking-wider text-lime uppercase">
											{String(i + 1).padStart(2, "0")}
										</span>
										<span className="text-base">{step}</span>
									</li>
								),
							)}
						</ol>
						<a
							href={`mailto:${CLUB_EMAIL}?subject=Joining%20the%20HBS%20Entrepreneurship%20Club`}
							className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-extrabold tracking-wider text-primary-foreground uppercase shadow-[0_0_30px_-6px_var(--lime)] transition hover:brightness-105"
						>
							Email to join →
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
