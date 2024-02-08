import React from 'react';
import ProjectItem from './ProjectItem';
import projectsData from './ProjectData';



const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1  className='text-4xl font-bold text-center text-[#001b5e]' >Projects</h1>

        <p className='text-center py-8' >
            Below you can find my latest projects done with different technologies like: HTML, CSS, Java Script, Reat, Tailwind, Python...
        </p>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-12" >
      {projectsData.map((item, idy)=>(
        <ProjectItem 
        key={idy}
        tech={item.tech}
        img={item.imageSrc}
        link={item.link}
        dsc={item.description}
        />
      ))}

      </div>
    </div>
  )
}

export default Projects;