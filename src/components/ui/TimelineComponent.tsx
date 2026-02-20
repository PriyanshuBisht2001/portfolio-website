import Image, { StaticImageData } from "next/image";

type TimelineItem = {
  title: string;
  subtitle?: string;
  startDate: string;
  endDate: string;
  description: string;
};

type TimelineProps = {
  icon?: string | StaticImageData;
  heading: string;
  items: TimelineItem[];
};

export default function TimelineComponent({
  icon,
  heading,
  items,
}: TimelineProps) {
  return (
    <section className="flex flex-col relative">
      {/* Header Section */}
      <div className="flex gap-3 z-20 rounded-t-md lg:border-none px-3 pt-3 lg:p-0 bg-[linear-gradient(to_right,#2c2e4b,#67444c,#88564d,#552c7a,#29389d)] lg:bg-none">
        {icon && (
          <div className="flex flex-col items-center">
            <Image src={icon} alt={heading} />
            <div className="h-10 border-brand-500 border w-px" />
          </div>
        )}
        <h2 className="text-2xl font-bold pt-1">{heading}</h2>
      </div>

      {/* Timeline Items */}
      <div className="flex flex-col z-20 pt-5 relative border border-[#354274] rounded-md bg-[radial-gradient(ellipse_at_center,#1a213b,#1a213b,transparent)] lg:border-none lg:bg-none">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-[26px] items-start relative pb-6 lg:pb-[52px]"
          >
            {/* Vertical Line */}
            {i !== items.length - 1 && (
              <div className="absolute left-[21px] top-4 bottom-0 w-px bg-brand-500 z-10" />
            )}

            {/* Pointer */}
            <div className="relative flex pl-3.5">
              <div className="h-4 w-4 border-3 lg:border-none lg:bg-secondary-100 shadow-xl/70 lg:shadow-secondary-200 rounded-full z-20" />
            </div>

            {/* Timeline Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-xl font-semibold">
                {item.title} {item.subtitle && `- ${item.subtitle}`}
              </h3>
              <div className="text-sm font-medium text-secondary-100">
                {item.startDate} - {item.endDate}
              </div>
              <p className="hidden lg:block">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
