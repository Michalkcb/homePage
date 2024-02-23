import React, { useState, useEffect } from "react";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      setTrending(response.data.coins);
      console.log(response.data.coins)
    });
  }, []);

  return (
    <div>
      <h1>Trending Coins</h1>
      <div>
        {trending.map((coin) => (
          <div>
            <div>
              <div>
                <img src={coin.item.small} alt="/" />
                <div>
                  <p>{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
