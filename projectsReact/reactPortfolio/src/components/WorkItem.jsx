import React from "react";

const WorkItem = ({ year, title, duration, details, description }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4" >
        <div className="absolute w-4 h-4 bg-stone-200 rounded-full mt-2 -left-2 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-xs" >
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b53] rounded-md " >{year}</span>
          <span className="text-lg font-semibold text-[#001b5e]" >{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400" >{duration}</span>
        </p>
        <p className="my-2 text-base font-normal text-stone-500" >{details}</p>
        <p className="my-2 text-base font-normal text-stone-500" >{description}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
