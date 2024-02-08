import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2023",
    duration: "1 year",
    title: "Front-end",
    details: "Working on this portfolio",
    description: "",
  },
  {
    year: "2010",
    duration: "13 years",
    title:"Category Manager",
    details:"Categories: toys, school, culture, sport, garden, camping, auto, diy, art. kitchen, art. for the table, home, textiles, furniture, lighting, intelligent home, pet food & accessories.",
    description: `Buying, Sourcing (PL, EU, CN), Negotiations, Back catalog (SAP), Creating a trading strategy, Dynamizing commercial offers, Building promotional leaflets, Building promotional campaigns, Product development and on-boarding, Improvement of UX client experience, Profitability analysis (Microsoft BI), Creating store planograms, florplans (SpacePlanner), Close cooperation with marketing, VM department and logistics, Daily management of open orders between suppliers and customers, research on market trends and customer needs, (Sesta, Nielsen, GFK), Analysis of sales and market data, (Microsoft BI, google analytics),Implementation of solutions ensuring high profitability of products, Building marketing plans: weekly, monthly, quarter, annual, 3 years, Budget building and realization: weekly, monthly, quarter,annual, 3 years, Quality oversight and improvements in cooperation with Quality Department, Responsibility for key customers including sales and service related tasks, Co-creating the trade strategy of the sector in close cooperation with buyers, Managing the product range renovation project and guaranteeing the product range optimization process`,
  },
  {
    year: "2008",
    duration: "2 years",
    title: "IT, WebDev",
    details:"Web Development",
    description: "Web Development and maintenance of the company's IT network of computers and peripheral devices. Development + administration of the company website www.albertech.pl. + SEO. Translation and preparation of advertising materials: graphics + editorial (brochures, catalogues, calendars, business cards). Contact with foreign and domestic suppliers",
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
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Work;
