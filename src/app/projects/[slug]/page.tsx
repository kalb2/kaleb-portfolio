import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CardHandles } from "@/components/CardHandles";
import { ProjectPattern } from "@/components/ProjectPattern";
import { SectionBreak } from "@/components/SectionBreak";
import { TitleBar } from "@/components/TitleBar";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <>
      <TitleBar text={project.number} />
      <section className="grid border-b border-black md:grid-cols-[1fr_3fr_2fr]">
        <div className="hidden border-r border-black p-4 md:block">
          <p className="font-mono text-xs uppercase tracking-widest">
            Case study
          </p>
        </div>
        <div className="border-b border-black p-4 md:border-b-0 md:border-r">
          <h2 className="text-2xl uppercase">{project.title}</h2>
        </div>
        <div className="p-4">
          <p className="font-mono text-xs uppercase tracking-widest">
            {project.angle}
          </p>
        </div>
      </section>
      <section className="grid border-b border-black lg:grid-cols-[2fr_3fr]">
        <div className="border-b border-black p-6 lg:border-b-0 lg:border-r">
          <div className="relative mx-auto max-w-md outline outline-1 outline-black">
            <CardHandles />
            <div className="relative h-0 pt-[120%]">
              <div className="absolute inset-0">
                <ProjectPattern
                  pattern={project.pattern}
                  number={project.number}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-[auto_1fr_auto]">
          <h3 className="lined border-b border-black px-4 py-2 text-[1.875rem] uppercase leading-[1.25] sm:text-4xl">
            {project.tagline}
          </h3>
          <div className="grid gap-8 p-6 md:grid-cols-3">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest">
                Problem
              </p>
              <p className="leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest">
                What he built
              </p>
              <p className="leading-relaxed">{project.built}</p>
            </div>
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-widest">
                Outcome
              </p>
              <p className="leading-relaxed">{project.outcome}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-black p-4">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="border border-black px-2 py-1 font-mono text-xs uppercase"
              >
                {tool}
              </span>
            ))}
            <div className="ml-auto flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs uppercase tracking-widest after:ml-1 after:content-['↗'] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SectionBreak />
      <nav className="grid grid-cols-2 border-b border-black">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="border-r border-black p-5 hover:bg-black hover:text-white"
          >
            <p className="font-mono text-xs uppercase">Previous</p>
            <p className="text-xl uppercase tracking-tighter">
              {previous.title}
            </p>
          </Link>
        ) : (
          <div className="border-r border-black p-5" />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="p-5 text-right hover:bg-black hover:text-white"
          >
            <p className="font-mono text-xs uppercase">Next</p>
            <p className="text-xl uppercase tracking-tighter">{next.title}</p>
          </Link>
        ) : (
          <Link
            href="/contact"
            className="p-5 text-right hover:bg-black hover:text-white"
          >
            <p className="font-mono text-xs uppercase">Next</p>
            <p className="text-xl uppercase tracking-tighter">Contact</p>
          </Link>
        )}
      </nav>
    </>
  );
}
