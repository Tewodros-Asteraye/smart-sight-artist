import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/about")({ head: () => pageHead("about"), component: () => <ContentPage pageKey="about" /> });
