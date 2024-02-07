import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4" >
        <div className="absolute w-4 h-4 bg-stone-200 rounded-full mt-2 -left-2 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-xs" >
          <span>{year}</span>
          <span>{title}</span>
          <span>{duration}</span>
        </p>
        <p>{details}</p>
      </li>
    </ol>
  );
};

export default WorkItem;
