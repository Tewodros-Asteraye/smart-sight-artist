import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { LetsTalkPage } from "./engagement-pages";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

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

describe("Let’s Talk email inquiry functionality", () => {
  it("prepares a mailto link addressed to info@africaclimateactions.com with all submitted form fields", () => {
    render(<LetsTalkPage />);
    fillValidInquiry();

    fireEvent.submit(document.querySelector(".talk-form")!);

    // Confirms status message instructs user to click Send in their email app (does not claim auto-sent)
    expect(
      screen.getByText(/Your email draft has been prepared and opened in your email application/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Please review the details and click/i)).toBeInTheDocument();

    // Check that reopen link contains mailto URI with required fields
    const reopenLink = screen.getByRole("link", { name: /Click here to open email draft/i });
    expect(reopenLink).toBeInTheDocument();
    const href = reopenLink.getAttribute("href") || "";

    expect(href.startsWith("mailto:info@africaclimateactions.com?")).toBe(true);
    expect(decodeURIComponent(href)).toContain("Climate Project Inquiry: Climate Project Development — Amina Example (Climate Systems Ltd)");
    expect(decodeURIComponent(href)).toContain("Full Name: Amina Example");
    expect(decodeURIComponent(href)).toContain("Organization: Climate Systems Ltd");
    expect(decodeURIComponent(href)).toContain("Work Email: amina@example.org");
    expect(decodeURIComponent(href)).toContain("Phone Number: +251 900 000 000");
    expect(decodeURIComponent(href)).toContain("Country: Ethiopia");
    expect(decodeURIComponent(href)).toContain("Inquiry Type: Climate Project Development");
    expect(decodeURIComponent(href)).toContain("Project Stage: Feasibility Assessment");
    expect(decodeURIComponent(href)).toContain("We are assessing a biogas concept.");
  });

  it("requires consent checkbox before preparing the email inquiry", () => {
    render(<LetsTalkPage />);
    // Fill without checking the consent checkbox
    fireEvent.change(screen.getByLabelText("Full name *"), { target: { value: "Amina Example" } });
    fireEvent.change(screen.getByLabelText("Work email *"), { target: { value: "amina@example.org" } });
    fireEvent.change(screen.getByLabelText("Message *"), { target: { value: "Inquiry text" } });

    fireEvent.submit(document.querySelector(".talk-form")!);

    // Should not show prepared status
    expect(
      screen.queryByText(/Your email draft has been prepared and opened in your email application/i),
    ).not.toBeInTheDocument();
  });

  it("renders all four direct contact email addresses as clickable mailto links", () => {
    render(<LetsTalkPage />);

    const directContactAside = document.querySelector(".talk-direct-contact")!;
    expect(directContactAside).toBeInTheDocument();

    const infoLink = directContactAside.querySelector('a[href="mailto:info@africaclimateactions.com"]');
    expect(infoLink).toBeInTheDocument();

    const birukLink = directContactAside.querySelector('a[href="mailto:biruk@africaclimateactions.com"]');
    expect(birukLink).toBeInTheDocument();

    const projectsLink = directContactAside.querySelector('a[href="mailto:projects@africaclimateactions.com"]');
    expect(projectsLink).toBeInTheDocument();

    const partnershipsLink = directContactAside.querySelector('a[href="mailto:partnerships@africaclimateactions.com"]');
    expect(partnershipsLink).toBeInTheDocument();
  });
});
