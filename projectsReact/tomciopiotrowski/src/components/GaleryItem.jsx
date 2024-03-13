import React from "react";

const GaleryItem = ({ img, dsc }) => {
  return (
    <div className="relative flex items-center h-auto w-auto overflow-hidden justify-center shadow-xl shadow-grey-400 rounded-lg group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] bg-transparent">
      <img
        src={img}
        alt="image"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <h3 className=" font-semibold text-white tracking-wider text-center pt-4">
          {dsc}
        </h3>
      </div>
    </div>
  );
};

export default GaleryItem;
