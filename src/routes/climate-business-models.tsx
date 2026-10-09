import { createFileRoute } from "@tanstack/react-router";
import { ClimateBusinessModelsPage } from "@/components/engagement-pages";

export const Route = createFileRoute("/climate-business-models")({
  head: () => ({
    meta: [
      { title: "Climate Business Models | Africa Climate Actions PLC" },
      {
        name: "description",
        content:
          "Explore business models connecting climate technologies, market needs, practical implementation, and long-term value.",
      },
    ],
  }),
  component: ClimateBusinessModelsPage,
});
