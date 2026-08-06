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
				<div className="font-mono text-sm font-medium text-crimson">404</div>
				<h1 className="mt-3 font-serif text-4xl font-medium text-foreground">Page not found</h1>
				<p className="mt-3 text-sm leading-relaxed text-muted-foreground">
					The page you're looking for doesn't exist or has been moved.
				</p>
				<div className="mt-8">
					<Link
						to="/"
						className="inline-flex items-center justify-center rounded bg-crimson px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
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
				<h1 className="font-serif text-2xl font-medium tracking-tight text-foreground">
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
						className="inline-flex items-center justify-center rounded bg-crimson px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-crimson-deep"
					>
						Try again
					</button>
					<a
						href="/"
						className="inline-flex items-center justify-center rounded border border-border bg-card px-5 py-2.5 text-sm font-medium transition hover:border-crimson/40"
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
			{ title: "HBS Entrepreneurship Club" },
			{
				name: "description",
				content: "The Entrepreneurship Club at Harvard Business School.",
			},
			{ property: "og:title", content: "HBS Entrepreneurship Club" },
			{
				property: "og:description",
				content: "Founders at Harvard Business School.",
			},
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
		links: [
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{ rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
			},
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/png", href: "/logo.png" },
			{ rel: "apple-touch-icon", href: "/logo.png" },
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
