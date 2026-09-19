type MenuIconProps = {
  open: boolean;
};

export function MenuIcon({ open }: MenuIconProps) {
  return (
    <div
      className="flex h-6 w-6 flex-col justify-between"
      aria-hidden="true"
    >
      <span
        className={`h-0.5 w-full bg-black transition group-hover:bg-white ${
          open ? "translate-y-[11px] rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 w-full bg-black transition group-hover:bg-white ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-0.5 w-full bg-black transition group-hover:bg-white ${
          open ? "-translate-y-[11px] -rotate-45" : ""
        }`}
      />
    </div>
  );
}
