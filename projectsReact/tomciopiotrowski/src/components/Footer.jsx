import React from 'react'
import { FaSquareXTwitter, FaInstagram, FaFacebookF, FaSnapchat } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-800 h-[60px] fixed bottom-0 w-full opacity-100 flex justify-around items-center text-white'>
      <FaFacebookF size={30} />
      <FaSquareXTwitter size={30} />
      <FaInstagram size={30} />
      <FaSnapchat size={30} />
    </div>
  )
}

export default Footer