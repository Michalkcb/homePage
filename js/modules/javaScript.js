const projectData = [
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/cookBook.png', description: 'Cook Book (JS)(API)', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/cookBook//index.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/sudoku.png', description: 'Sudoku (JS)', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl3/sudoku/sudoku.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/MBN.png', description: 'Real Actual News Portal (JS)(API)', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/MBNews/MBNews.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/toast.png', description: 'JS Toast Notifications', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl1/toast_notification/toast.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/typeahead.png', description: 'JS typeahead', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/simple_typehead/simple_typehead.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/stopwatch.png', description: 'JavaScript Stopwatch', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/stoper/stopwatch.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/ttt.png', description: 'JavaScript Tic Tac Toe Game', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/ticTacToe/ttt.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/projectsHtml/scrollAnimation/assets/scrollAnimate.png', description: 'JavaScript Animation on Scroll', link: './projectsHtml/scrollAnimation/index.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/Countries%20Lookup.png', description: 'Countries Lookup JSON BOOTWATCH', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/typeahead/typeahead.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/faceGenerator.png', description: 'Face Generator JSON TailwindCSS', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/FaceGenerator/dist/FaceGenerator.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/passwordGenerator.jpg', description: 'JS Password Generator', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/passwordGenerator/index.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/infinitePageScroll.png', description: 'JS Infinite Page Scroller', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl1/infiniteScroll/infiniteScroll.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/memoryGame.jpg', description: 'JS Memory Game', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/theSimplestMemoryGame/index.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/fallingBall.jpg', description: 'JS Falling Ball Game', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/fallingBall/index.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/dinoRun1.jpg', description: 'JS Dino Run on squares', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl2/dinoGoogleGame/index.html', },
    // { imageSrc: 'https://michalkcb.github.io/homePage/assets/dinoRun2.jpg', description: 'JS Dino Run with graphic' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLevel2/chromeDinoClone',},
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/paint1.jpg', description: 'JS Paint in canvas', link: 'https://michalkcb.github.io/homePage/projectsJs/lvl1/anotherPaint/index.html', },
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/paint2.jpg', description: 'Another JS Paint in Canvas' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/yetAnotherPaintInCanvas',},
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/changeColorByBtn.jpg', description: 'Press button to change color' , link: 'https://michalkcb.github.io/homePage/projectsJs/lvl1/bgColorChangeByBtn/index.html',},
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/toDoApp.jpg', description: 'Simple to do app' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/toDoApp1',},
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/wordCounter.jpg', description: 'Counting words in text' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/wordsCounter',},
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/toDoApp.jpg', description: 'To do App witt Arry' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/toDoApp2Array',},
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/darkModeByBtn.jpg', description: 'Press btn to switch to dark mode' , link: 'https://github.com/Michalkcb/myProjects/tree/master/ProjectsLvl1/darkMode',},
    { imageSrc: 'https://michalkcb.github.io/homePage/assets/guessNumber.jpg', description: 'Game: guess number' , link: 'https://michalkcb.github.io/homePage/projectsJs/lvl1/guessNumber/index.html',},
  ];

export default projectData;

const createJSModule = (js)=>{ 

projectData.forEach(project =>  {
    const javascriptDiv = document.querySelector('.recentJS');
  
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
  
    const projectImgDiv = document.createElement('div');
    projectImgDiv.classList.add('project-img');
  
    const image = document.createElement('img');
    image.src = project.imageSrc;
    projectImgDiv.appendChild(image);
  
    const projectDescriptionDiv = document.createElement('div');
    projectDescriptionDiv.classList.add('project-description');
    projectDescriptionDiv.textContent = project.description;
  
    const projectLink = document.createElement('a');
    projectLink.href = project.link;
    projectLink.target = '_blank';
  
    projectLink.appendChild(projectImgDiv)
    projectDiv.appendChild(projectLink);
    projectDiv.appendChild(projectDescriptionDiv);
  
    javascriptDiv.appendChild(projectDiv);
  });
}

