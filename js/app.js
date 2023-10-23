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







