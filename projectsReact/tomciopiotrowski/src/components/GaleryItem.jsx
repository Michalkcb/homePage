import React from "react";

const GaleryItem = ({ img }) => {
  return (
    <div className=" flex gap-4 flex-wrap mt-[80px]">
      <div className=' mx-4'>
        <img src={img} alt="image" className="rounded-xl" />
      </div>
    </div>
  );
};

export default GaleryItem;
