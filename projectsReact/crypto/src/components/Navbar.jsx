import React from 'react'
import {Link} from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlirMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
        <Link to='/' className='flex items-center'>
        <img src="https://michalkcb.github.io/homePage/assets/MB_logo.png" alt="" className='filter invert max-h-[40px] p-2'/>
            <h1 className=' font-bold '> 
           
              CryptoHub</h1>
        </Link>
        <div>
            <ThemeToggle/>
        </div>
        <div>
         <Link to='./signin'>Sign In</Link>
         <Link to='./signup'>Sign Up</Link>
        </div>
        <div>
          <AiOutlirMenu></AiOutlirMenu>
        </div>
    </div>
  )
}

export default Navbar