import React, { useEffect, useState } from "react";
import axios from "axios";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name} price</p>
          <p className=" uppercase"> ({coin?.symbol} / PLN) </p>
        </div>
      </div>
      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>
                {coin.market_data.current_price.pln.toLocaleString()} PLN
              </p>
            ) : null}
            <p>7 Day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
