"use client";

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
      <div className="flex gap-3 z-20">
        {icon && (
          <div className="flex flex-col items-center">
            <Image src={icon} alt={heading} />
            <div className="h-10 border-brand-500 border w-[1px]" />
          </div>
        )}
        <h2 className="text-2xl font-bold pt-1">{heading}</h2>
      </div>

      {/* Timeline Items */}
      <div className="flex flex-col z-20 relative">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-[26px] items-start relative pb-[52px]"
          >
            {/* Vertical Line */}
            {i !== items.length - 1 && (
              <div className="absolute left-[21px] top-4 bottom-0 w-[1px] bg-brand-500 z-10" />
            )}

            {/* Pointer */}
            <div className="relative flex pl-[14px]">
              <div className="h-4 w-4 bg-secondary-100 shadow-xl/70 shadow-secondary-200 rounded-full z-20" />
            </div>

            {/* Timeline Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                {item.title} {item.subtitle && `- ${item.subtitle}`}
              </h3>
              <div className="text-sm font-medium text-secondary-100">
                {item.startDate} - {item.endDate}
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
