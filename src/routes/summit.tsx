import { createFileRoute } from "@tanstack/react-router";
import {
  EVENTBRITE_URL,
  EVENT_HUB_URL,
  PageHeader,
} from "@/components/site-chrome";

export const Route = createFileRoute("/summit")({
  head: () => ({
    meta: [
      { title: "Entrepreneurship Summit 2026 — HBS Entrepreneurship Club" },
      {
        name: "description",
        content:
          "The HBS Entrepreneurship Summit returns November 22, 2026. A full-day gathering for scrappy founders, operators, and investors.",
      },
      { property: "og:title", content: "Entrepreneurship Summit 2026" },
      {
        property: "og:description",
        content:
          "November 22, 2026 at Harvard Business School. Hosted by the HBS Entrepreneurship Club.",
      },
    ],
  }),
  component: Summit,
});

const TRACKS = [
  {
    title: "Building under constraints",
    body: "Founders who got to revenue without a fundraise. Pricing, sales, and the unglamorous early sequence.",
  },
  {
    title: "Buy, don't build",
    body: "Search funds, SMB acquisitions, and small-business operating — the path more HBS founders are taking each year.",
  },
  {
    title: "AI for real businesses",
    body: "Practical AI inside existing industries: where it actually compounds margin, where it doesn't.",
  },
  {
    title: "Sales & growth",
    body: "Cold outreach, founder-led sales, channel partnerships, retention. The mechanics behind line going up.",
  },
  {
    title: "Hard industries",
    body: "Manufacturing, climate, energy, and physical-world businesses where capital is patient and execution is everything.",
  },
  {
    title: "Workshops",
    body: "Small-group sessions on hiring, contracts, pricing experiments, and shipping product the week of the Summit.",
  },
];

const AGENDA = [
  { time: "8:00 – 9:00", title: "Registration & breakfast" },
  { time: "9:00 – 10:00", title: "Opening keynote" },
  { time: "10:15 – 12:00", title: "Morning panels & workshops" },
  { time: "12:00 – 1:30", title: "Lunch & founder mixer" },
  { time: "1:30 – 4:00", title: "Afternoon panels & workshops" },
  { time: "4:15 – 5:00", title: "Closing keynote" },
  { time: "5:00 – 7:00", title: "Reception" },
];

const WHAT_TO_EXPECT = [
  {
    icon: "🎤",
    title: "Keynotes from real founders",
    body: "Not a parade of pitch decks. Hear from founders who built profitable businesses from scratch, one customer at a time.",
  },
  {
    icon: "💬",
    title: "Panels that go deep",
    body: "Six tracks covering everything from AI to acquisitions. Every panel is designed to be tactical, not inspirational.",
  },
  {
    icon: "🔧",
    title: "Hands-on workshops",
    body: "Small-group sessions where you leave with something usable: a pricing model, a cold-email template, a hiring rubric.",
  },
  {
    icon: "🤝",
    title: "The founder mixer",
    body: "Over lunch and at the reception, meet the kind of founders who share playbooks, not just business cards.",
  },
];

const FAQ = [
  {
    q: "Who is the Summit for?",
    a: "Current founders, aspiring founders, operators, and investors who care about building businesses the scrappy way. HBS students and the broader Harvard community are especially welcome.",
  },
  {
    q: "Do I need to be an HBS student?",
    a: "No. Tickets are open to the public via Eventbrite. HBS-affiliated attendees may have access to a discounted rate — check the Eventbrite listing.",
  },
  {
    q: "Where is it?",
    a: "On the Harvard Business School campus in Boston. Specific rooms and a map will be shared closer to the event and on Eventbrite.",
  },
  {
    q: "Where are the most current details?",
    a: "Eventbrite is the source of truth for speakers, schedule, pricing, and any program changes. This page is a preview.",
  },
];

function Summit() {
  return (
    <>
      <PageHeader
        eyebrow="Flagship Event"
        title={
          <>
            Entrepreneurship Summit
            <br />
            <span className="text-crimson">November 22, 2026</span>
          </>
        }
        lede="A full-day gathering for founders, operators, and investors who believe in building the scrappy way. Keynotes, panels, and workshops on what it actually takes to start, finance, and grow a business under real constraints."
      />

      <section className="bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">The basics</div>
            <div className="space-y-2 font-mono text-sm">
              <Row label="Date" value="Sunday, November 22, 2026" />
              <Row label="Venue" value="Harvard Business School" />
              <Row label="City" value="Boston, Massachusetts" />
              <Row label="Host" value="HBS Entrepreneurship Club" />
              <Row label="Format" value="Keynotes · Panels · Workshops" />
              <Row label="Capacity" value="~400 founders & operators" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-muted-foreground md:text-xl">
              The 2026 Summit returns for its second year. Expect a tight day of
              programming focused on founders building real, durable businesses —
              not a parade of pitch decks. Programming, speakers, and tickets are
              maintained on Eventbrite.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
              >
                Tickets & full details on Eventbrite →
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
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Eventbrite is the source of truth for the most current details.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10">
            <div className="eyebrow mb-3">What to expect</div>
            <h2 className="font-serif text-3xl md:text-4xl">
              A day designed for builders.
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {WHAT_TO_EXPECT.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-6"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <div className="font-serif text-xl">{item.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-3">Programming themes</div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Six tracks we're building around.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-muted-foreground md:block">
              Final session titles, speakers, and rooms land on Eventbrite as
              they're confirmed.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TRACKS.map((t) => (
              <div
                key={t.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="font-serif text-xl">{t.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">Day of</div>
            <h2 className="font-serif text-3xl md:text-4xl">A tentative shape.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              The exact schedule, speakers, and room assignments will be published
              on Eventbrite as they're finalized.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ol className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
              {AGENDA.map((s) => (
                <li
                  key={s.time}
                  className="flex items-baseline justify-between gap-6 px-6 py-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-crimson">
                    {s.time}
                  </span>
                  <span className="font-serif text-lg">{s.title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow mb-4">FAQ</div>
          <h2 className="font-serif text-3xl md:text-4xl">A few quick answers.</h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {FAQ.map((item) => (
              <div key={item.q} className="grid gap-4 py-6 md:grid-cols-12">
                <dt className="font-serif text-xl md:col-span-5">{item.q}</dt>
                <dd className="text-muted-foreground md:col-span-7">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="eyebrow mb-3" style={{ color: "oklch(0.85 0.12 30)" }}>
              Save your seat
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">
              The room fills up. Tickets and speaker list live on Eventbrite.
            </h2>
          </div>
          <a
            href={EVENTBRITE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
          >
            Get tickets →
          </a>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-dashed border-border py-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}
