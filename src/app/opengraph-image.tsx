import { site } from "@/data/site";
import { ogCard, ogSize } from "@/lib/og";

export const alt = `${site.name} | Enterprise CSM Who Builds`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogCard({
    label: site.role,
    lines: ["Enterprise", "CSM Who", "Builds"],
    footer: `${site.company} · ${site.location} · kalebjensen.com`,
  });
}
