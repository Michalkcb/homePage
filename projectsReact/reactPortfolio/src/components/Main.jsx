import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://michalkcb.github.io/homePage/assets/codeBG2.png"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800" >I'm Michael Bany</h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800" >
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Coder",
                1000,
                "Tech entusiast",
                1000,
                "Constant learner",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex pt-6 max-w-[180px] w-full justify-between" >
            <FaFacebookF className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
