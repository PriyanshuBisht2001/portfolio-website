import React from "react";

const ProjectSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-11 bg-brand-200 p-10 relative rounded-[20px] h-fit">
      {/* Header Placeholder */}
      <div className="h-8 bg-brand-100 animate-pulse rounded-md w-1/3"></div>

      {/* Image Placeholder */}
      <div className="h-[440px] bg-brand-100 animate-pulse rounded-4xl w-full"></div>

      {/* Overview Section */}
      <div className="space-y-4">
        <div className="h-6 bg-brand-100 animate-pulse rounded-md w-1/4"></div>
        <div className="h-4 bg-brand-100 animate-pulse rounded-md w-3/4"></div>
        <div className="h-4 bg-brand-100 animate-pulse rounded-md w-2/3"></div>
      </div>

      {/* Challenge Section */}
      <div className="space-y-4">
        <div className="h-6 bg-brand-100 animate-pulse rounded-md w-1/4"></div>
        <div className="h-4 bg-brand-100 animate-pulse rounded-md w-3/4"></div>
        <div className="h-4 bg-brand-100 animate-pulse rounded-md w-2/3"></div>
      </div>

      {/* Grid Images */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[440px]">
        <div className="row-span-2 h-full bg-brand-100 animate-pulse rounded-4xl"></div>
        <div className="h-full bg-brand-100 animate-pulse rounded-4xl"></div>
        <div className="h-full bg-brand-100 animate-pulse rounded-4xl"></div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
