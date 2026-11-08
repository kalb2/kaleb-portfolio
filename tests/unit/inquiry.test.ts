import { describe, expect, it } from "vitest";
import { site } from "@/data/site";
import { buildInquiryMailto, inquiryTypes } from "@/lib/inquiry";

const inquiry = { name: " Alex Example ", email: " alex@example.com ", type: "Side project" as const, message: " Need a dashboard.\nTools: HubSpot & Sheets? " };

describe("inquiry draft", () => {
  it("uses the existing contact address and trims fields", () => {
    const url = new URL(buildInquiryMailto(inquiry));
    expect(url.protocol).toBe("mailto:");
    expect(url.pathname).toBe(site.email);
    expect(url.searchParams.get("subject")).toBe("Website inquiry: Side project - Alex Example");
    expect(url.searchParams.get("body")).toBe("Name: Alex Example\nEmail: alex@example.com\nType: Side project\n\nNeed a dashboard.\nTools: HubSpot & Sheets?");
  });

  it("encodes punctuation and Unicode without introducing headers", () => {
    const url = new URL(buildInquiryMailto({ ...inquiry, name: "Zoë & Co?\r\nBcc: nobody@example.com", message: "hello &bcc=nobody@example.com # + %" }));
    expect([...url.searchParams.keys()]).toEqual(["subject", "body"]);
    expect(url.searchParams.get("subject")).not.toMatch(/[\r\n]/);
    expect(url.searchParams.get("body")).toContain("hello &bcc=nobody@example.com # + %");
  });

  it.each(inquiryTypes)("supports %s inquiries", (type) => {
    expect(new URL(buildInquiryMailto({ ...inquiry, type })).searchParams.get("subject")).toContain(type);
  });
});
