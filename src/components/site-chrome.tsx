import { Link } from "@tanstack/react-router";

export const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/entrepreneurship-summit-2026-tickets-1983422470000";
export const EVENT_HUB_URL =
  "https://events.hbs.edu/event/entrepreneurship-summit-2026";

export function Mark() {
  return (
    <img
      src="/logo.jpeg"
      alt="MIB Conference"
      className="h-9 w-9 rounded-md object-cover"
    />
  );
}

const NAV = [
  { to: "/" as const, label: "Home" },
  { to: "/summit" as const, label: "2026 Speakers" },
  { to: "/people" as const, label: "Team" },
  { to: "/about" as const, label: "Sponsors" },
  { to: "/join" as const, label: "Archive" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <Mark />
          <div className="leading-tight">
            <div className="font-serif text-base font-semibold">
              MIB Conference
            </div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              2026
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "text-blue border-b-2 border-blue pb-0.5 -mb-0.5",
              }}
              inactiveProps={{
                className: "text-foreground/80 hover:text-blue",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={EVENTBRITE_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-blue px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep md:inline-flex"
        >
          Join Waitlist →
        </a>
      </div>
      <div className="border-t border-border/60 md:hidden">
        <nav className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-6 py-3 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-blue font-medium" }}
              inactiveProps={{ className: "text-foreground/80" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Mark />
          <div className="text-sm">
            <div className="font-serif">MIB Conference</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Harvard Business School · Boston, MA
            </div>
          </div>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} — MIB Conference
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="eyebrow mb-5">{eyebrow}</div>
        <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
