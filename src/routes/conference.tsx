import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conference")({
	beforeLoad: () => {
		throw redirect({
			to: "/",
			replace: true,
			statusCode: 301,
		});
	},
});
