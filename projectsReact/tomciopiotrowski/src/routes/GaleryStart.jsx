import React from "react";
import GaleryItem from "../components/GaleryItem";
import GaleryStartData from "./GaleryStartData";

const GaleryStart = () => {
  return (
    <div className=" flex gap-4 flex-wrap mt-[80px]">
      {GaleryStartData.map((item, idy) => (
        <GaleryItem key={idy} img={item.imageSrc} />
      ))}
    </div>
  );
};

export default GaleryStart;
