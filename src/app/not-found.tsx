import Link from "next/link";
import { TitleBar } from "@/components/TitleBar";

export default function NotFound() {
  return (
    <>
      <TitleBar text="404" />
      <section className="flex min-h-[50vh] flex-col items-start justify-center border-b border-black p-8">
        <h2 className="lined mb-6 text-4xl uppercase">Page not found</h2>
        <Link
          href="/"
          className="bg-black px-4 py-2 font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black"
        >
          Back home
        </Link>
      </section>
    </>
  );
}
