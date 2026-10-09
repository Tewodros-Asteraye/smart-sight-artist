import { createFileRoute } from "@tanstack/react-router";
import { PartnersEngagementPage } from "@/components/engagement-pages";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Engagement | Africa Climate Actions PLC" },
      {
        name: "description",
        content:
          "Explore collaboration areas connecting institutions, research, finance, technology, development, and local knowledge.",
      },
    ],
  }),
  component: PartnersEngagementPage,
});
