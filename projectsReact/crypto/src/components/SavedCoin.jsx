import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const SavedCoin = () => {
    const [coins, setCoins] = useState([])
  return (
    <div>
        {coins.lenght === 0 ? (<p>
        You don't have any coins saved. Please save a coin to add it to your
        watch list. <Link to="/">Click here to search coins.</Link>
      </p>) : (
        <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th className='px-4'>Rank #</th>
            <th className='text-left'>Coin</th>
            <th className='text-left'>Remove</th>
          </tr>
        </thead>
        <tbody>
          {coins?.map((coin) => (
            <tr key={coin.id} className='h-[60px] overflow-hidden'>
              <td>{coin?.rank}</td>
              <td>
                <Link to={`/coin/${coin.id}`}>
                  <div className='flex items-center'>
                    <img src={coin?.image} className='w-8 mr-4' alt='/' />
                    <div>
                      <p className='hidden sm:table-cell'>{coin?.name}</p>
                      <p className='text-gray-500 text-left text-sm'>
                        {coin?.symbol.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </Link>
              </td>
              <td className='pl-8'>
                <AiOutlineClose
                 
                  className='cursor-pointer'
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
      
    </div>
  );
};

export default SavedCoin;
