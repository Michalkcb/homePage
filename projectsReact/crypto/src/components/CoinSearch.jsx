import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const CoinSearch = ({ coins }) => {
  return (
    <div>
      <div>
        <h1>Search crypto</h1>
        <form>
          <input type="text" placeholder="Search a coin" />
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr>
              <td>
                {" "}
                <AiOutlineStar />{" "}
              </td>
              <td>{coin.market_cap_rank}</td>
              <td>
                <div>
                  <img src={coin.image} alt={coin.id} />
                  <p>{coin.name}</p>
                </div>
              </td>
              <td>{coin.symbol}</td>
              <td>{coin.current_price}</td>
              <td>{coin.price_change_percentage_24h}</td>
              <td>{coin.total_volume}</td>
              <td>{coin.market_cap}</td>
              <td>{coin.sparkline_in_7d.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
