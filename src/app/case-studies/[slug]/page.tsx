import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CareerCaseStudyView } from "@/components/CareerCaseStudyView";
import { SectionBreak } from "@/components/SectionBreak";
import { TitleBar } from "@/components/TitleBar";
import {
  careerCaseStudies,
  getCareerCaseStudy,
} from "@/data/careerCaseStudies";
import { pageMetadata } from "@/lib/metadata";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return careerCaseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCareerCaseStudy(slug);
  if (!study) return { title: "Case Study" };
  return pageMetadata({
    title: `${study.company} Case Study`,
    description: study.summary,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CareerCaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCareerCaseStudy(slug);
  if (!study) notFound();

  const index = careerCaseStudies.findIndex((item) => item.slug === study.slug);
  const previous = index > 0 ? careerCaseStudies[index - 1] : null;
  const next =
    index < careerCaseStudies.length - 1
      ? careerCaseStudies[index + 1]
      : null;

  return (
    <>
      <TitleBar text={study.company} />
      <CareerCaseStudyView study={study} />
      <SectionBreak />
      <nav aria-label="Case study pagination" className="grid grid-cols-2 border-b border-black">
        {previous ? (
          <Link
            href={`/case-studies/${previous.slug}`}
            className="border-r border-black p-5 hover:bg-black hover:text-white"
          >
            <p className="font-mono text-xs uppercase">Previous</p>
            <p className="text-xl uppercase tracking-tighter">
              {previous.company}
            </p>
          </Link>
        ) : (
          <div className="border-r border-black p-5" />
        )}
        {next ? (
          <Link
            href={`/case-studies/${next.slug}`}
            className="p-5 text-right hover:bg-black hover:text-white"
          >
            <p className="font-mono text-xs uppercase">Next</p>
            <p className="text-xl uppercase tracking-tighter">{next.company}</p>
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
