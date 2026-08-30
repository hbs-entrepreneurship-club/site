import { Link } from "@tanstack/react-router";

export const EVENTBRITE_URL =
	"https://www.eventbrite.com/e/hbs-entrepreneurship-conference-tickets-1994640530521";
export const EVENT_HUB_URL = "https://events.hbs.edu/event/entrepreneurship-summit-2026";
export const CLUB_EMAIL = "team@hbs-entrepreneurship-club.org";
export const INSTAGRAM_URL = "https://www.instagram.com/hbs_entrepreneur_conference/";
export const LINKEDIN_URL = "https://www.linkedin.com/in/hbs-entrepreneurship-club-093398423/";

export function Mark() {
	return (
		<img src="/logo.png" alt="HBS Entrepreneurship Club" className="h-9 w-9 rounded object-cover" />
	);
}

const NAV = [
	{ to: "/" as const, label: "Home" },
	{ to: "/about" as const, label: "About" },
	{ to: "/conference" as const, label: "Conference" },
	{ to: "/people" as const, label: "People" },
	{ to: "/join" as const, label: "Join" },
];

export function Nav() {
	return (
		<header className="sticky top-0 z-40 border-b border-border bg-background/95">
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
				<Link to="/" className="flex items-center gap-3">
					<Mark />
					<div className="leading-tight">
						<div className="font-serif text-base font-semibold tracking-tight">
							Entrepreneurship Club
						</div>
						<div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
							Harvard Business School
						</div>
					</div>
				</Link>
				<nav className="hidden items-center gap-7 text-sm md:flex">
					{NAV.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeOptions={{ exact: true }}
							activeProps={{
								className: "font-medium text-crimson border-b-2 border-crimson pb-0.5 -mb-0.5",
							}}
							inactiveProps={{
								className: "text-foreground/75 hover:text-crimson",
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
					className="hidden rounded bg-crimson px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep md:inline-flex"
				>
					Get Tickets →
				</a>
			</div>
			<div className="border-t border-border md:hidden">
				<nav className="mx-auto flex max-w-6xl gap-5 overflow-x-auto px-6 py-3 text-sm">
					{NAV.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeOptions={{ exact: true }}
							activeProps={{ className: "font-medium text-crimson" }}
							inactiveProps={{ className: "text-foreground/75" }}
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
		<footer className="border-t border-border bg-background">
			<div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
				<div className="flex items-center gap-3">
					<Mark />
					<div className="text-sm">
						<div className="font-serif text-base">HBS Entrepreneurship Club</div>
						<div className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
							Harvard Business School · Boston, MA
						</div>
					</div>
				</div>
				<div className="flex flex-col items-start gap-3 md:items-end">
					<div className="flex items-center gap-5 text-sm">
						<a
							href={INSTAGRAM_URL}
							target="_blank"
							rel="noreferrer"
							className="text-muted-foreground transition hover:text-crimson"
						>
							Instagram
						</a>
						<a
							href={LINKEDIN_URL}
							target="_blank"
							rel="noreferrer"
							className="text-muted-foreground transition hover:text-crimson"
						>
							LinkedIn
						</a>
						<a
							href={`mailto:${CLUB_EMAIL}`}
							className="text-muted-foreground transition hover:text-crimson"
						>
							Email
						</a>
					</div>
					<div className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
						© {new Date().getFullYear()}
					</div>
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
		<section className="border-b border-border">
			<div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
				<div className="accent-bar">
					<div className="eyebrow mb-5">{eyebrow}</div>
					<h1 className="max-w-4xl font-serif text-5xl font-medium tracking-tight md:text-6xl lg:text-[4rem]">
						{title}
					</h1>
					{lede ? (
						<p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
							{lede}
						</p>
					) : null}
				</div>
			</div>
		</section>
	);
}
