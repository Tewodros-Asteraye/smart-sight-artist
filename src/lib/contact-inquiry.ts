import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { deliverContactInquiry } from "@/lib/server/contact-email";

const submissionSchema = z.object({
  name: z.string().trim().min(1).max(120),
  organization: z.string().trim().max(200),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(80),
  country: z.string().trim().max(120),
  inquiryType: z.string().trim().min(1).max(100),
  projectStage: z.string().trim().max(100),
  message: z.string().trim().min(1).max(10_000),
  consent: z.literal(true),
  website: z.string().max(200),
});

export const submitContactInquiry = createServerFn({ method: "POST" })
  .validator(submissionSchema)
  .handler(async ({ data }) => {
    if (data.website) return { accepted: false as const };

    try {
      await deliverContactInquiry(data);
      return { accepted: true as const };
    } catch {
      return { accepted: false as const };
    }
  });
