type HeaderColor = "accent100" | "accent200" | "accent300";

const colorVariants: Record<HeaderColor, string> = {
  accent100: "from-accent-100",
  accent200: "from-accent-200",
  accent300: "from-accent-300",
};

export default function MobileHeader({ title }: { title: string }) {
  const colors: HeaderColor[] = ["accent100", "accent200", "accent300"];

  const colorIndex =
    title.length % colors.length;

  const selectedColor = colors[colorIndex];

  return (
    <div className="flex gap-3 items-center pb-4">
      <h2 className="font-semibold whitespace-nowrap text-[clamp(22px,4vw,28px)]">
        {title}
      </h2>
      <div className="flex flex-1 flex-col gap-1.5 w-15 md:w-full">
        <div
          className={`h-0.5 bg-linear-to-r ${colorVariants[selectedColor]} via-transparent to-transparent`}
        />
        <div
          className={`h-0.5 bg-linear-to-r ${colorVariants[selectedColor]} via-transparent to-transparent`}
        />
        <div
          className={`h-0.5 bg-linear-to-r ${colorVariants[selectedColor]} to-transparent`}
        />
      </div>
    </div>
  );
}
