import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/summit")({
	beforeLoad: () => {
		throw redirect({
			to: "/conference",
			replace: true,
			statusCode: 301,
		});
	},
});
