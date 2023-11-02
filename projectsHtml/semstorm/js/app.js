const header = document.querySelector('.header');
const headerElement = document.createElement('h1');
headerElement.textContent = 'Michał Bany';
header.appendChild(headerElement);

const sidebar = document.querySelector('.sidebar');
const sidebarElement = document.createElement('p');
sidebarElement.innerHTML = 'Wyższa Szkoła Informatyki Stosowanej i zarządzania <br><br> English: C1 <br> HTML: mid <br> CSS: mid <br> JS: junior <br> GIT: junior<br><br> <a href="https://michalkcb.github.io/homePage/" target="blank">homePage</a><br><a href="https://github.com/Michalkcb/myProjects" target="blank">myProjects</a>';
sidebar.classList.add('round-corners')
sidebar.appendChild(sidebarElement);

const main = document.querySelector('.main');
const mainElement = document.createElement('h3');
mainElement.innerHTML = 'Motivation Letter <img src="./assets/logo-dark.png">';
main.classList.add('round-corners')
main.appendChild(mainElement);

const section = document.querySelector('.section');
const sectionlement = document.createElement('p');
sectionlement.innerHTML = 'Jeszcze na początku lat 2000 w trakcie studiow zacząłem twrzyć strony www aby dorobić trochę na studiach. Stworzyłem też własny serwis www.playstation2.pl który prowadziłem przez 2 lata. Po studiach w firmie Albertech zajmowałem sie tworzeniem i administracją firmowej strony www. A moja strona www została zapomniana. Potem moje drogi z programowaniem się rozeszły.<br> <br>Powróciłem jednak do mojej starej pasii. Ukończyłem w tym roku kilka kursów Front-End na studiuje.it, udemy oraz University of California: Davis.   ';
section.classList.add('round-corners')

section.appendChild(sectionlement);

const content = document.querySelector('.content');
const contentElement = document.createElement('h3');
contentElement.textContent = 'Uważam, że moje umiejętności odpowiadają, tym które zostały umieszczone w ogłoszeniu na Front-end Developer na stronie https://theprotocol.it. Zachęcam do odwiedzenia linków po lewej stronie do mojej domowej strony oraz moich projektów na GitHub. Wszystkie te rzeczy zostały przeze mnie napisane przy użyciu VisualStudioCode i zacomitowane za pomocą Git do Github. ';
content.classList.add('round-corners')

content.appendChild(contentElement);

const footer = document.querySelector('.footer');
const footerElement = document.createElement('p');
footerElement.innerHTML = 'michalkcb@gmail.com <br>mob.:603 655 331';
footer.appendChild(footerElement);