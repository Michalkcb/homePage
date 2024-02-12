import React from 'react'
import GoogleButton from 'react-google-button'

const Signin = () => {
  return (
    <div>
        <h1 className=' text-center text-3xl font-bold py-8'>Sign in</h1>
        <div  className='max-w-[240px] m-auto py-4'> <GoogleButton/> </div>
    </div>
  )
}

export default Signin