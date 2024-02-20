import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" rounded-div">
      <Link to="/" className="flex items-center">
        <img
          src="https://michalkcb.github.io/homePage/assets/MB_logo.png"
          alt=""
          className="filter invert max-h-[40px] p-2"
        />
        <h1 className=" font-bold ">CryptoHub</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link to="./signin">Sign In</Link>
        <Link to="./signup">Sign Up</Link>
      </div>
      <div>
        <AiOutlineMenu></AiOutlineMenu>
      </div>
      <div>
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
