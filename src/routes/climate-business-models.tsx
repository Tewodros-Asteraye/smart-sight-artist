import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, pageHead } from "@/components/content-page";
export const Route = createFileRoute("/climate-business-models")({ head: () => pageHead("climate-business-models"), component: () => <ContentPage pageKey="climate-business-models" /> });
