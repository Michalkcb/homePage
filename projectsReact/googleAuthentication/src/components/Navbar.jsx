import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div className=' flex justify-between bg-gray-200 w-full p-4'>
        <h1 className=' text-center text-2xl font-bold'>
            Google Auth
        </h1>
        <Link to='./signin'>Sign in</Link>
    </div>
  )
}

export default Navbar