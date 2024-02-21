import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
import Account from "./routes/Account";
import axios from "axios";

function App() {
  return <ThemeProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="./signin" element={<SignIn/>}/>
        <Route path="./signup" element={<SignUp/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </ThemeProvider>;
}

export default App;
