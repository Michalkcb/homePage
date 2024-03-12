import React from 'react'

const People = () => {
  return (
    <div className=' flex gap-4 flex-wrap mt-[80px]'>
        <div className=' mx-4'>
            <img 
            className=' rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/410231018_10159233240315563_7847957630435191504_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/410293550_10159233286100563_5494337073556784863_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/410298603_10159233263565563_7734816224702279160_n.jpg' alt="pic01" />
        </div>

    </div>
  )
}

export default People