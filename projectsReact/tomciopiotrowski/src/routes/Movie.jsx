import React from 'react'
import MovieData from './MovieData'
import GaleryItem from '../components/GaleryItem'

const Movie = () => {
  return (
    <div className=" flex gap-4 flex-wrap mt-[80px]">
    {MovieData.map((item, idy) => (
      <GaleryItem key={idy} img={item.imageSrc} />
    ))}
  </div>
  )
}

export default Movie