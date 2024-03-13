import React from 'react'
import ObjectsData from './ObjectsData'
import GaleryItem from '../components/GaleryItem'


const Objects = () => {
  return (
    <div className=" flex gap-4 flex-wrap mt-[80px]">
    {ObjectsData.map((item, idy) => (
      <GaleryItem key={idy} img={item.imageSrc} />
    ))}
  </div>
  )
}

export default Objects