import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/privacy")({ head: () => pageHead("privacy"), component: () => <ContentPage pageKey="privacy" /> });
