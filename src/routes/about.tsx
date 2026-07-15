import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sponsors — MIB Conference" },
      {
        name: "description",
        content: "Sponsors of the MIB Conference 2026.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageHeader
      eyebrow="Sponsors"
      title={<>Coming soon.</>}
      lede="Sponsor details will be announced closer to the event."
    />
  );
}
