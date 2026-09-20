import { ReactNode } from "react";

type LinedHeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

const sizes = {
  h1: "text-[2.25rem] md:text-[2.3125rem] lg:text-6xl xl:text-7xl",
  h2: "text-[1.35rem] sm:text-[1.4rem] md:text-2xl lg:text-[1.575rem]",
  h3: "text-[1.875rem] sm:text-4xl md:text-[2.3125rem] lg:text-4xl xl:text-5xl",
};

export function LinedHeading({
  children,
  as: Tag = "h1",
  className = "",
}: LinedHeadingProps) {
  return (
    <Tag
      className={`lined uppercase leading-[1.25] tracking-tight ${sizes[Tag]} ${className}`}
    >
      {children}
    </Tag>
  );
}
