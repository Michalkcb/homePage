import React, { useState } from "react";
import { Link } from "react-router-dom";

const SavedCoin = () => {
    const [coins, setCoins] = useState
  return (
    <div>
        {coins.lenght === 0 ? (<p>
        You don't have any coins saved. Please save a coin to add it to your
        watch list. <Link to="/">Click here to search coins.</Link>
      </p>) : (
        <table>
            
        </table>
      )}
      
    </div>
  );
};

export default SavedCoin;
