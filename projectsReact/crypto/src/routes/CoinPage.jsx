import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";

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
              <p>{coin.market_data.current_price.pln.toLocaleString()} PLN</p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="blue" />
            </Sparklines>
          </div>
          <div>
            <div>
              <p>Market Cap</p>
              {coin.market_data?.market_cap ? (
                <p>{coin.market_data.market_cap.pln.toLocaleString()} PLN</p>
              ) : null}
            </div>
            <div>
              <p>Volume (24h) </p>
              {coin.market_data?.market_cap ? (
                <p>{coin.market_data.total_volume.pln.toLocaleString()} PLN</p>
              ) : null}
            </div>
          </div>
          <div>
            <div>
              <p>24h High </p>
              {coin.market_data?.high_24h ? (
                <p>{coin.market_data.high_24h.pln.toLocaleString()} PLN</p>
              ) : null}
            </div>
            <div>
              <p>24h Low </p>
              {coin.market_data?.low_24h ? (
                <p>{coin.market_data.low_24h.pln.toLocaleString()} PLN</p>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <p>
            Market Stats
          </p>
          <div>
            <div>
              <p>Maret Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p>Hashing Algorithm</p>
              {coin.hashing_algorithm ? <p> {coin.hashing_algorithm} </p> : null}
            </div>
            <div>
              {/* <p className='text-gray-500 text-sm'>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score}</p> : null} */}
            </div>
          </div>
          <div>
            <div>
              <p>Price Change (24h)</p>
              {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : (null)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
