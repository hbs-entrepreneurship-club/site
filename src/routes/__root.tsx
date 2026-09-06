import { type QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Link,
	Outlet,
	Scripts,
	useRouter,
} from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";
import { Footer, Nav } from "@/components/site-chrome";
import { reportLovableError } from "../lib/lovable-error-reporting";
import appCss from "../styles.css?url";

function NotFoundComponent() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4">
			<div className="max-w-md text-center">
				<div className="text-sm font-bold tracking-[0.3em] text-lime uppercase">404</div>
				<h1 className="mt-3 font-display text-5xl uppercase text-foreground">Page not found</h1>
				<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<div className="mt-8">
					<Link
						to="/"
						className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_0_30px_-6px_var(--lime)] transition hover:brightness-105"
					>
						Go home
					</Link>
				</div>
			</div>
		</div>
	);
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);

	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4">
			<div className="max-w-md text-center">
				<h1 className="font-display text-4xl uppercase tracking-tight text-foreground">
					This page didn't load
				</h1>
				<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
					Something went wrong on our end. You can try refreshing or head back home.
				</p>
				<div className="mt-8 flex flex-wrap justify-center gap-3">
					<button
						type="button"
						onClick={() => {
							router.invalidate();
							reset();
						}}
						className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-extrabold uppercase tracking-wider text-primary-foreground shadow-[0_0_30px_-6px_var(--lime)] transition hover:brightness-105"
					>
						Try again
					</button>
					<a
						href="/"
						className="inline-flex items-center justify-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition hover:border-lime"
					>
						Go home
					</a>
				</div>
			</div>
		</div>
	);
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ title: "From Ideas to Institutions — HBS Entrepreneurship Conference 2026" },
			{ name: "author", content: "Entrepreneurship Club at Harvard Business School" },
			{
				name: "description",
				content:
					"The Annual Entrepreneurship Conference at Harvard Business School. November 22, 2026, Klarman Hall. 40+ speakers, 15+ panels, 3 keynotes. Get your pass.",
			},
			{
				property: "og:title",
				content: "From Ideas to Institutions — HBS Entrepreneurship Conference 2026",
			},
			{
				property: "og:description",
				content:
					"The Annual Entrepreneurship Conference at Harvard Business School. November 22, 2026, Klarman Hall. 40+ speakers, 15+ panels, 3 keynotes. Get your pass.",
			},
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
		links: [
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Manrope:wght@300..800&display=swap",
			},
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/png", href: "/favicon.png" },
			{ rel: "apple-touch-icon", href: "/favicon.png" },
		],
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}

function RootComponent() {
	const { queryClient } = Route.useRouteContext();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="flex min-h-screen flex-col">
				<Nav />
				<main className="flex-1">
					<Outlet />
				</main>
				<Footer />
			</div>
		</QueryClientProvider>
	);
}
