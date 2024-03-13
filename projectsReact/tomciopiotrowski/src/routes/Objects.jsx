import React from 'react'
import ObjectsData from './ObjectsData'

const Objects = () => {
  return (
    <div className=' flex gap-4 flex-wrap mt-[80px]'>
        <div className=' mx-4'>
            <img 
            className=' rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/410812104_10159233289080563_7965221519588041280_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/410815943_10159233251425563_4459431366362872379_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/418934826_10159265442855563_8114150926809586284_n.jpg' alt="pic01" />
        </div>

    </div>
  )
}

export default Objects