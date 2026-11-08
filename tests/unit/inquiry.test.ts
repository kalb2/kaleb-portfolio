import { describe, expect, it } from "vitest";
import { buildInquiryPayload, formspreeEndpoint, inquiryTypes } from "@/lib/inquiry";

const inquiry = { name: " Alex Example ", email: " alex@example.com ", type: "Side project" as const, message: " Need a dashboard.\nTools: HubSpot & Sheets? " };

describe("inquiry delivery", () => {
  it("uses only a Formspree id to build the endpoint", () => {
    expect(formspreeEndpoint(" xyzabcd ")).toBe("https://formspree.io/f/xyzabcd");
    for (const invalid of ["", " ", "https://example.com", "../other", "id?extra=value"]) {
      expect(formspreeEndpoint(invalid)).toBe("");
    }
  });

  it("trims fields and includes the subject and empty spam trap", () => {
    expect(buildInquiryPayload(inquiry)).toEqual({
      name: "Alex Example", email: "alex@example.com", type: "Side project",
      message: "Need a dashboard.\nTools: HubSpot & Sheets?",
      _subject: "kalebjensen.com inquiry: Side project", _gotcha: "",
    });
  });

  it.each(inquiryTypes)("supports %s inquiries", (type) => {
    expect(buildInquiryPayload({ ...inquiry, type })._subject).toBe(`kalebjensen.com inquiry: ${type}`);
  });
});
