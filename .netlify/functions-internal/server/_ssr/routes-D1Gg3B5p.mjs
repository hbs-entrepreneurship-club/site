import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as EVENTBRITE_URL } from "./site-chrome-CL-1-e9Q.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D1Gg3B5p.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-24 md:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mb-5",
					children: "Harvard Business School"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl",
					children: ["MIB Conference ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "2026"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 space-y-3 font-mono text-sm",
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: EVENTBRITE_URL,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-blue px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-blue-deep",
						children: ["Join Waitlist ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							children: "→"
						})]
					})
				})
			]
		})
	});
}
//#endregion
export { Home as component };
