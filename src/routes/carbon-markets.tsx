import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/carbon-markets")({ head: () => pageHead("carbon-markets"), component: () => <ContentPage pageKey="carbon-markets" /> });
