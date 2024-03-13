import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='bg-gray-800 h-[60px] fixed bottom-0 w-full opacity-100 flex justify-around items-center text-white'>
      <AiOutlineClose size={30} />
      <AiOutlineClose size={30} />
      <AiOutlineClose size={30} />
      <AiOutlineClose size={30} />
    </div>
  )
}

export default Footer