"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/data/site";
import { MenuIcon } from "./MenuIcon";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      // Return keyboard focus to the toggle when the menu closes.
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 flex h-[3.25rem] w-full border-b border-black bg-white">
      <Link
        href="/"
        className="flex h-full items-center border-r border-black px-4"
        aria-label={`${site.name} home`}
      >
        <Image
          src="/kj-logo.svg"
          alt={site.name}
          width={120}
          height={42}
          priority
          className="h-8 w-auto"
        />
      </Link>

      <div className="flex flex-1 items-center justify-end px-2">
        <Link
          href="/contact"
          className="bg-black px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-black"
        >
          Contact
        </Link>
      </div>

      <div className="hidden h-full items-center gap-3 border-l border-black px-3 lg:flex">
        <a
          href={site.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/linkedin.png" alt="" width={28} height={28} />
          <span className="sr-only">LinkedIn (opens in a new tab)</span>
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/github-mark.svg" alt="" width={26} height={26} />
          <span className="sr-only">GitHub (opens in a new tab)</span>
        </a>
      </div>

      <nav aria-label="Primary" className="contents">
        {navLinks
          .filter((link) => link.href !== "/")
          .map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`hidden h-full items-center border-l border-black px-5 hover:bg-black hover:text-white md:flex ${
                  active ? "bg-black text-white" : "bg-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
      </nav>

      <button
        ref={menuButtonRef}
        type="button"
        className="group flex h-full w-16 items-center justify-center border-l border-black hover:bg-black"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <MenuIcon open={open} />
      </button>

      {open && (
        <nav
          id="site-menu"
          aria-label="Site menu"
          className="fixed inset-0 top-[3.25rem] z-40 bg-white md:left-auto md:w-1/3 md:border-l md:border-black"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex h-[3.25rem] items-center justify-between border-b border-black hover:bg-black hover:text-white"
            >
              <span className="flex h-full flex-1 items-end border-r border-black px-3 text-4xl uppercase leading-none tracking-tighter hover:border-white">
                {link.label}
              </span>
              <span className="flex h-full w-16 items-center justify-center font-mono text-lg">
                {String(index + 1).padStart(3, "0")}
              </span>
            </Link>
          ))}
          <div className="flex divide-x divide-black border-b border-black">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center py-4 uppercase after:ml-2 after:content-['↗']"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center py-4 uppercase after:ml-2 after:content-['↗']"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
