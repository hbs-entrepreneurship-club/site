import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-chrome-CL-1-e9Q.js
var import_jsx_runtime = require_jsx_runtime();
var EVENTBRITE_URL = "https://www.eventbrite.com/e/entrepreneurship-summit-2026-tickets-1983422470000";
var EVENT_HUB_URL = "https://events.hbs.edu/event/entrepreneurship-summit-2026";
function Mark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.jpeg",
		alt: "MIB Conference",
		className: "h-9 w-9 rounded-md object-cover"
	});
}
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/summit",
		label: "2026 Speakers"
	},
	{
		to: "/people",
		label: "Team"
	},
	{
		to: "/about",
		label: "Sponsors"
	},
	{
		to: "/join",
		label: "Archive"
	}
];
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-base font-semibold",
							children: "MIB Conference"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
							children: "2026"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: { className: "text-blue border-b-2 border-blue pb-0.5 -mb-0.5" },
						inactiveProps: { className: "text-foreground/80 hover:text-blue" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: EVENTBRITE_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "hidden rounded-full bg-blue px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep md:inline-flex",
					children: "Join Waitlist →"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/60 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-6xl gap-5 overflow-x-auto px-6 py-3 text-sm",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					activeOptions: { exact: item.to === "/" },
					activeProps: { className: "text-blue font-medium" },
					inactiveProps: { className: "text-foreground/80" },
					children: item.label
				}, item.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif",
						children: "MIB Conference"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "Harvard Business School · Boston, MA"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" — MIB Conference"
				]
			})]
		})
	});
}
function PageHeader({ eyebrow, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-20 md:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-5",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl",
					children: title
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl",
					children: lede
				}) : null
			]
		})
	});
}
//#endregion
export { PageHeader as a, Nav as i, EVENT_HUB_URL as n, Footer as r, EVENTBRITE_URL as t };
