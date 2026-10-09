import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/about-page";
import { pageHead } from "@/components/content-page";

export const Route = createFileRoute("/about")({
  head: () => pageHead("about"),
  component: AboutPage,
});
