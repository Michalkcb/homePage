import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();


  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div className=" rounded-div flex items-center justify-between h-20 font-bold fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1140px]">
      <Link to="/" className="flex items-center">
        <img
          src="https://michalkcb.github.io/homePage/assets/MB_logo.png"
          alt=""
          className="filter invert max-h-[40px] p-2"
        />
        <h1 className=" font-bold text-2xl">CryptoHub</h1>
      </Link>
      <div className="hidden md:block">
      </div>

      <div onClick={handleNav} className="block mb:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* mobile menu */}
      <div
        className={
          nav
            ? " md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : " fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleNav} className="border py-6 ">
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleNav} className="border py-6 ">
            <Link to="/account">Account</Link>
          </li>
          <li className="border py-6 ">

          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="./signin">
            {" "}
            <button onClick={handleNav} className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl">
              Sign In
            </button>{" "}
          </Link>
          <Link to="./signup">
            {" "}
            <button onClick={handleNav} className=" w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
              Sign Up
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
