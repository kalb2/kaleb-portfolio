import { ReactNode } from "react";

type SplitLink = {
  href: string;
  label: string;
  external?: boolean;
};

type SplitGridProps = {
  leftTitle: string;
  rightTitle: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  children: ReactNode;
  links: SplitLink[];
};

export function SplitGrid({
  leftTitle,
  rightTitle,
  imageSrc,
  imageAlt,
  subtitle,
  children,
  links,
}: SplitGridProps) {
  return (
    <section className="flex flex-col border-b border-black md:grid md:min-h-[calc(100vh-8rem)] md:grid-cols-[1fr_3fr_2fr] md:grid-rows-[auto_auto_1fr_auto] md:border-r">
      <div className="hidden items-center border-b border-r border-black pl-3 md:flex">
        <h2 className="text-[1.35rem] uppercase leading-[1.25] md:text-2xl">
          {leftTitle}
        </h2>
      </div>
      <div className="flex min-h-10 items-center border-b border-black pl-3 md:border-r">
        <h2 className="text-[1.35rem] uppercase leading-[1.25] md:text-2xl">
          {rightTitle}
        </h2>
      </div>
      <div
        className="order-first min-h-[50vh] bg-cover bg-center md:order-none md:row-span-4 md:min-h-full"
        style={{ backgroundImage: `url(${imageSrc})` }}
        role="img"
        aria-label={imageAlt}
      />
      <div className="hidden border-b border-r border-black md:block" />
      <div className="border-b border-black md:border-r">
        <h3 className="lined px-3 text-[1.875rem] uppercase leading-[1.25] sm:text-4xl md:text-[2.3125rem] xl:text-5xl">
          {subtitle}
        </h3>
      </div>
      <div className="hidden border-r border-black md:row-span-2 md:block" />
      <div className="columns-1 gap-8 p-5 md:columns-2 md:border-r md:p-8">
        {children}
      </div>
      <div className="flex divide-x divide-black border-t border-black md:border-r">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            className="flex min-h-10 flex-1 items-center justify-center py-3 uppercase after:ml-2 after:text-2xl after:content-['↗'] hover:bg-black hover:text-white sm:after:text-4xl"
          >
            <span className="text-[1.35rem] leading-none md:text-2xl">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
