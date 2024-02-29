import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-3">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-1">Help Center</li>
              <li className="text-sm py-1">Contact Us</li>
              <li className="text-sm py-1">API Status</li>
              <li className="text-sm py-1">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-1">About Us</li>
              <li className="text-sm py-1">Careers</li>
              <li className="text-sm py-1">Invest</li>
              <li className="text-sm py-1">Legal</li>
            </ul>
          </div>
        </div>

       
          <div className="flex flex-col justify-center  md:col-span-1 md:items-center md:py-4 text-accent">
            <a href="https://www.linkedin.com/in/micha%C5%82-bany-4a9bb0116/ ">
              <FaLinkedin />
            </a>
            <a className="py-4" href="https://www.facebook.com/michalkcb/ ">
              <FaFacebookF />
            </a>
            <a href="https://github.com/Michalkcb ">
              <FaGithub />
            </a>
          </div>
      

        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-2 relative">
              <div className="flex justify-center md:justify-end py-1 md:py-0 md:pb-1 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign up for crypto news
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-1">
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-2">Powered by Coin Gecko</p>
    </div>
  );
};

export default Footer;
