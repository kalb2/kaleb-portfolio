import Image from "next/image";
import { ProjectRail } from "@/components/ProjectRail";
import { SectionBreak } from "@/components/SectionBreak";
import { TitleBar } from "@/components/TitleBar";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <TitleBar text="Welcome" />
      <section className="grid min-h-[calc(100svh-6.5rem)] grid-cols-[1fr_3fr_2fr] grid-rows-[1fr_auto] md:min-h-[calc(100vh-8.25rem)]">
        <div className="row-span-1 border-b border-r border-black sm:row-span-2" />
        <div className="border-b border-r border-black" />
        <div className="border-b border-black" />
        <div className="col-span-2 flex flex-col justify-end border-b border-r border-black sm:col-span-1">
          <h1 className="lined px-1 text-[2.25rem] uppercase leading-[1.25] tracking-tight md:text-[2.3125rem] lg:text-6xl xl:text-7xl">
            Enterprise
            <br />
            CSM Who
            <br />
            Builds
          </h1>
          <p className="border-t border-black px-3 py-3 font-mono text-xs uppercase tracking-[0.18em] sm:text-sm">
            {site.company} · {site.location} · Side projects that ship
          </p>
        </div>
        <div className="flex items-center justify-center border-b border-black p-5">
          <Image
            src="/kj-mark.svg"
            alt=""
            width={180}
            height={120}
            className="w-3/4 max-w-[180px]"
          />
        </div>
      </section>
      <SectionBreak />
      <TitleBar text="Recent Projects" />
      <ProjectRail />
    </>
  );
}
