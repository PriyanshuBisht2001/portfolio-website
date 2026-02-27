import React from "react";

const AllProjectsSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col p-10 lg:p-10 w-full">
      <div className="mb-6 h-12 w-70 lg:w-30 bg-brand-100 rounded-xl animate-pulse lg:mb-4"></div>
      <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto pb-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 rounded-lg shadow-sm animate-pulse"
          >
            <div className="h-50 lg:48 bg-brand-100 rounded-xl"></div>
            <div className="hidden lg:block h-6 bg-brand-100 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjectsSkeleton;
