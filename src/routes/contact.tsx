import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/contact")({ head: () => pageHead("contact"), component: () => <ContentPage pageKey="contact" /> });
