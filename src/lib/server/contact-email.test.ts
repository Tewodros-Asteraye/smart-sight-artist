import { describe, expect, it, vi } from "vitest";
import { deliverContactInquiry, type ContactInquiry } from "./contact-email";

const inquiry: ContactInquiry = {
  name: "Amina Example",
  organization: "Climate Systems Ltd",
  email: "AMINA@example.org",
  phone: "+251 900 000 000",
  country: "Ethiopia",
  inquiryType: "Climate Project Development",
  projectStage: "Feasibility Assessment",
  message: "We are assessing a biogas concept.",
};

describe("deliverContactInquiry", () => {
  it("sends every field to the company inbox and only accepts a provider-confirmed id", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        new Response(JSON.stringify({ id: "resend-accepted-123" }), { status: 200 }),
      );

    const result = await deliverContactInquiry(inquiry, {
      apiKey: "server-test-key",
      fromEmail: "Africa Climate Actions <website@example.org>",
      fetcher,
      now: 100_000,
    });

    const [, request] = fetcher.mock.calls[0];
    const body = JSON.parse(String(request?.body)) as {
      to: string[];
      reply_to: string;
      subject: string;
      text: string;
    };

    expect(result).toEqual({ accepted: true });
    expect(fetcher).toHaveBeenCalledWith("https://api.resend.com/emails", expect.any(Object));
    expect(new Headers(request?.headers).get("Authorization")).toBe("Bearer server-test-key");
    expect(body.to).toEqual(["africaclimate568@gmail.com"]);
    expect(body.reply_to).toBe("amina@example.org");
    expect(body.subject).toBe("New Climate Project Inquiry — Africa Climate Actions PLC");
    expect(body.text).toContain("Full Name: Amina Example");
    expect(body.text).toContain("Organization: Climate Systems Ltd");
    expect(body.text).toContain("Work Email: amina@example.org");
    expect(body.text).toContain("Phone: +251 900 000 000");
    expect(body.text).toContain("Country: Ethiopia");
    expect(body.text).toContain("Inquiry Type: Climate Project Development");
    expect(body.text).toContain("Project Stage: Feasibility Assessment");
    expect(body.text).toContain("Message: We are assessing a biogas concept.");
  });

  it("does not report acceptance when the email provider rejects the request", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(new Response("rejected", { status: 422 }));

    await expect(
      deliverContactInquiry(
        { ...inquiry, email: "reject@example.org" },
        {
          apiKey: "server-test-key",
          fromEmail: "Africa Climate Actions <website@example.org>",
          fetcher,
          now: 200_000,
        },
      ),
    ).rejects.toThrow("Contact email provider rejected the inquiry.");
  });

  it("does not call the provider when server credentials are missing", async () => {
    const fetcher = vi.fn<typeof fetch>();

    await expect(
      deliverContactInquiry({ ...inquiry, email: "missing@example.org" }, { fetcher }),
    ).rejects.toThrow("Contact email service is not configured.");
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("blocks repeat submissions from the same address within the short duplicate window", async () => {
    const fetcher = vi
      .fn<typeof fetch>()
      .mockResolvedValue(
        new Response(JSON.stringify({ id: "resend-accepted-456" }), { status: 200 }),
      );
    const options = {
      apiKey: "server-test-key",
      fromEmail: "Africa Climate Actions <website@example.org>",
      fetcher,
      now: 300_000,
    };

    await deliverContactInquiry({ ...inquiry, email: "duplicate@example.org" }, options);
    await expect(
      deliverContactInquiry(
        { ...inquiry, email: "duplicate@example.org" },
        { ...options, now: 310_000 },
      ),
    ).rejects.toThrow("A recent inquiry from this address was already accepted.");
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
});
