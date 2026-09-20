export function SectionBreak() {
  return (
    <div className="grid w-full grid-cols-3 border-b border-black">
      <div className="min-h-[calc(9vw+3vh)] border-r border-black" />
      <div className="min-h-[calc(9vw+3vh)] border-r border-black" />
      <div className="min-h-[calc(9vw+3vh)]" />
    </div>
  );
}
