import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/projects")({ head: () => pageHead("projects"), component: () => <ContentPage pageKey="projects" /> });
