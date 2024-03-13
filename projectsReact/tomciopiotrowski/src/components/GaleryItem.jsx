import React from "react";

const GaleryItem = ({ img }) => {
  return (
    <div className=" mx-4">
      <img src={img} alt="image" className="rounded-xl" />
    </div>
  );
};

export default GaleryItem;
