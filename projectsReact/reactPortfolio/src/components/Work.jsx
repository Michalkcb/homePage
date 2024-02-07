import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2023",
    duration: "1 year",
    title: "Front-end",
    details: "Working on this portfolio",
  },
  {
    year: "2010",
    duration: "13 years",
    title:"Category Manager",
    details:"Buying ,Sourcing (PL, EU, CN), Negotiations",
  },
  {
    year: "2008",
    duration: "2 years",
    title: "IT, WebDev",
    details:"Web Development",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040-px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
