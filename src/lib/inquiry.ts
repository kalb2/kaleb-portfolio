export const inquiryTypes = ["Job opportunity", "Side project", "Other"] as const;
export type InquiryType = (typeof inquiryTypes)[number];
export type Inquiry = { name: string; email: string; type: InquiryType; message: string };

export function formspreeEndpoint(formId: string) {
  const id = formId.trim();
  return /^[a-z0-9_-]+$/i.test(id) ? `https://formspree.io/f/${id}` : "";
}

export function buildInquiryPayload(inquiry: Inquiry, honeypot = "") {
  return {
    name: inquiry.name.trim(),
    email: inquiry.email.trim(),
    type: inquiry.type,
    message: inquiry.message.trim(),
    _subject: `kalebjensen.com inquiry: ${inquiry.type}`,
    _gotcha: honeypot,
  };
}
