import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HBS Entrepreneurship Club" },
      {
        name: "description",
        content:
          "What the HBS Entrepreneurship Club stands for: scrappy, cash-flow-positive building, and founders helping founders.",
      },
      { property: "og:title", content: "About — HBS Entrepreneurship Club" },
      {
        property: "og:description",
        content:
          "A club for the resourceful. We celebrate scarcity, cash flow, and shared playbooks.",
      },
    ],
  }),
  component: About,
});

const PRINCIPLES = [
  {
    n: "01",
    title: "Scarcity is the medium.",
    body: "We build businesses without lavish funds. Constraint sharpens the product and the operator.",
  },
  {
    n: "02",
    title: "Cash flow before applause.",
    body: "Revenue first, runway later. We optimize for businesses that pay for themselves quickly.",
  },
  {
    n: "03",
    title: "Founders teach founders.",
    body: "Tactics, intros, playbooks. We aggregate what works so every member has better odds.",
  },
];

const ACTIVITIES = [
  {
    title: "Founder dinners",
    body: "Small, recurring dinners where members share what they're working on, what's broken, and what they need help with this week.",
  },
  {
    title: "Working sessions",
    body: "Roll-up-your-sleeves blocks for cold outreach, pricing decisions, hiring debates, and shipping. Bring a laptop and a problem.",
  },
  {
    title: "Operator office hours",
    body: "Sessions with alumni and visiting operators who've actually built profitable businesses, focused on the practical, not the inspirational.",
  },
  {
    title: "Annual Conference",
    body: "Our flagship gathering each November — keynotes, panels, and workshops on building real businesses under real constraints.",
  },
  {
    title: "Resource library",
    body: "A shared, member-only repository of contracts, decks, cold-email templates, hiring rubrics, and vendor recommendations.",
  },
  {
    title: "Warm intros, on tap",
    body: "First customers, candidate referrals, design partners, mentors. The club's most useful asset is the address book it pools together.",
  },
];

const STATS = [
  { value: "2025", label: "Founded" },
  { value: "400+", label: "Conference attendees" },
  { value: "6", label: "Programming tracks" },
  { value: "100%", label: "Student-run" },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>A club for the resourceful.</>}
        lede="The Entrepreneurship Club gathers people working on businesses where scarcity is inherent. Our charge is twofold: celebrate the art of scrappy, cash-flow-positive building — and make every member meaningfully more likely to succeed by sharing tips, resources, and introductions across the cohort."
      />

      <section className="bg-card/40">
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

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow mb-6">Principles</div>
          <div className="grid gap-8 sm:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.n} className="border-t border-crimson/40 pt-4">
                <div className="font-mono text-xs text-crimson">{p.n}</div>
                <div className="mt-2 font-serif text-2xl">{p.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">Etymology</div>
            <h2 className="font-serif text-3xl md:text-4xl">Why "entrepreneur."</h2>
          </div>
          <div className="lg:col-span-8 text-lg text-muted-foreground">
            <p>
              From the French <em>entre</em> (between) and <em>prendre</em> (to take):
              to take the space between things. To find a gap that others walked past
              and persevere there long enough to create something of value that didn't
              exist before.
            </p>
            <p className="mt-4">
              That definition — not the venture-capital one — is the club we want to
              run. We are skeptical of the cult of large rounds, prestige-by-deck, and
              the idea that the best businesses are always the most expensive ones to
              start. The most interesting founders we know solved a real problem,
              charged money for it on day one, and grew from there.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow mb-3">What the club does</div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Practical, recurring, useful.
              </h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="font-serif text-xl">{a.title}</div>
                <p className="mt-3 text-sm text-muted-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-3">Our story</div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Built by founders, for founders.
            </h2>
          </div>
          <div className="lg:col-span-7 text-lg text-muted-foreground space-y-4">
            <p>
              The HBS Entrepreneurship Club was founded in 2025 by a group of students
              who noticed something missing: a community for founders building real
              businesses — not just pitch decks. We wanted a space where the
              conversations were about pricing, cold outreach, and hiring your first
              employee, not about raising the biggest round.
            </p>
            <p>
              In our first year, we launched the Entrepreneurship Summit, a full-day
              gathering that brought together over 400 founders, operators, and
              investors. The Summit featured keynotes from founders who built
              profitable businesses from scratch, panels on AI for real businesses, and
              workshops on the mechanics of growth.
            </p>
            <p>
              Today, the club runs year-round programming — founder dinners, working
              sessions, operator office hours, and a shared resource library. We are a
              small team with a big ambition: make every HBS founder meaningfully more
              likely to succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="eyebrow mb-3" style={{ color: "oklch(0.85 0.12 30)" }}>
              Who it's for
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
