import { createFileRoute } from "@tanstack/react-router";
import { DigitalMrvPage } from "@/components/digital-mrv-page";

export const Route = createFileRoute("/digital-mrv")({
  head: () => ({
    meta: [
      { title: "Digital MRV & Climate Data | Africa Climate Actions PLC" },
      {
        name: "description",
        content:
          "Digital MRV and climate data solutions connecting field activities, GHG accounting, monitoring, analytics, reporting, and climate decision-making across Africa.",
      },
      {
        property: "og:title",
        content: "Digital MRV & Climate Data | Africa Climate Actions PLC",
      },
      {
        property: "og:description",
        content:
          "Connecting field activities, digital data, GHG accounting, monitoring, analytics, and reporting for practical climate action.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DigitalMrvPage,
});
