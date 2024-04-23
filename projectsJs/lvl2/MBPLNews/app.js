const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".opt-container");
const country = "pl";
const language = "en";
const options = [
  "general",
  "entertainment",
  "business",
  "health",
  "science",
  "sports",
  "technology",
];

let requestURL;

const generateUI = (articles) => {
  for (let item of articles) {
    let card = document.createElement("div");
    card.classList.add("news-card");
    card.innerHTML = `<div class="news-image-container">
      <img src="${item.image}" alt="" />
      </div>
      <div class="news-content">
        <div class="news-title">
          ${item.title}
        </div>
        <div class="news-description">
        ${item.description || item.content || ""}
        </div>
        <div>
        <a href="${item.url}" target="_blank" class="view-button">Read More</a>
      </div>
      <div class="news-source">
        ${item.source.name}
        </div>`;

    container.appendChild(card);
  }
};

const getNews = async () => {
  container.innerHTML = "";
  let response = await fetch(requestURL);
  if (!response.ok) {
    alert("Data unavailble at the moment. Please try agin later");
    return false;
  }
  let data = await response.json();
  generateUI(data.articles);
};

const selectCategory = (e, category) => {
  let options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("active");
  });

  requestURL = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&max=10&apikey=${apiKey}`;
  e.target.classList.add("active");
  getNews();
};

const createOptions = () => {
  for (let i of options) {
    optionsContainer.innerHTML += `<button class="option ${
      i == "general" ? "active" : ""
    }" onclick="selectCategory(event,'${i}')">${i}</button>`;
  }
};

const init = () => {
  optionsContainer.innerHTML = "";
  getNews();
  createOptions();
};

window.onload = () => {
  requestURL = `https://gnews.io/api/v4/top-headlines?category=general&lang=${language}&country=${country}&max=10&apikey=${apiKey}`;
  init();
};
