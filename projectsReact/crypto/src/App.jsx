import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import Account from "./routes/Account";
import axios from "axios";
import CoinPage from "./routes/CoinPage";
import Footer from "./components/Footer";

function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=PLN&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=pl&precision=2";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="./signin" element={<SignIn />} />
        <Route path="./signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId">

          </Route>
        </Route>
      </Routes>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
