import { createFileRoute } from "@tanstack/react-router";
import { EVENTBRITE_URL } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MIB Conference 2026" },
      {
        name: "description",
        content:
          "MIB Conference 2026. November 22, 2026 at Harvard Business School, Boston.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="eyebrow mb-5">Harvard Business School</div>
        <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
          MIB Conference <span className="text-gold">2026</span>
        </h1>
        <div className="mt-10 space-y-3 font-mono text-sm">
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
        <div className="mt-10">
          <a
            href={EVENTBRITE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep"
          >
            Join Waitlist <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
