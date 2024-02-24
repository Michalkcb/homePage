import React from "react";
import { Link } from "react-router-dom";

const SavedCoin = () => {
  return (
    <div>
      <p>
        You don't have any coins saved. Please save a coin to add it to your
        watch list. <Link to="/">Click here to search coins.</Link>
      </p>
    </div>
  );
};

export default SavedCoin;
