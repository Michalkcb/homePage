import React from 'react';
import ProjectItem from './ProjectItem';
import mbn from './../../../../assets/MBN.png';
import faceGen from './../../../../assets/faceGenerator.png';
import toast from './../../../../assets/toast.png';
import ticTacToe from './../../../../assets/ttt.png';
import typahead from './../../../../assets/typeahead.png';
import stopwatch from './../../../../assets/stopwatch.png';

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1  className='text-4xl font-bold text-center text-[#001b5e]' >Projects</h1>
        <p className='text-center py-8' >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus facere suscipit quos illo! Ducimus totam recusandae aperiam architecto hic dolores, sed expedita veritatis animi at dignissimos vel natus consectetur?
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={mbn} title='MBN App' />
            <ProjectItem img={faceGen} title='Face Generator App' />
            <ProjectItem img={toast} title='Toasts App' />
            <ProjectItem img={ticTacToe} title='Tic Tac Toe App' />
            <ProjectItem img={typahead} title='Typeahead App' />
            <ProjectItem img={stopwatch} title='Stopwatch App' />
        </div>
    </div>
  )
}

export default Projects;