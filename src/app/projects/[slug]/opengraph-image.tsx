import { getProject, projects } from "@/data/projects";
import { site } from "@/data/site";
import { ogCard, ogSize } from "@/lib/og";

export const alt = `${site.name} case study`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

/** Split a title into short lines for the lined headline. */
function toLines(title: string) {
  const words = title.split(" ");
  const lines: string[] = [];
  for (const word of words) {
    const last = lines[lines.length - 1];
    if (last && `${last} ${word}`.length <= 11) {
      lines[lines.length - 1] = `${last} ${word}`;
    } else {
      lines.push(word);
    }
  }
  return lines;
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Projects";
  return ogCard({
    label: project ? `Case study ${project.number}` : "Case study",
    lines: toLines(title),
    footer: `${site.name} · ${site.role} · kalebjensen.com`,
  });
}
