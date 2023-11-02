const header = document.querySelector('.header');
const headerElement = document.createElement('h1');
headerElement.textContent = 'Michał Bany';
header.appendChild(headerElement);

const sidebar = document.querySelector('.sidebar');
const sidebarElement = document.createElement('p');
sidebarElement.innerHTML = 'Wyższa Szkoła Informatyki Stosowanej i zarządzania <br><br> English: C1 <br> HTML: mid <br> CSS: mid <br> JS: junior <br> GIT: junior<br><br> <a href="https://michalkcb.github.io/homePage/" target="blank">homePage</a><br><a href="https://github.com/Michalkcb/myProjects" target="blank">myProjects</a>';
sidebar.appendChild(sidebarElement);

const main = document.querySelector('.main');
const mainElement = document.createElement('h3');
mainElement.textContent = 'Motivation Letter SEMSTORM';
main.appendChild(mainElement);

const footer = document.querySelector('.footer');
const footerElement = document.createElement('p');
footerElement.innerHTML = 'michalkcb@gmail.com <br>mob.:603 655 331';
footer.appendChild(footerElement);