const javascriptDiv = document.querySelector('.javascript');

const projectData = [
  { imageSrc: './assets/paint1.jpg', description: 'Opis projektu 1' },
  { imageSrc: './assets/paint1.jpg', description: 'Opis projektu 2' },
  { imageSrc: './assets/paint1.jpg', description: 'Opis projektu 3' },
  { imageSrc: './assets/paint1.jpg', description: 'Opis projektu 4' },
  { imageSrc: './assets/paint1.jpg', description: 'Opis projektu 5' },
  { imageSrc: './assets/paint1.jpg', description: 'Opis projektu 6' },
];

for (let i = 0; i < projectData.length; i++) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');

  const projectImgDiv = document.createElement('div');
  projectImgDiv.classList.add('project-img');

  const image = document.createElement('img');
  image.src = projectData[i].imageSrc;
  projectImgDiv.appendChild(image);

  const projectDescriptionDiv = document.createElement('div');
  projectDescriptionDiv.classList.add('project-description');
  projectDescriptionDiv.textContent = projectData[i].description;

  projectDiv.appendChild(projectImgDiv);
  projectDiv.appendChild(projectDescriptionDiv);

  javascriptDiv.appendChild(projectDiv);
}

const certificatesDiv = document.querySelector('.certificates-container');

const certificatesData = [
  { certificateSrc: './certificates/reactOdPodstaw.jpg', description: 'React od podstaw'},
  { certificateSrc: './certificates/nodejsExpressMongoDB.jpg', description: 'Node.js Express MongoDB'},
  { certificateSrc: './certificates/introductionToWebDevelopment.jpg', description: 'Univerytet of California, Davis'},
  { certificateSrc: './certificates/zaawansowaneProjektyWCSSIJavascript.jpg', description: 'Zaawansowane projekty w CSS i JavaScript'},
  { certificateSrc: './certificates/spaceplaning.jpeg', description: 'JDA Space Planning'},
  { certificateSrc: './certificates/frontendSredniozaawansowany.jpg', description: 'Front-End średniozaawansowany'},
  { certificateSrc: './certificates/7nawykow.jpeg', description: '7 nawyków'},
  { certificateSrc: './certificates/arduinoPodstawy.jpg', description: 'Arduino podstawy'},
  { certificateSrc: './certificates/czystaReka.jpeg', description: 'Czysta ręka'},
  { certificateSrc: './certificates/fundamentyProgramowania.jpg', description: 'Fundamenty programowania'},
  { certificateSrc: './certificates/javascriptOdPodstaw.jpg', description: 'JavaScript od podstaw'},
  { certificateSrc: './certificates/matematykaPodstawy.jpg', description: 'Matematyka od podstaw'},
  { certificateSrc: './certificates/MQL5Podstawy.jpg', description: 'MQL5 - podstawy'},
  { certificateSrc: './certificates/podstawyWebDevelopmentu.jpg', description: 'Podstawy Web Developmentu'},
  { certificateSrc: './certificates/prawoWIT.jpg', description: 'Prawo w IT'},
  { certificateSrc: './certificates/samoorganizacja.jpeg', description: 'Samoorganizacja'},
  { certificateSrc: './certificates/seo.jpg', description: 'SEO'},
  { certificateSrc: './certificates/sieciKomputerowe.jpg', description: 'Sieci komputerowe'},
  { certificateSrc: './certificates/storyboard.jpeg', description: 'Storyboard'},
  { certificateSrc: './certificates/wizytowkaGoogle.jpg', description: 'Wizytówka Google'},
  { certificateSrc: './certificates/wordpress.jpg', description: 'Wordpress'},
  { certificateSrc: './certificates/wprowadzenieDoProgramowania.jpg', description: 'Wprowadzenie do programowania'},
  { certificateSrc: './certificates/wstepDoInzynieriiOprogramowania.jpg', description: 'Wstęp do inżynierii oprogramowania'},
  { certificateSrc: './certificates/wystapienia i prezentacje.jpeg', description: 'Wystąpienia i prezentacje'},
  { certificateSrc: './certificates/zarzadzanieProjektamiIT.jpg', description: 'Zarządzanie projektami w IT'},
]

for (let i = 0; i < certificatesData.length; i++) {
    const boxDiv = document.createElement('div');
    boxDiv.classList.add('box');

    const spanElem = document.createElement('span');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const image = document.createElement('img');
    image.src = certificatesData[i].certificateSrc;
    contentDiv.appendChild(image);

    const certificateTitle = document.createElement('h2');
    certificateTitle.textContent = certificatesData[i].description;

    contentDiv.appendChild(certificateTitle);
    contentDiv.appendChild(image);
    spanElem.appendChild(contentDiv)
    boxDiv.appendChild(spanElem);
    certificatesDiv.appendChild(boxDiv);
}







