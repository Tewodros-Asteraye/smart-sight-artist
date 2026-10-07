import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/services")({ head: () => pageHead("services"), component: () => <ContentPage pageKey="services" /> });
