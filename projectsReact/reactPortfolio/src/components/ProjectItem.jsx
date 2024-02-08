import React from "react";

const ProjectItem = ({ img, dsc, link, tech }) => {
  return (
    <div className="relative flex items-center h-[200px] w-[300px] overflow-hidden justify-center shadow-xl shadow-grey-400 rounded-lg group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
      <img
        src={img}
        alt="image"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <h2>{tech}</h2>
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {dsc}
        </h3>
        <a href={link}>
          <p className="pb-4 pt-2 text-white text-center">More Info</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
