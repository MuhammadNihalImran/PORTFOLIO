import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-[#ED8E00] rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-600 dark:text-gray-300 font-medium">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
