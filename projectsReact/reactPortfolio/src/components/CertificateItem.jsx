import React from 'react'

const CertificateItem = ({img, dsc}) => {
  return (
    <div className='relative flex items-center h-[200px] w-[300px] overflow-hidden justify-center shadow-xl shadow-grey-400 rounded-lg group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
    <img src={img} alt="image" className='rounded-xl group-hover:opacity-10' />
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2' >
      <h3 className='text-2xl font-bold text-white tracking-wider text-center' >
        {dsc}
      </h3>
      <p className='pb-4 pt-2 text-white text-center' >Certificate</p>
    </div>
  </div>
  )
}

export default CertificateItem