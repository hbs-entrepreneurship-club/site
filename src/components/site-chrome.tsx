"use client";

import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export const EVENTBRITE_URL =
	"https://www.eventbrite.com/e/hbs-entrepreneurship-conference-tickets-1994640530521";
export const EVENT_HUB_URL = "https://events.hbs.edu/event/entrepreneurship-summit-2026";
export const CLUB_EMAIL = "team@hbs-entrepreneurship-club.org";
export const SPONSOR_EMAIL = "marshad@mba2027.hbs.edu";

const NAV = [
	{ to: "/" as const, label: "Home" },
	{ to: "/speakers" as const, label: "Speakers" },
	{ to: "/team" as const, label: "Team" },
	{ to: "/sponsors" as const, label: "Sponsors" },
];

export function Logo({ className }: { className?: string }) {
	return (
		<img
			src="/eclub-logo.png"
			alt="Entrepreneurship Club, a student club at Harvard Business School"
			className={cn("h-9 w-auto", className)}
		/>
	);
}

export function PassLink({
	className,
	children = "Get your pass",
}: {
	className?: string;
	children?: ReactNode;
}) {
	return (
		<a
			href={EVENTBRITE_URL}
			target="_blank"
			rel="noreferrer"
			className={cn(
				"inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_0_30px_-6px_var(--lime)] transition hover:brightness-105 hover:shadow-[0_0_40px_-4px_var(--lime)]",
				className,
			)}
		>
			{children}
			<span aria-hidden="true">→</span>
		</a>
	);
}

export function Nav() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 bg-foreground text-background shadow-[0_1px_0_0_oklch(0_0_0/0.1)]">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
				<Link to="/" aria-label="Entrepreneurship Club home" className="flex items-center">
					<Logo />
				</Link>
				<nav className="hidden items-center gap-8 md:flex" aria-label="Main">
					{NAV.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeOptions={{ exact: item.to === "/" }}
							activeProps={{ className: "text-background" }}
							inactiveProps={{ className: "text-background/60 hover:text-background" }}
							className="text-sm font-semibold uppercase tracking-wider transition"
						>
							{item.label}
						</Link>
					))}
					<PassLink />
				</nav>
				<button
					type="button"
					className="text-background md:hidden"
					aria-label={open ? "Close menu" : "Open menu"}
					onClick={() => setOpen((value) => !value)}
				>
					{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
				</button>
			</div>
			{open ? (
				<nav
					className="flex flex-col gap-4 border-t border-background/10 px-5 py-5 md:hidden"
					aria-label="Mobile"
				>
					{NAV.map((item) => (
						<Link
							key={item.to}
							to={item.to}
							activeOptions={{ exact: item.to === "/" }}
							activeProps={{ className: "text-background" }}
							inactiveProps={{ className: "text-background/60" }}
							className="text-sm font-semibold uppercase tracking-wider"
							onClick={() => setOpen(false)}
						>
							{item.label}
						</Link>
					))}
					<PassLink className="w-fit" />
				</nav>
			) : null}
		</header>
	);
}

export function Footer() {
	return (
		<footer className="border-t border-border">
			<div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
				<div>
					<span className="inline-block rounded bg-foreground px-2 py-1">
						<img src="/eclub-logo.png" alt="Entrepreneurship Club" className="h-9 w-auto" />
					</span>
					<p className="mt-4 max-w-xs text-sm text-muted-foreground">
						From Ideas to Institutions — The Annual Entrepreneurship Conference at Harvard Business
						School.
					</p>
				</div>
				<div className="text-sm">
					<p className="font-display text-2xl uppercase">November 22, 2026</p>
					<p className="mt-1 text-muted-foreground">
						Klarman Hall · Harvard Business School
						<br />
						Boston, MA · 8:00 AM – 7:30 PM
					</p>
					<a
						href={EVENT_HUB_URL}
						target="_blank"
						rel="noreferrer"
						className="mt-3 inline-block underline-offset-4 hover:underline"
					>
						HBS event page →
					</a>
				</div>
				<div className="text-sm">
					<p className="font-semibold uppercase tracking-wider text-muted-foreground">
						Sponsorship inquiries
					</p>
					<ul className="mt-2 space-y-1">
						<li>
							<a href={`mailto:${SPONSOR_EMAIL}`} className="hover:underline">
								{SPONSOR_EMAIL}
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
				© {new Date().getFullYear()} Entrepreneurship Club at Harvard Business School
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
	title: ReactNode;
	lede?: ReactNode;
}) {
	return (
		<section className="relative isolate overflow-hidden border-b border-border">
			<div className="absolute inset-0 -z-10 glow-bg opacity-70" />
			<div className="mx-auto max-w-7xl px-5 pb-16 pt-24 md:px-8">
				<p className="text-xs font-bold uppercase tracking-[0.3em] text-lime">{eyebrow}</p>
				<h1 className="mt-3 font-display text-6xl uppercase leading-none sm:text-8xl">{title}</h1>
				{lede ? (
					<p className="mt-6 max-w-2xl font-serif text-lg text-foreground/85">{lede}</p>
				) : null}
			</div>
		</section>
	);
}
