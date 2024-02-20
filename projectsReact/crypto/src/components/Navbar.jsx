import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/" className="flex items-center">
        <img
          src="https://michalkcb.github.io/homePage/assets/MB_logo.png"
          alt=""
          className="filter invert max-h-[40px] p-2"
        />
        <h1 className=" font-bold text-2xl">CryptoHub</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      <div className=" hidden md:block">
        <Link to="./signin" className="p-4 hover:text-accent">Sign In</Link>
        <Link to="./signup" className=" bg-button text-btnText px-5 py-2 rounded-2xl shadow-lg hover:shadow-2xl">Sign Up</Link>
      </div>
      <div className="block mb:hidden cursor-pointer z-10">
        <AiOutlineMenu></AiOutlineMenu>
      </div>

      {/* mobile menu */}
      <div className=" md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Account</Link>
          </li>
          <li>
            <ThemeToggle></ThemeToggle>
          </li>
        </ul>
        <div>
          <Link to="./signin"> <button>Sign In</button> </Link>
          <Link to="./signup"> <button>Sign Up</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
