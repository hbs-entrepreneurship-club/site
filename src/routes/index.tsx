import { createFileRoute, Link } from "@tanstack/react-router";
import { EVENTBRITE_URL } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HBS Entrepreneurship Club" },
      {
        name: "description",
        content:
          "A Harvard Business School club for founders building scrappy, cash-flow-positive businesses. Home of the annual Entrepreneurship Conference.",
      },
      { property: "og:title", content: "HBS Entrepreneurship Club" },
      {
        property: "og:description",
        content: "Founders taking the space between things.",
      },
    ],
  }),
  component: Home,
});

const STATS = [
  { value: "400+", label: "Founders & operators" },
  { value: "Nov 22", label: "Conference 2026" },
  { value: "6", label: "Programming tracks" },
  { value: "100%", label: "Student-run" },
];

const PILLARS = [
  {
    title: "Build under constraints",
    body: "We celebrate businesses that pay for themselves from day one. Constraint sharpens the product and the operator.",
  },
  {
    title: "Founders teach founders",
    body: "Tactics, intros, playbooks. We aggregate what works so every member has better odds of success.",
  },
  {
    title: "Revenue before runway",
    body: "We are skeptical of the cult of large rounds. The most interesting founders solved a real problem and charged money on day one.",
  },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">Harvard Business School</div>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
              For founders who{" "}
              <em className="italic text-crimson">take the space</em>
              <br />
              between things.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              A club for builders working on businesses where scarcity is inherent —
              scrappy, resourceful, cash-flow-positive. We celebrate the craft of
              creating value out of very little, and we trade what we learn so every
              member has better odds.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
              >
                Conference · Nov 22, 2026 <span aria-hidden>→</span>
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium transition hover:bg-accent"
              >
                Learn more about the club
              </Link>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="eyebrow mb-3">Etymology</div>
              <p className="font-serif text-2xl leading-snug">
                <span className="text-crimson">entre·prendre</span> — to{" "}
                <span className="underline decoration-crimson/40 decoration-2 underline-offset-4">
                  take
                </span>{" "}
                what lies{" "}
                <span className="underline decoration-crimson/40 decoration-2 underline-offset-4">
                  in between
                </span>
                .
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Find the gap. Persevere there. Build value that didn't exist before.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="eyebrow mb-3">Next event</div>
              <div className="font-serif text-xl">Entrepreneurship Conference</div>
              <div className="mt-2 font-mono text-sm text-crimson">
                Sunday, November 22, 2026
              </div>
              <div className="mt-1 font-mono text-xs text-muted-foreground">
                Harvard Business School · Boston, MA
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                A full-day gathering for founders, operators, and investors who believe in building the scrappy way.
              </p>
              <a
                href={EVENTBRITE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-crimson hover:underline"
              >
                Get tickets <span aria-hidden>→</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-4xl font-bold text-crimson md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-3">What we believe</div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Three things we won't compromise on.
              </h2>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="border-t border-crimson/40 pt-5">
                <div className="font-mono text-xs text-crimson">
                  0{i + 1}
                </div>
                <div className="mt-2 font-serif text-2xl">{p.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div
              className="eyebrow mb-3"
              style={{ color: "oklch(0.85 0.12 30)" }}
            >
              Join the club
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">
              If you're shipping, charging, and figuring it out as you go — this is your room.
            </h2>
          </div>
          <Link
            to="/join"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
          >
            Join the club →
          </Link>
        </div>
      </section>
    </>
  );
}
