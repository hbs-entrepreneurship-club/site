import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as PageHeader, n as EVENT_HUB_URL, t as EVENTBRITE_URL } from "./site-chrome-CL-1-e9Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/summit-CU1psh7z.js
var import_jsx_runtime = require_jsx_runtime();
function Summit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		eyebrow: "2026 Speakers",
		title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Speakers to be announced." }),
		lede: "Speaker details will be published on Eventbrite as they're confirmed."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-card/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-3 font-mono text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground w-24",
							children: "Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sunday, November 22, 2026" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground w-24",
							children: "Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Harvard Business School, Boston, MA" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground w-24",
							children: "Capacity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "~400 attendees" })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: EVENTBRITE_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep",
					children: "Join Waitlist →"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: EVENT_HUB_URL,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:bg-accent",
					children: "HBS event page"
				})]
			})]
		})
	})] });
}
//#endregion
export { Summit as component };
