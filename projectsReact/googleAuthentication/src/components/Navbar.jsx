import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex justify-between bg-gray-200 w-full p-4">
      <div className="h-12 w-auto m-2 flex items-center justify-center">
          <img
            className="filter invert h-12 w-14"
            src="https://michalkcb.github.io/homePage/assets/MB_logo.png"
            alt="My Logo"
          />
      <h1 className=" text-center text-2xl font-bold ml-8">Google Auth</h1>
      </div>
      {user?.displayName ? (
        <button onClick={handleSignOut}>
          Logout</button>
      ) : (
          <Link to="./signin" className=" text-center font-bold ml-8 flex items-center"><p className=" text-center">Sign in</p></Link>
      )}
    </div>
  );
};

export default Navbar;
