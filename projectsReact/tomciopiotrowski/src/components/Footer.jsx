import React from 'react';
import { Link } from 'react-router-dom';
import { FaSquareXTwitter, FaInstagram, FaFacebookF, FaSnapchat } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-gray-800 h-[60px] fixed bottom-0 w-full opacity-100 flex justify-around items-center text-white'>
      <Link to='https://www.facebook.com/tomciopiotrowski' target='_blank'>
      <FaFacebookF size={30} />
      </Link>
      <Link to='https://www.facebook.com/tomaspiotrowski/?locale=pl_PL' target='_blank'>
      <FaSquareXTwitter size={30} />
      </Link>
      <Link to='https://www.instagram.com/wedding_tomas_piotrowski' target='_blank'>
      <FaInstagram size={30} />
      </Link>
      <Link to='https://www.facebook.com/tomciopiotrowski' target='_blank'>
      <FaSnapchat size={30} />
      </Link>
    </div>
  )
}

export default Footer