import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4' >
          <h1 className="sm:text-4xl md:text-4xl text-gray-500 uppercase tracking-widest font-myGruppo">
      Tomcio Piotrowski
    </h1>

    <button className="py-2 px-6 rounded-lg hover:bg-gray-200">Menu</button>
    </div>
  )
}

export default Header