import { createFileRoute } from "@tanstack/react-router";
import { LetsTalkPage } from "@/components/engagement-pages";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Africa Climate Actions PLC | Let’s Talk" },
      {
        name: "description",
        content:
          "Tell Africa Climate Actions PLC about your climate challenge, project idea, business opportunity, research interest, or partnership proposal.",
      },
    ],
  }),
  component: LetsTalkPage,
});
