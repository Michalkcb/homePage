import React from 'react'

const Movie = () => {
  return (
    <div className=' flex gap-4 flex-wrap mt-[80px]'>
        <div className=' mx-4'>
            <img 
            className=' rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/419032060_10159265855860563_431308715801369977_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/419660982_10159265855750563_2199122535621514469_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/424775488_10159291204390563_1687657359294794804_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/428640811_10159320062355563_8973759730847096039_n.jpg' alt="pic01" />
        </div>

    </div>
  )
}

export default Movie