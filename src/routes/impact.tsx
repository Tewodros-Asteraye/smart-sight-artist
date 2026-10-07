import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/impact")({ head: () => pageHead("impact"), component: () => <ContentPage pageKey="impact" /> });
