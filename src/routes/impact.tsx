import { createFileRoute } from "@tanstack/react-router";
import { ImpactPrioritiesPage } from "@/components/engagement-pages";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact Priorities | Africa Climate Actions PLC" },
      {
        name: "description",
        content:
          "Explore Africa Climate Actions PLC’s intended climate, economic, agricultural, data, and development impact priorities.",
      },
    ],
  }),
  component: ImpactPrioritiesPage,
});
