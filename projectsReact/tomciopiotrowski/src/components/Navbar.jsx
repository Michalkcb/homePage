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
    <div className=" rounded-div flex items-center justify-between h-20 fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1140px]">
      <Link to="/" className="flex items-center">
        <h1 className=" text-2xl pl-4">Tomcio Piotrowski</h1>
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
        <ul className="w-full p-4 bg-gray-600 text-gray-100 text-center">
          <li onClick={handleNav} className=" py-6 ">
            <Link to="/account">Overview</Link>
          </li>
          <li onClick={handleNav} className=" py-6 ">
            <Link to="/account">Objects</Link>
          </li>
          <li onClick={handleNav} className=" py-6 ">
            <Link to="/account">People</Link>
          </li>
          <li onClick={handleNav} className=" py-6 ">
            <Link to="/account">Film/Video</Link>
          </li>
          <li onClick={handleNav} className=" py-6 ">
            <Link to="/account">About</Link>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
