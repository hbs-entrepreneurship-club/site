import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/people")({
  head: () => ({
    meta: [
      { title: "Team — MIB Conference" },
      {
        name: "description",
        content: "The team behind the MIB Conference.",
      },
    ],
  }),
  component: People,
});

function People() {
  return (
    <PageHeader
      eyebrow="Team"
      title={<>The team behind the conference.</>}
      lede="Organizing committee details coming soon."
    />
  );
}
