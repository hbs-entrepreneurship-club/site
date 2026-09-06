import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/speakers")({
	component: SpeakersLayout,
});

function SpeakersLayout() {
	return <Outlet />;
}
