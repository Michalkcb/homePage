import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from 'dompurify';

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
    <div className=" rounded-div my-12 py-8">
      <div className=" flex py-8">
        <img className=" w-20 mr-8" src={coin.image?.large} alt="/" />
        <div>
          <p className="text-3xl font-bold">{coin?.name} price</p>
          <p className=" uppercase"> ({coin?.symbol} / PLN) </p>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 gap-8" >
        <div>
          <div className=" flex justify-between">
            {coin.market_data?.current_price ? (
              <p className=" text-3xl font-bold">{coin.market_data.current_price.pln.toLocaleString()} PLN</p>
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
          <p>Market Stats</p>
          <div>
            <div>
              <p>Maret Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p>Hashing Algorithm</p>
              {coin.hashing_algorithm ? (
                <p> {coin.hashing_algorithm} </p>
              ) : null}
            </div>
            <div>
              {/* <p className='text-gray-500 text-sm'>Trust Score</p>
              {coin.tickers ? <p>{coin.liquidity_score}</p> : null} */}
            </div>
          </div>
          <div>
            <div>
              <p>Price Change (24h)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (7d)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>
              ) : null}
            </div>
            <div>
              <p>Price Change (14d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                </p>
              ) : null}
            </div>
          </div>
          <div>
            <div>
              <p>Price Change (30d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (60d)</p>
              {coin.market_data ? (
                <p>
                  {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                </p>
              ) : null}
            </div>
            <div>
              <p>Price Change (1y)</p>
              {coin.market_data ? (
                <p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>
              ) : null}
            </div>
          </div>
          <div className=" flex p-4">
            <FaFacebook />
            <FaGithub />
            <FaReddit />
            <FaTwitter />
          </div>
        </div>
      </div>
      <div>
      <p className='text-xl font-bold'>About {coin.name}</p>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}} ></p>
      </div>
    </div>
  );
};

export default CoinPage;
