import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Account from "./pages/Account"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
 


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={Home}/>
        <Route path="/" element={Signin}/>
        <Route path="/" element={Account}/>
      </Routes>
    </>
  )
}

export default App
