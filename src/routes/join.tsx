import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Archive — MIB Conference" },
      {
        name: "description",
        content: "Past MIB Conference events.",
      },
    ],
  }),
  component: Join,
});

function Join() {
  return (
    <PageHeader
      eyebrow="Archive"
      title={<>Past events.</>}
      lede="Details from previous conferences will be posted here."
    />
  );
}
