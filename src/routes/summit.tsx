import { createFileRoute } from "@tanstack/react-router";
import {
  EVENTBRITE_URL,
  EVENT_HUB_URL,
  PageHeader,
} from "@/components/site-chrome";

export const Route = createFileRoute("/summit")({
  head: () => ({
    meta: [
      { title: "2026 Speakers — MIB Conference" },
      {
        name: "description",
        content:
          "2026 MIB Conference speakers. November 22, 2026 at Harvard Business School.",
      },
    ],
  }),
  component: Summit,
});

function Summit() {
  return (
    <>
      <PageHeader
        eyebrow="2026 Speakers"
        title={<>Speakers to be announced.</>}
        lede="Speaker details will be published on Eventbrite as they're confirmed."
      />

      <section className="bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground w-24">Date</span>
              <span>Sunday, November 22, 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground w-24">Location</span>
              <span>Harvard Business School, Boston, MA</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground w-24">Capacity</span>
              <span>~400 attendees</span>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={EVENTBRITE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep"
            >
              Join Waitlist →
            </a>
            <a
              href={EVENT_HUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:bg-accent"
            >
              HBS event page
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
