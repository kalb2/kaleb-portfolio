type TitleBarProps = {
  text: string;
  /** Heading level. Pages keep one h1; later title bars use h2. */
  as?: "h1" | "h2" | "p";
};

export function TitleBar({ text, as: Tag = "h1" }: TitleBarProps) {
  return (
    <div className="flex w-full border-b border-black bg-white pl-3">
      <Tag className="text-[2.25rem] uppercase leading-[1.25] tracking-tighter md:text-[2.3125rem] lg:text-6xl xl:text-7xl">
        {text}
      </Tag>
    </div>
  );
}
