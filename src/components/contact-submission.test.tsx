import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { LetsTalkPage } from "./engagement-pages";
import { submitContactInquiry } from "@/lib/contact-inquiry";

vi.mock("@/lib/contact-inquiry", () => ({
  submitContactInquiry: vi.fn(),
}));

vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

const acceptedMessage =
  "Thank you. Your inquiry has been sent successfully to Africa Climate Actions PLC. Our team will review it and get back to you.";
const failedMessage =
  "We could not send your inquiry right now. Please try again or contact us directly at africaclimate568@gmail.com.";

function fillValidInquiry() {
  fireEvent.change(screen.getByLabelText("Full name *"), { target: { value: "Amina Example" } });
  fireEvent.change(screen.getByLabelText("Organization"), {
    target: { value: "Climate Systems Ltd" },
  });
  fireEvent.change(screen.getByLabelText("Work email *"), {
    target: { value: "amina@example.org" },
  });
  fireEvent.change(screen.getByLabelText("Phone number"), {
    target: { value: "+251 900 000 000" },
  });
  fireEvent.change(screen.getByLabelText("Country"), { target: { value: "Ethiopia" } });
  fireEvent.change(screen.getByLabelText("Inquiry type *"), {
    target: { value: "Climate Project Development" },
  });
  fireEvent.change(screen.getByLabelText("Project stage"), {
    target: { value: "Feasibility Assessment" },
  });
  fireEvent.change(screen.getByLabelText("Message *"), {
    target: { value: "We are assessing a biogas concept." },
  });
  fireEvent.click(screen.getByRole("checkbox"));
}

describe("Let’s Talk inquiry submission", () => {
  beforeEach(() => {
    vi.mocked(submitContactInquiry).mockReset();
  });

  it("shows success only after the server confirms acceptance and sends every form field", async () => {
    vi.mocked(submitContactInquiry).mockResolvedValue({ accepted: true } as never);
    render(<LetsTalkPage />);
    fillValidInquiry();
    fireEvent.submit(document.querySelector(".talk-form")!);

    expect(await screen.findByText(acceptedMessage)).toBeInTheDocument();
    expect(submitContactInquiry).toHaveBeenCalledWith({
      data: {
        name: "Amina Example",
        organization: "Climate Systems Ltd",
        email: "amina@example.org",
        phone: "+251 900 000 000",
        country: "Ethiopia",
        inquiryType: "Climate Project Development",
        projectStage: "Feasibility Assessment",
        message: "We are assessing a biogas concept.",
        consent: true,
        website: "",
      },
    });
  });

  it("shows the requested error and never success when server delivery is rejected", async () => {
    vi.mocked(submitContactInquiry).mockResolvedValue({ accepted: false } as never);
    render(<LetsTalkPage />);
    fillValidInquiry();
    fireEvent.submit(document.querySelector(".talk-form")!);

    expect(await screen.findByText(failedMessage)).toBeInTheDocument();
    expect(screen.queryByText(acceptedMessage)).not.toBeInTheDocument();
  });
});
