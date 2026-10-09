import { createFileRoute } from "@tanstack/react-router";
import { CarbonMarketsPage } from "@/components/engagement-pages";

export const Route = createFileRoute("/carbon-markets")({
  head: () => ({
    meta: [
      { title: "Carbon Markets & Climate Finance | Africa Climate Actions PLC" },
      {
        name: "description",
        content:
          "Assess climate-project opportunities, carbon-market readiness, and climate-finance preparation with Africa Climate Actions PLC.",
      },
    ],
  }),
  component: CarbonMarketsPage,
});
