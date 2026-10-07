import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/why-africa-climate-actions")({ head: () => pageHead("why-africa-climate-actions"), component: () => <ContentPage pageKey="why-africa-climate-actions" /> });
