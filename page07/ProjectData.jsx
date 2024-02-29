const projectsData = [
  {  tech:"Python",
  link: 'https://github.com/Michalkcb/Python/tree/main/wyzwaniePython/ticTacToe',
  imageSrc: 'https://michalkcb.github.io/homePage/assets/python01.png',
  description: 'Tic Tac Toe'
},
{  tech:"",
link: '',
imageSrc: '',
description: ''
},
{  tech:"",
link: '',
imageSrc: '',
description: ''
},

{ tech:"React",
  link: 'https://mb-crypto-hub.web.app/',
  imageSrc: 'https://michalkcb.github.io/homePage/assets/mbCryptoHub.png',
  description: 'Firebase Tailwind API'
},
  { tech:"React",
  link: 'https://michalkcb.github.io/homePage/projectsReact/reactPortfolio/dist/index.html',
  imageSrc: 'https://michalkcb.github.io/homePage/assets/reactPortfolio.png',
  description: 'My Portfolio in React'
},
  { tech:"React",
  link: 'https://michalkcb.github.io/homePage/projectsReact/toDoList/dist/index.html',
  imageSrc: 'https://michalkcb.github.io/homePage/assets/todoReactVite.png',
  description: 'react Todo List'
},
{tech:"React",
  link: 'https://github.com/Michalkcb/myProjects/tree/master/react/react01',
  imageSrc: 'https://michalkcb.github.io/homePage/assets/reactPage01.png',
  description: 'Pizza'
},
{tech:"React",
  link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel3/react_calculator/src',
  imageSrc: 'https://michalkcb.github.io/homePage/assets/reactCalculator.png',
  description: 'Calculator'
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
  description: 'Face Generator JS, API, JSON, Tailwind'
},
    // {tech:"html", link: 'https://michalkcb.github.io/homePage/projectsHtml/semstorm/index.html',imageSrc: 'https://michalkcb.github.io/homePage/projectsHtml/semstorm/assets/semstorm.png',alt: 'semstorm'  }
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/sudoku.png', description: 'Sudoku (JS)', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl3/sudoku/sudoku.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/MBN.png', description: 'Real Actual News Portal (JS)(API)', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/MBNews/MBNews.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/toast.png', description: 'Toast Notifications', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl1/toast_notification/toast.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/typeahead.png', description: 'typeahead', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/simple_typehead/simple_typehead.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/stopwatch.png', description: 'Stopwatch', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/stoper/stopwatch.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/ttt.png', description: 'Tic Tac Toe Game', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/ticTacToe/ttt.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/projectsHtml/scrollAnimation/assets/scrollAnimate.png', description: 'Animation on Scroll', link: './projectsHtml/scrollAnimation/index.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/Countries%20Lookup.png', description: 'Countries Lookup JSON BOOTWATCH', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/typeahead/typeahead.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/passwordGenerator.jpg', description: 'Password Generator', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/passwordGenerator', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/infinitePageScroll.png', description: 'Infinite Page Scroller', link: 'https://github.com/Michalkcb/myProjects/blob/master/ProjectsLvl1/infiniteScroll/infiniteScroll.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/memoryGame.jpg', description: 'Memory Game', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/theSimplestMemoryGame', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/fallingBall.jpg', description: 'Falling Ball Game', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/fallingBall', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/dinoRun1.jpg', description: 'Dino Run on squares', link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/dinoGoogleGame', },
    // { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/dinoRun2.jpg', description: 'Dino Run with graphic' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/chromeDinoClone',},
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/paint1.jpg', description: 'Paint in canvas', link: 'https://github.com/Michalkcb/myProjects/blob/master/ProjectsLvl1/anotherPaint/index.html', },
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/paint2.jpg', description: 'Another Paint in Canvas' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/yetAnotherPaintInCanvas',},
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/changeColorByBtn.jpg', description: 'Press button to change color' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/bgColorChangeByBtn',},
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/toDoApp.jpg', description: 'Simple to do app' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/toDoApp1',},
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/wordCounter.jpg', description: 'Counting words in text' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/wordsCounter',},
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/toDoApp.jpg', description: 'To do App witt Arry' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/toDoApp2Array',},
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/darkModeByBtn.jpg', description: 'Press btn to switch to dark mode' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/darkMode',},
    { tech:"Java Script", imageSrc: 'https://michalkcb.github.io/homePage/assets/guessNumber.jpg', description: 'Game: guess number' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/guessNumber',},
    {tech:"html", link: '/projectsHtml/glowingIcons/index.html', imageSrc: 'https://michalkcb.github.io/homePage/assets/glowingItems.jpg', description: 'glowing_icons'},
    {tech:"html", link: '',imageSrc: 'https://michalkcb.github.io/homePage/pic/cruseiro.jpg',description: 'cruzeirosazuis.eu'},
    {tech:"html", link: 'https://michalkcb.github.io/homePage/projectsHtml/EuroChina/index.html',imageSrc: 'https://michalkcb.github.io/homePage/projectsHtml/EuroChina/img/eurochina.png',description: 'EuroChina'},
    {tech:"html", link: 'https://michalkcb.github.io/homePage/projectsHtml/glowingDiv/index.html',imageSrc: 'https://michalkcb.github.io/homePage/projectsHtml/glowingDiv/glowingDivs.png',description: 'Glowing DIV'},
    {tech:"html", link: 'https://michalkcb.github.io/homePage/page08/index.html',imageSrc: 'https://michalkcb.github.io/homePage/assets/webDesign.png',description: 'old WD'},
    {tech:"html", link: 'https://michalkcb.github.io/homePage/page07/page07.html',imageSrc: 'https://michalkcb.github.io/homePage/pic/page07.png',description: 'TouYube'},
    {tech:"html", imageSrc: 'https://michalkcb.github.io/homePage/pic/page06.png', link: 'https://michalkcb.github.io/homePage/page06/page06.html',description: 'Foogle'},
  ];

  export default projectsData;