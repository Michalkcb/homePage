import React from 'react';

const GaleryStart = () => {
  return (
    <div className=' flex gap-4 flex-wrap mt-[100px]'>
        <div className=' mx-4'>
            <img 
            className=' rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/347250423_10158946128525563_6717665936168975433_n.jpg' alt="pic01" />
        </div>
        <div className='mx-4'>
            <img 
            className='rounded-xl'
            src='https://michalkcb.github.io/homePage/projectsReact/tomciopiotrowski/src/assets/356923609_10158949128505563_6137640043970528478_n.jpg' alt="pic01" />
        </div>
    </div>
  );
}

export default GaleryStart;
