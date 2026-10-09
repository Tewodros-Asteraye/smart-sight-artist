import { createFileRoute } from "@tanstack/react-router";
import { SolutionsPage } from "@/components/solutions-page";
export const Route = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Africa Climate Actions PLC | Climate Solutions Built for Africa" },
			{ name: "description", content: "Africa Climate Actions PLC develops practical climate solutions across renewable energy, biogas, climate-smart agriculture, circular resource recovery, carbon markets, climate finance, digital MRV, and climate analytics." },
			{ property: "og:title", content: "Africa Climate Actions PLC | Climate Solutions Built for Africa" },
			{ property: "og:description", content: "Connected climate solutions across agriculture, energy, finance, data, and technology." },
			{ property: "og:type", content: "website" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
	}),
	component: SolutionsPage,
});
