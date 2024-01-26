const container = document.querySelector('.container');
const optionContainer = document.querySelector('.opt-container')
const country = "pl";
const options = ["general","entertainment", "business", "health", "science", "sports", "technology"];

let requestURL;

const generateUI = (articles) => {
    for(let item of articles) {
        let card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `<div class="news-image-container">
        <img src="${item.urlToImage || ".newspaper.jpg"} " alt="" />
        </div>
        <div class="news-content">
            <div class="news-title">
                ${item.title}
                </div>
                <div class="news-description">
                    ${item.description || item.content || ""}
                </div>
                <a href="${item.url}" target="_blank" class="viev-button">Read More</a>
        </div>`;
        container.appendChild(card);
    }
};

const getNews = async () => {
    container.innerHTML = "";
    let response = await fetch(requestURL);
    if (!response.ok) {
        alert("Data unavailble at the moment. Please try agzn later");
        return false;
    }
    let data = await response.json();
    generateUI(data.articles);
}

const init = ()=> {
    optionContainer.innerHTML = "";
    getNews();
    createOptions();

};

window.onload = () => {
    requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}`;
    init();
}