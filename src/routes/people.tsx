import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/people")({
	beforeLoad: () => {
		throw redirect({
			to: "/team",
			replace: true,
			statusCode: 301,
		});
	},
});
