import React from 'react'
import PeopleData from './PeopleData'
import GaleryItem from '../components/GaleryItem'



const People = () => {
  return (
    <div className=" flex gap-4 flex-wrap mt-[80px]">
    {PeopleData.map((item, idy) => (
      <GaleryItem key={idy} img={item.imageSrc} />
    ))}
  </div>
  )
}

export default People