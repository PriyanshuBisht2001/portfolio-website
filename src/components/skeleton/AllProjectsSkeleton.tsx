import React from "react";

const AllProjectsSkeleton: React.FC = () => {
  return (
    <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col space-y-4  rounded-lg shadow-sm"
        >
          <div className="h-48 bg-brand-100 rounded-xl"></div>
          <div className="h-6 bg-brand-100 rounded w-3/4"></div>
          <div className="h-4 bg-brand-100 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default AllProjectsSkeleton;
