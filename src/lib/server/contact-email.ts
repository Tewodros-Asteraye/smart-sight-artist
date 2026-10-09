export type ContactInquiry = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  country: string;
  inquiryType: string;
  projectStage: string;
  message: string;
};

type DeliveryOptions = {
  apiKey?: string;
  fromEmail?: string;
  fetcher?: typeof fetch;
  now?: number;
};

const inbox = "africaclimate568@gmail.com";
const duplicateWindowMs = 30_000;
const recentSubmissions = new Map<string, number>();

function readServerEnvironment() {
  const runtime = globalThis as typeof globalThis & {
    __env__?: Record<string, string | undefined>;
    process?: { env?: Record<string, string | undefined> };
  };
  return { ...runtime.process?.env, ...runtime.__env__ };
}

function cleanText(value: string) {
  return value.trim();
}

function formatEmail(inquiry: ContactInquiry) {
  const fields: [string, string][] = [
    ["Full Name", inquiry.name],
    ["Organization", inquiry.organization],
    ["Work Email", inquiry.email],
    ["Phone", inquiry.phone],
    ["Country", inquiry.country],
    ["Inquiry Type", inquiry.inquiryType],
    ["Project Stage", inquiry.projectStage],
    ["Message", inquiry.message],
  ];

  return fields.map(([label, value]) => `${label}: ${value || "Not provided"}`).join("\n\n");
}

export async function deliverContactInquiry(
  inquiry: ContactInquiry,
  options: DeliveryOptions = {},
) {
  const serverEnv = readServerEnvironment();
  const apiKey = options.apiKey ?? serverEnv?.RESEND_API_KEY;
  const fromEmail = options.fromEmail ?? serverEnv?.RESEND_FROM_EMAIL;
  const fetcher = options.fetcher ?? fetch;
  const now = options.now ?? Date.now();

  if (!apiKey || !fromEmail) {
    throw new Error("Contact email service is not configured.");
  }

  const normalizedEmail = cleanText(inquiry.email).toLowerCase();
  const lastSubmission = recentSubmissions.get(normalizedEmail);
  if (lastSubmission !== undefined && now - lastSubmission < duplicateWindowMs) {
    throw new Error("A recent inquiry from this address was already accepted.");
  }

  for (const [email, timestamp] of recentSubmissions) {
    if (now - timestamp >= duplicateWindowMs) recentSubmissions.delete(email);
  }
  if (recentSubmissions.size >= 1000) {
    const oldest = recentSubmissions.keys().next().value;
    if (oldest) recentSubmissions.delete(oldest);
  }

  const response = await fetcher("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [inbox],
      reply_to: normalizedEmail,
      subject: "New Climate Project Inquiry — Africa Climate Actions PLC",
      text: formatEmail({
        name: cleanText(inquiry.name),
        organization: cleanText(inquiry.organization),
        email: normalizedEmail,
        phone: cleanText(inquiry.phone),
        country: cleanText(inquiry.country),
        inquiryType: cleanText(inquiry.inquiryType),
        projectStage: cleanText(inquiry.projectStage),
        message: cleanText(inquiry.message),
      }),
    }),
  });

  if (!response.ok) {
    throw new Error("Contact email provider rejected the inquiry.");
  }

  const result: unknown = await response.json();
  if (
    !result ||
    typeof result !== "object" ||
    !("id" in result) ||
    typeof result.id !== "string" ||
    !result.id
  ) {
    throw new Error("Contact email provider did not confirm acceptance.");
  }

  recentSubmissions.set(normalizedEmail, now);
  return { accepted: true as const };
}
