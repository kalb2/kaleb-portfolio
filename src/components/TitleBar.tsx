type TitleBarProps = {
  text: string;
};

export function TitleBar({ text }: TitleBarProps) {
  return (
    <div className="flex w-full border-b border-black bg-white pl-3">
      <h1 className="text-[2.25rem] uppercase leading-[1.25] tracking-tighter md:text-[2.3125rem] lg:text-6xl xl:text-7xl">
        {text}
      </h1>
    </div>
  );
}
