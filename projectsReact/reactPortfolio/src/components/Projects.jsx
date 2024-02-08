import React from 'react';
import ProjectItem from './ProjectItem';
import mbn from './../../../../assets/MBN.png';
import faceGen from './../../../../assets/faceGenerator.png';
import toast from './../../../../assets/toast.png';
import ticTacToe from './../../../../assets/ttt.png';
import typahead from './../../../../assets/typeahead.png';
import stopwatch from './../../../../assets/stopwatch.png';

const projectsData = [
  {tech:"html", link: '/projectsHtml/glowingIcons/index.html', imageSrc: 'https://michalkcb.github.io/homePage/assets/glowingItems.jpg', description: 'glowing_icons'},
  {tech:"html", link: 'http://michalkcb.ct8.pl/new%20cruzeirosazuis/newTerminyPL.html',imageSrc: 'http://michalkcb.ct8.pl/pic/cruseiro.jpg',description: 'page_pic1'},
  {tech:"html", link: 'http://michalkcb.ct8.pl/glowingDiv/index.html',imageSrc: 'http://michalkcb.ct8.pl/glowingDiv/glowingDivs.png',description: 'Glowing DIV'},
  {tech:"html", link: '../old/index.html',imageSrc: 'http://michalkcb.ct8.pl/pic/old.png',description: 'old WD'},
  {tech:"html", link: 'http://michalkcb.ct8.pl/page07/page07.html',imageSrc: 'http://michalkcb.ct8.pl/pic/page07.png',description: 'page_pic7'},
  {tech:"html", link: 'http://michalkcb.ct8.pl/EuroChina/index.html',imageSrc: 'http://michalkcb.ct8.pl/pic/page02.png',description: 'page_pic2'},
  {tech:"html", link: 'http://michalkcb.ct8.pl/page06/page06.html',imageSrc: 'http://michalkcb.ct8.pl/pic/page06.png',description: 'page_pic6'},
  // {tech:"html", link: 'https://michalkcb.github.io/homePage/projectsHtml/semstorm/index.html',imageSrc: 'https://michalkcb.github.io/homePage/projectsHtml/semstorm/assets/semstorm.png',alt: 'semstorm'  }
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/sudoku.png', description: 'Sudoku (JS)', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl3/sudoku/sudoku.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/MBN.png', description: 'Real Actual News Portal (JS)(API)', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/MBNews/MBNews.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/toast.png', description: 'JS Toast Notifications', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl1/toast_notification/toast.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/typeahead.png', description: 'JS typeahead', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/simple_typehead/simple_typehead.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/stopwatch.png', description: 'JavaScript Stopwatch', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/stoper/stopwatch.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/ttt.png', description: 'JavaScript Tic Tac Toe Game', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/ticTacToe/ttt.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/projectsHtml/scrollAnimation/assets/scrollAnimate.png', description: 'JavaScript Animation on Scroll', link: './projectsHtml/scrollAnimation/index.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/Countries%20Lookup.png', description: 'Countries Lookup JSON BOOTWATCH', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/typeahead/typeahead.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/faceGenerator.png', description: 'Face Generator JSON TailwindCSS', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/FaceGenerator/dist/FaceGenerator.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/passwordGenerator.jpg', description: 'JS Password Generator', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/passwordGenerator', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/infinitePageScroll.png', description: 'JS Infinite Page Scroller', link: 'https://github.com/Michalkcb/myProjects/blob/master/ProjectsLvl1/infiniteScroll/infiniteScroll.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/memoryGame.jpg', description: 'JS Memory Game', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/theSimplestMemoryGame', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/fallingBall.jpg', description: 'JS Falling Ball Game', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/fallingBall', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/dinoRun1.jpg', description: 'JS Dino Run on squares', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/dinoGoogleGame', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/dinoRun2.jpg', description: 'JS Dino Run with graphic' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/chromeDinoClone',},
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/paint1.jpg', description: 'JS Paint in canvas', link: 'https://github.com/Michalkcb/myProjects/blob/master/ProjectsLvl1/anotherPaint/index.html', },
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/paint2.jpg', description: 'Another JS Paint in Canvas' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/yetAnotherPaintInCanvas',},
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/changeColorByBtn.jpg', description: 'Press button to change color' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/bgColorChangeByBtn',},
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/toDoApp.jpg', description: 'Simple to do app' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/toDoApp1',},
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/wordCounter.jpg', description: 'Counting words in text' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/wordsCounter',},
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/toDoApp.jpg', description: 'To do App witt Arry' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/toDoApp2Array',},
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/darkModeByBtn.jpg', description: 'Press btn to switch to dark mode' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/darkMode',},
  { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/guessNumber.jpg', description: 'Game: guess number' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/guessNumber',},
  { tech:"React",
    link: 'https://michalkcb.github.io/homePage/projectsReact/toDoList/dist/index.html',
    imageSrc: 'https://michalkcb.github.io/homePage/assets/todoReactVite.png',
    description: 'react Todo List'
  },
  {tech:"React",
    link: 'https://github.com/Michalkcb/myProjects/tree/master/react/react01',
    imageSrc: 'https://michalkcb.github.io/homePage/assets/reactPage01.png',
    description: 'react01'
  },
  {tech:"React",
    link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel3/react_calculator/src',
    imageSrc: 'https://michalkcb.github.io/homePage/assets/reactCalculator.png',
    description: 'react Calculator'
  },
  { tech:"Tailwind",
    link: 'https://michalkcb.github.io/homePage/tailwindCSS/tailwind01/dist/index.html',
    imageSrc: 'https://michalkcb.github.io/homePage/tailwindCSS/tailwind01/assets/tailwind01.png',
    description: 'pizzeria'
  },
  { tech:"Tailwind",
    link: 'https://michalkcb.github.io/homePage/tailwindCSS/tailwind02/dist/index.html',
    imageSrc: 'https://michalkcb.github.io/homePage/tailwindCSS/tailwind02/assets/aikido.png',
    description: 'aikido'
  },
  {  tech:"Tailwind",
    link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/FaceGenerator/dist/FaceGenerator.html',
    imageSrc: 'https://michalkcb.github.io/homePage/assets/faceGenerator.png',
    description: 'Face Generator'
},
  {  tech:"Python",
    link: 'https://github.com/Michalkcb/Python/tree/main/wyzwaniePython/ticTacToe',
    imageSrc: 'https://michalkcb.github.io/homePage/assets/python01.png',
    description: 'Tic Tac Toe'
  }
];

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
        <h1  className='text-4xl font-bold text-center text-[#001b5e]' >Projects</h1>

        <p className='text-center py-8' >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus facere suscipit quos illo! Ducimus totam recusandae aperiam architecto hic dolores, sed expedita veritatis animi at dignissimos vel natus consectetur?
        </p>
        <div className='grid sm:grid-cols-3 gap-12'>
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