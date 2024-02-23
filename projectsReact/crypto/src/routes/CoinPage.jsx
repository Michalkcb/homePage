import React, { useState } from 'react'
import axios  from 'axios'

const CoinPage = () => {
  const [coin, setCoin] = useState({})
  const url= "https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true"
  return (
    <div>CoinPage</div>
  )
}

export default CoinPage