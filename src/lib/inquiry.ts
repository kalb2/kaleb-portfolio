import { site } from "@/data/site";

export const inquiryTypes = ["Job opportunity", "Side project", "Other"] as const;
export type InquiryType = (typeof inquiryTypes)[number];
export type Inquiry = { name: string; email: string; type: InquiryType; message: string };

/** Encode each field as data, never as extra mailto headers or recipients. */
export function buildInquiryMailto(inquiry: Inquiry) {
  const name = inquiry.name.trim().replace(/[\r\n]+/g, " ");
  const email = inquiry.email.trim().replace(/[\r\n]+/g, "");
  const subject = `Website inquiry: ${inquiry.type} - ${name}`;
  const body = `Name: ${name}\nEmail: ${email}\nType: ${inquiry.type}\n\n${inquiry.message.trim()}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
