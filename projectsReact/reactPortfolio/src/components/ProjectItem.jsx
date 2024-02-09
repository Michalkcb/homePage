import React from "react";

const ProjectItem = ({ img, dsc, link, tech }) => {
  return (
    <div className="relative flex items-center h-auto w-auto overflow-hidden justify-center shadow-xl shadow-grey-400 rounded-lg group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] bg-transparent">
      <img
        src={img}
        alt="image"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="bg-[#fff] text-gray-800 mt-2 w-full p-2 rounded-lg text-center text-2xl font-bold  " >{tech}</h2>
        <h3 className=" font-semibold text-white tracking-wider text-center pt-4">{dsc}</h3>
        <a href={link}>
          <p className="bg-[#001b5e] text-gray-100 mt-2 w-full p-2 rounded-lg text-center font-bold">Open project</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
