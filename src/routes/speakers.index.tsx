import { createFileRoute } from "@tanstack/react-router";
import { SpeakerGrid } from "@/components/speaker-card";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/speakers/")({
	head: () => ({
		meta: [
			{ title: "Speakers — HBS Entrepreneurship Conference 2026" },
			{
				name: "description",
				content:
					"Founders, CEOs and investors speaking at From Ideas to Institutions, the Annual Entrepreneurship Conference at Harvard Business School.",
			},
			{ property: "og:title", content: "Speakers — HBS Entrepreneurship Conference 2026" },
			{
				property: "og:description",
				content:
					"Founders, CEOs and investors speaking at From Ideas to Institutions, the Annual Entrepreneurship Conference at Harvard Business School.",
			},
		],
	}),
	component: Speakers,
});

function Speakers() {
	return (
		<>
			<PageHeader
				eyebrow="Speakers"
				title="On the program"
				lede="First confirmed speakers. More founders, operators and investors announced weekly."
			/>
			<section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
				<SpeakerGrid />
			</section>
		</>
	);
}
