import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/digital-mrv")({ head: () => pageHead("digital-mrv"), component: () => <ContentPage pageKey="digital-mrv" /> });
