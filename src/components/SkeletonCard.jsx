import React from "react";

const SkeletonCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 animate-pulse">
      <div className="w-24 h-24 mx-auto bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded mt-4 w-3/4 mx-auto"></div>
    </div>
  );
};

export default SkeletonCard;
