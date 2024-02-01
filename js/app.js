console.log('Welcome to my Homepage!!!')

//React projects
import reactData from "./modules/react.js"

reactData.forEach(project => {
const recentReact = document.querySelector('.recentReact');

  const reactDiv = document.createElement('div');
  reactDiv.classList.add('exampleReact');

  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  projectLink.target = '_blank';

  const projectImage = document.createElement('img');
  projectImage.src = project.imageSrc;
  projectImage.alt = project.alt;

  projectLink.appendChild(projectImage);
  reactDiv.appendChild(projectLink);
  recentReact.appendChild(reactDiv);
});

//JS projects
  import projectData from "./modules/javaScript.js";


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

//tailwind projects

  import tailwindData from "./modules/tailwind.js";


tailwindData.forEach(project => {
const recentTailwind = document.querySelector('.recentTW');

  const tailwindDiv = document.createElement('div');
  tailwindDiv.classList.add('example');

  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  projectLink.target = '_blank';

  const projectImage = document.createElement('img');
  projectImage.src = project.imageSrc;
  projectImage.alt = project.alt;

  projectLink.appendChild(projectImage);
  tailwindDiv.appendChild(projectLink);
  recentTailwind.appendChild(tailwindDiv);
});

//Python projects
import pythonData from "./modules/python.js"

const recentPython = document.querySelector('.recentPython');

pythonData.forEach(project => {
  const pythontDiv = document.createElement('div');
  pythontDiv.classList.add('examplePython');

  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  projectLink.target = '_blank';

  const projectImage = document.createElement('img');
  projectImage.src = project.imageSrc;
  projectImage.alt = project.alt;

  projectLink.appendChild(projectImage);
  pythontDiv.appendChild(projectLink);
  recentPython.appendChild(pythontDiv);
});

// Certificates

const certificatesDiv = document.querySelector('.certificates-container');

import certificatesData from "./modules/certificates.js"

    certificatesData.forEach(certificate =>  {
    const boxDiv = document.createElement('div');
    boxDiv.classList.add('box');

    const spanElem = document.createElement('span');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    const image = document.createElement('img');
    image.src = certificate.certificateSrc;
    contentDiv.appendChild(image);

    const certificateTitle = document.createElement('h2');
    certificateTitle.textContent = certificate.description;

    contentDiv.appendChild(certificateTitle);
    contentDiv.appendChild(image);
    spanElem.appendChild(contentDiv)
    boxDiv.appendChild(spanElem);
    certificatesDiv.appendChild(boxDiv);
});
//HTML projects

import projectsData from "./modules/html.js";


projectsData.forEach(project => {
const recent = document.querySelector('.recent');

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('example');

  const projectLink = document.createElement('a');
  projectLink.href = project.link;
  projectLink.target = '_blank';

  const projectImage = document.createElement('img');
  projectImage.src = project.imageSrc;
  projectImage.alt = project.alt;

  projectLink.appendChild(projectImage);
  projectDiv.appendChild(projectLink);
  recent.appendChild(projectDiv);
});

// Resume
const resume = document.querySelector(".resume");

const resumeWrapper = document.querySelector(".resume-wrapper");

// Left panel
const leftPanel = document.createElement("div");
leftPanel.classList.add("left-panel");
resumeWrapper.appendChild(leftPanel);

const profileImage = document.createElement("img");
profileImage.src = "assets/me1.jpg";
profileImage.alt = "";
profileImage.classList.add("me-resume");
leftPanel.appendChild(profileImage);

const contactHeading = document.createElement("h1");
contactHeading.textContent = "CONTACT:";
leftPanel.appendChild(contactHeading);

const contactList = document.createElement("ul");
const contactItems = ["E-mail: michalkcb@gmail.com", "Mobile: 603 655 331", "Birth date: 05.10.1982", "Town: Warsaw"];

contactItems.forEach((itemText) => {
  const contactItem = document.createElement("li");
  contactItem.textContent = itemText;
  contactList.appendChild(contactItem);
});

leftPanel.appendChild(contactList);

const skillsHeading = document.createElement("h1");
skillsHeading.textContent = "SKILLS:";
leftPanel.appendChild(skillsHeading);

const skillsList = document.createElement("ul");
const skills = [
  "JavaScript", "HTML5", "CSS", "SCSS", "SASS", "Microsoft BI", "SAP", "QlikView",
  "Adobe Photoshop", "Gimp", "Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint",
  "jQuery", "Negocjacje", "Prezentacje i wystąpienia", "Pricing", "Bootstrap", "Lotus Notes", "MP2"
];

skills.forEach((skill) => {
  const skillItem = document.createElement("li");
  skillItem.classList.add("skill");
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});

leftPanel.appendChild(skillsList);

const languagesHeading = document.createElement("h1");
languagesHeading.textContent = "Languages:";
leftPanel.appendChild(languagesHeading);

const languagesList = document.createElement("ul");
const languages = ["English: C1", "German: A1", "Russian: A1", "Polish: Native"];

languages.forEach((language) => {
  const languageItem = document.createElement("li");
  languageItem.classList.add("language");
  languageItem.textContent = language;
  languagesList.appendChild(languageItem);
});

leftPanel.appendChild(languagesList);

// Right panel
const rightPanel = document.createElement("div");
rightPanel.classList.add("right-panel");
resumeWrapper.appendChild(rightPanel);

const cvTitle = document.createElement("h3");
cvTitle.textContent = "CV MICHAŁ BANY";
rightPanel.appendChild(cvTitle);

const summarySection = document.createElement("div");
summarySection.classList.add("summary");
rightPanel.appendChild(summarySection);

const summaryHeading = document.createElement("h1");
summaryHeading.textContent = "SUMMARY";
summarySection.appendChild(summaryHeading);

const summaryText = document.createElement("span");
summaryText.textContent = "In my career so far I have been driven by the will to learn and " +
  "develop. I am always happy to take on new professional challenges and the opportunity " +
  "to implement my own ideas, thanks to which the company's income increases and allows " +
  "me to attract new customers. It gives me pleasure to implement new solutions and " +
  "improve processes, and this allows me to improve my existing skills. Each company is " +
  "an opportunity to acquire new skills and learn about new work tools and to pursue " +
  "interests related to the entrusted categories.";
summarySection.appendChild(summaryText);

const experienceSection = document.createElement("div");
experienceSection.classList.add("experience");
rightPanel.appendChild(experienceSection);

const experienceHeading = document.createElement("h1");
experienceHeading.textContent = "EXPERIENCE";
experienceSection.appendChild(experienceHeading);

const experiences = [
  {
    title: "02.2022 - currently Category Manager Zwieger s.p. z o.o.",
    location: "Warsaw",
    responsibility: "kitchen, table ware",
    description: [
      "Worldwide sourcing (especially EU and China)",
      "---",
      "Product development and on-boarding",
      "Negotiations",
      "Buying"
    ]
  },

  {
    title: "03.2021 - 01.2022 Key Merchandiser Otto International - ScanThor",
    location: "Warsaw",
    responsibility: "DIY, Sport, Furniture",
    description: [
      "E-commerce - OTTO.de",
      "---",
      "Sourcing",
      "Negotiations",
      "Responsibility for key customers including sales and service related tasks",
      "Product development and on-boarding",
      "Daily management of open orders between suppliers and customers",
      "Quality oversight and improvements in cooperation with Quality Department"
    ]
  },
  {
    title: "08.2019 - 11.2020 Category Manager Empik S.A.",
    location: "Warsaw",
    responsibility: "garden, hand tools, power tools, lighting, intelligent home, pet food & accessories",
    description: [
      "E-commerce - Home and Garden",
      "---",
      "sourcing",
          "negotiations",
          "buying",
          "Building marketing plans: weekly, monthly, quarter, annual, 3 years",
          "Budget building and realization: weekly, monthly, quarter,annual, 3 years","Building promotional campaigns",
        "Creating a trading strategy",
          "Implementation of solutions ensuring high profitability of products",
          "Profitability analysis (Microsoft BI)",
          "Analysis of sales and market data, (Microsoft BI, google analytics)",
          "Research on market trends and customer needs",
          "Improvement of UX client experience",
          "close cooperation with marketing, VM department and logistics",
        "dynamizing commercial offers"
    ]
  },
  {
    title: "10.2017 - 02.2019 Category Manager MAXI ZOO",
    location: "Warsaw",
    responsibility: "Cat food, Dog food, Cat nonfood, Dog nonfood",
    description: [
      "Retail & E-commerce",
      "---",
      "sourcing",
"negotiation",
"buying",
"Back catalog (SAP)",
"reating store planograms, florplans (SpacePlanner)",
"building promotional leaflets",
"managing the product range renovation project and guaranteeing the product range optimization process",
"creating a trading strategy",
"implementation of solutions ensuring high profitability of products",
"profitability analysis (Microsoft BI)",
"analysis of sales and market data, (Microsoft BI)",
"research on market trends and customer needs, (Sesta, Nielsen, GFK)",
"close cooperation with marketing, logistics and stores",
"dynamizing commercial offers"
    ]
  },
  {
    title: "04.2010 - 02.2017 Senior Category Manager Auchan Polska Sp. z o.o.",
    location: "Piaseczno",
    responsibility: "TOYS, SCHOOL, CULTURE, SPORT, GARDEN, CAMPING, AUTO, DIY, ART. KITCHEN, ART. FOR THE TABLE, HOME, TEXTILES, FURNITURE",
    description: [
      "Retail",
      "---",
      "Creating department plans",
"managing the product range renovation project and guaranteeing the product range optimization process",
"co-creating the trade strategy of the sector in close cooperation with buyers",
"implementation of solutions ensuring high profitability of products",
"product profitability analysis in selected categories",
"analysis of sales and market data",
"research on market trends and customer needs",
"close cooperation with buyers, marketing, logistics and stores",
"dynamizing commercial offers"
    ]
  },
  {
    title: "03.2008 - 03.2010 KAM & IT menager Albertech",
    location: "Warsaw",
    responsibility: "IT, WebDev, clutches",
    description: [
     "Web Development and maintenance of the company's IT network of computers and peripheral devices",
"Development + administration of the company website www.albertech.pl. + SEO",
"Translation and preparation of advertising materials: graphics + editorial (brochures, catalogues, calendars, business cards)",
"Contact with foreign and domestic suppliers"
    ]
  },
];

experiences.forEach((experience) => {
  const experienceTitle = document.createElement("h2");
  experienceTitle.textContent = experience.title;
  experienceSection.appendChild(experienceTitle);

  const experienceDetails = document.createElement("ul");
  const locationItem = document.createElement("li");
  locationItem.textContent = experience.location;
  const responsibilityItem = document.createElement("li");
  responsibilityItem.textContent = `Categories: ${experience.responsibility}`;
  
  experienceDetails.appendChild(locationItem);
  experienceDetails.appendChild(responsibilityItem);

  const descriptionItem = document.createElement("li");
  descriptionItem.textContent = "Job description:";
  const descriptionList = document.createElement("ul");

  experience.description.forEach((descriptionPoint) => {
    const pointItem = document.createElement("li");
    pointItem.textContent = descriptionPoint;
    descriptionList.appendChild(pointItem);
  });

  descriptionItem.appendChild(descriptionList);
  experienceDetails.appendChild(descriptionItem);

  experienceSection.appendChild(experienceDetails);
});

const educationSection = document.createElement("div");
educationSection.classList.add("education");
rightPanel.appendChild(educationSection);

const educationHeading = document.createElement("h1");
educationHeading.textContent = "EDUCATION";
educationSection.appendChild(educationHeading);

const educationEntries = [
  {
    date: "09.2001 - 01.2005",
    school: "Wyższa Szkoła Informatyki Stosowanej",
    field: "Field of study: Marketing & managment",
    specialisation: "Specialisation: ICT managment",
    level: "Level of education: engineer"
  },
  {
    date: "10.2005 - 01.2007",
    school: "Politechnika Warszawska",
    field: "Field of study: production engineering",
    specialisation: "Specialisation: Marketing & managment",
    level: "Level of education: Master"
  }
];

educationEntries.forEach((entry) => {
  const educationItem = document.createElement("ul");
  const dateItem = document.createElement("li");
  dateItem.textContent = entry.date;
  const schoolItem = document.createElement("li");
  schoolItem.textContent = entry.school;
  const fieldItem = document.createElement("li");
  fieldItem.textContent = entry.field;
  const specialisationItem = document.createElement("li");
  specialisationItem.textContent = entry.specialisation;
  const levelItem = document.createElement("li");
  levelItem.textContent = entry.level;

  educationItem.appendChild(dateItem);
  educationItem.appendChild(schoolItem);
  educationItem.appendChild(fieldItem);
  educationItem.appendChild(specialisationItem);
  educationItem.appendChild(levelItem);

  educationSection.appendChild(educationItem);
});

const hobbiesSection = document.createElement("div");
hobbiesSection.classList.add("hobby");
rightPanel.appendChild(hobbiesSection);

const hobbiesHeading = document.createElement("h1");
hobbiesHeading.textContent = "HOBBYS";
hobbiesSection.appendChild(hobbiesHeading);

const hobbiesList = document.createElement("div");
hobbiesList.textContent = "Coding, Books, Sailing, Swimming, Scuba diving / Diving, City runs";
hobbiesSection.appendChild(hobbiesList);

// resumeWrapper.appendChild(resume);

// scroll animation
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop -450;
    let height = section.offsetHeight;

    if (top >= offset && top < height + offset) {
      section.classList.add('show-animate');
    } 
    else {
      section.classList.remove('show-animate');
    }
  })
}

const mobNav = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');
const portfolioList = document.querySelector('.dropdown>ul');

burgerBtn.addEventListener('click', function(){
  mobNav.classList.toggle('active');
  portfolioList.classList.toggle('active');
});