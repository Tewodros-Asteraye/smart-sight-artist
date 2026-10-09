import { createFileRoute } from "@tanstack/react-router";
import { WhyAfricaPage } from "@/components/engagement-pages";

export const Route = createFileRoute("/why-africa-climate-actions")({
  head: () => ({
    meta: [
      { title: "Why Africa Climate Actions | Africa Climate Actions PLC" },
      {
        name: "description",
        content:
          "Learn how Africa Climate Actions connects science, engineering, finance, digital technologies, local knowledge, and partnerships.",
      },
    ],
  }),
  component: WhyAfricaPage,
});
