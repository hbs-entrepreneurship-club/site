import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join — HBS Entrepreneurship Club" },
      {
        name: "description",
        content:
          "Membership is open to HBS students and the broader Harvard community working on real businesses.",
      },
      { property: "og:title", content: "Join — HBS Entrepreneurship Club" },
      {
        property: "og:description",
        content: "If you’re building, we want you in.",
      },
    ],
  }),
  component: Join,
});

function Join() {
  return (
    <>
      <PageHeader
        eyebrow="Join"
        title={<>If you’re building, we want you in.</>}
        lede="Membership is open to HBS students and the broader Harvard community working on real businesses — early-stage, side projects, or anything where you’re the one making payroll. No vanity decks required."
      />
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl">What you get</h2>
            <ul className="mt-6 space-y-4 text-lg text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                A roster of HBS founders to trade tactics, intros, and warm leads with.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                Invitations to club dinners, working sessions, and the annual Conference.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-crimson" />
                A shared playbook for building cash-flow-positive businesses on real constraints.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-ink p-6 text-paper">
              <div className="font-mono text-xs uppercase tracking-widest text-paper/60">
                Become a member
              </div>
              <ol className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <span className="font-mono text-crimson">01</span>
                  Email us with a one-line description of what you’re building.
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-crimson">02</span>
                  We’ll add you to the roster and the founder Slack.
                </li>
                <li className="flex gap-3">
                  <span className="font-mono text-crimson">03</span>
                  Show up. Share what works. Take what you need.
                </li>
              </ol>
              <a
                href="mailto:entrepreneurship@hbs.edu?subject=Joining%20the%20HBS%20Entrepreneurship%20Club"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
              >
                Email to join →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
