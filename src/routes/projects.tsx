import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/projects-page";
export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Africa Climate Actions PLC" },
      {
        name: "description",
        content:
          "Explore Africa Climate Actions PLC projects connecting climate technology, agriculture, renewable energy, digital MRV, climate finance, and practical solutions for Africa.",
      },
      { property: "og:title", content: "Projects | Africa Climate Actions PLC" },
      {
        property: "og:description",
        content:
          "Projects that connect energy, agriculture, climate finance, engineering, and digital systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});
