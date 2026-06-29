import React from "react";

const EmptyState = ({ message = "No Data Found" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-gray-500">
      <p className="text-lg font-medium">{message}</p>
    </div>
  );
};

export default EmptyState;