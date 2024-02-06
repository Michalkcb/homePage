import React , {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'

const Sidenav = () => {
    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <>
    <AiOutlineMenu className='absolute top-4 right-4'/>


    </>
  )
}

export default Sidenav