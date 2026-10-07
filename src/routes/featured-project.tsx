import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/featured-project")({ head: () => pageHead("featured-project"), component: () => <ContentPage pageKey="featured-project" /> });
