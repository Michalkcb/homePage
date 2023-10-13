const btnHome = document.querySelector(".home");
const btnProject = document.querySelector(".projects");
const btnInfo = document.querySelector(".info");
const btnMail = document.querySelector(".mail");

const home = document.querySelector(".s1");
const project = document.querySelector(".s2");
const info = document.querySelector(".s3");
const mail = document.querySelector(".s5");

function homeActiv() {
  home.classList.add("active");
  project.classList.remove("active");
  info.classList.remove("active");
  mail.classList.remove("active");
}

function projectActiv() {
  home.classList.remove("active");
  project.classList.add("active");
  info.classList.remove("active");
  mail.classList.remove("active");
}
function infoActiv() {
  home.classList.remove("active");
  project.classList.remove("active");
  info.classList.add("active");
  mail.classList.remove("active");
}

function mailActiv() {
  home.classList.remove("active");
  project.classList.remove("active");
  info.classList.remove("active");
  mail.classList.add("active");
}
btnHome.addEventListener("click", homeActiv);
btnProject.addEventListener("click", projectActiv);
btnInfo.addEventListener("click", infoActiv);
btnMail.addEventListener("click", mailActiv);
