let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let dishs = document.querySelectorAll(".dish");
let dishName = document.querySelectorAll(".dishName");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
// console.log(prevBtn);

let count = 0;

// console.log(dishs);
const getData = async (value) => {
  try {
    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    let jsonData = await data.json();

    document.querySelector(".showMeal").innerHTML = "";
    // console.log(jsonData.meals);

    jsonData.meals.forEach(function (curData) {
      // console.log(curData);

      let div = document.createElement("div");
      div.classList.add("card");
      div.innerHTML = `
        <img src=${curData.strMealThumb} alt="" class="card_img">
            <p>${curData.strMeal}</p>
            <a href=${curData.strYoutube} target="blank"><img src="yt.png" alt="youtube button" class="yt_btn"></a>
        `;
      document.querySelector(".showMeal").appendChild(div);
    });
  } catch (error) {
    document.querySelector(".showMeal").innerHTML = "<h1>Meal Not Find</h1>";
  }
};

searchBtn.addEventListener("click", function () {
  let searchValue = searchInput.value;
  if (searchValue == "") {
    alert("SearchValue First");
  } else {
    getData(searchValue);
  }
});

addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let searchValue = searchInput.value;
    if (searchValue == "") {
      alert("SearchValue First");
    } else {
      getData(searchValue);
    }
  }
});

dishs.forEach(function (name) {
  name.addEventListener("click", function () {
    console.log(name.value);
    getData(name.value);
  });
});

// slider
dishName.forEach(function (dish, index) {
  dish.style.left = `${index * 100}%`;
});

function myMealFinder() {
  dishName.forEach(function (curVal) {
    curVal.style.transform = `translateX(-${count * 100}%)`;
  });
}

nextBtn.addEventListener("click", function () {
  count++;
  if (count == dishName.length) {
    count = 0;
  }
  myMealFinder();
});
// console.log(document.querySelector("#prevBtn").value);

prevBtn.addEventListener("click", function () {
  count--;
  if (count == -1) {
    count = dishName.length - 1;
  }
  myMealFinder();
});

function init() {
  // Call getData with "chicken" as the initial search value
  getData("chicken");
}

//dark mode
let darkModeBtn = document.querySelector(".header_btn");
let body = document.querySelector("body");
let logo = document.querySelector(".logo_img");
let dark_btn = document.querySelector(".header_btn");
let cards = [...document.querySelectorAll("card")];

console.log(cards);

let isDarkMode = false;

darkModeBtn.addEventListener("click", function () {
  if (isDarkMode) {
    body.classList.remove("dark-mode");
    logo.classList.remove("logo-dark-mode");
    dark_btn.classList.remove("dark-mode");
    searchInput.classList.remove("inp-dark-mode");
    prevBtn.classList.remove("prev-dark-mode");
    nextBtn.classList.remove("prev-dark-mode");
    cards.forEach((card) => {
      card.classList.remove("card-dark-mode");
    });

    darkModeBtn.textContent = "Dark mode";
  } else {
    body.classList.add("dark-mode");
    logo.classList.add("logo-dark-mode");
    dark_btn.classList.add("dark-mode");
    searchInput.classList.add("inp-dark-mode");
    prevBtn.classList.add("prev-dark-mode");
    nextBtn.classList.add("prev-dark-mode");
    cards.forEach((card)=>{
      card.classList.add("card-dark-mode")
    })

    darkModeBtn.textContent = "Light mode";
  }
  isDarkMode = !isDarkMode;
});
//end darkmode

window.onload = init;
