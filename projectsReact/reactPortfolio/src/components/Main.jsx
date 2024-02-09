import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main" className="h-4/5 overflow-hidden">
      <div className="relative w-full h-auto md:h-[80vh] overflow-hidden">
        <img
          className="w-full h-auto md:w-full md:h-full object-cover object-left"
          src="https://michalkcb.github.io/homePage/assets/codeBG2.png"
          alt=""
        />
              <div className=" w-full h-full absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Michael Bany
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
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
          <div className="flex pt-6 max-w-[180px] w-full justify-between">

          <a href="https://www.facebook.com/michalkcb/" target="_blank">
              {" "}
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>

            <a href="https://www.facebook.com/michalkcb/" target="_blank">
              {" "}
              <FaFacebookF className="cursor-pointer" size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/micha%C5%82-bany-4a9bb0116/"
              target="_blank"
            >
              {" "}
              <FaLinkedinIn className="cursor-pointer" size={20} />{" "}
            </a>
            <a href="https://www.instagram.com/michalkcb/" target="_blank">
              {" "}
              <FaInstagram className="cursor-pointer" size={20} />
            </a>
          </div>
        </div>
      </div>
      </div>



      <div className="flex justify-center items-center pt-6" >
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=git,github,bash,powershell,linux,css,html,sass,js,react,tailwind,bootstrap,codepen,replit,wordpress,c,vim,vscode,webpack,mongodb,nextjs,nodejs,jest,jquery,ps,raspberrypi&theme=dark&perline=13" />
          </a>
      </div>
    </div>
  );
};

export default Main;
