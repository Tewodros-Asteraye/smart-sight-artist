import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/partners")({ head: () => pageHead("partners"), component: () => <ContentPage pageKey="partners" /> });
